import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {makeNetworkGraph,TUBE_SCALE,boundaryRadius} from './network';

// One world and one camera: the tube interior occupies the same coordinates as its exterior.
export const stops = [0, .29, .56, .88];
export const stageAt = p => p < .16 ? 0 : p < .43 ? 1 : p < .70 ? 2 : 3;
const clamp = THREE.MathUtils.clamp;
const vec = (x,y,z) => new THREE.Vector3(x,y,z);

export function createWorld(host, callbacks) {
  let disposed=false, raf, progress=0, target=0, lastStage=-1, lastDepth=-1, yaw=0, pitch=0;
  let focusPoint=null,focusBlend=0,frontIndex=0;
  let paused=false, isolated=false, separated=false, lastTime=performance.now(), elapsed=0;
  const scene=new THREE.Scene();
  scene.background=new THREE.Color('#12181a');
  const camera=new THREE.PerspectiveCamera(47,1,.0015,180);
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.6));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=.92;
  renderer.domElement.setAttribute('aria-label','Modelo 3D interativo de Physarum');
  host.appendChild(renderer.domElement);
  const ambient=new THREE.HemisphereLight(0xe7f4ef,0x483215,1.25); scene.add(ambient);
  const key=new THREE.DirectionalLight(0xffe3a1,3.0);key.position.set(-8,18,12);scene.add(key);
  const fill=new THREE.DirectionalLight(0x87e9e3,1.3);fill.position.set(16,8,-10);scene.add(fill);
  const torch=new THREE.PointLight(0xffde79,0,10*TUBE_SCALE,1.3);scene.add(torch);
  let seed=719;
  const rnd=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  function organic(material,scale=12){
    material.onBeforeCompile=shader=>{
      shader.vertexShader='varying vec3 vOrganic;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvOrganic = position;');
      shader.fragmentShader='varying vec3 vOrganic;\n'+shader.fragmentShader;
      shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
        vec3 q = vOrganic * ${scale.toFixed(1)};
        float n = sin(q.x+sin(q.z*.71))*sin(q.y*.83+cos(q.z*.65));
        float fine = sin(q.x*8.3+q.z*7.9)*sin(q.y*9.1-q.z*6.7);
        diffuseColor.rgb *= .72 + n*.22 + fine*.12;
      `);
    };return material;
  }
  const gold=organic(new THREE.MeshStandardMaterial({color:0xe2b92f,roughness:.48,metalness:.12}),9);
  const cortex=organic(new THREE.MeshStandardMaterial({color:0xab8421,roughness:.53,metalness:.16,side:THREE.DoubleSide}),24);
  const network=new THREE.Group();scene.add(network);
  const parts=[];
  function strand(points,r,segments=12){return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),segments,r,5,false);}
  const graph=makeNetworkGraph();
  const junctionRadius=graph.nodes.map(()=>0);
  for(const e of graph.edges){
    if(e.explorable)continue;
    const a=graph.nodes[e.a],b=graph.nodes[e.b],dx=b.x-a.x,dz=b.z-a.z;
    parts.push(strand([vec(a.x,.12,a.z),vec((a.x+b.x)/2-dz*e.bend,.13+e.radius*.08,(a.z+b.z)/2+dx*e.bend),vec(b.x,.12,b.z)],e.radius,6));
    junctionRadius[e.a]=Math.max(junctionRadius[e.a],e.radius);
    junctionRadius[e.b]=Math.max(junctionRadius[e.b],e.radius);
  }
  // Rounded joins prevent disconnected-looking sticks at branching points.
  graph.nodes.forEach((p,i)=>{const g=new THREE.SphereGeometry(junctionRadius[i]*.96,8,6);g.translate(p.x,.12,p.z);parts.push(g);});
  function fineBranch(x,z,angle,length,radius,depth){
    const nx=x+Math.cos(angle)*length,nz=z+Math.sin(angle)*length;
    if(Math.hypot(nx,nz)>17)return;
    parts.push(strand([vec(x,.12,z),vec((x+nx)/2,.14,(z+nz)/2),vec(nx,.12,nz)],radius,4));
    if(depth>0){fineBranch(nx,nz,angle+.3+rnd()*.25,length*.62,radius*.62,depth-1);fineBranch(nx,nz,angle-.3-rnd()*.25,length*.67,radius*.62,depth-1);}
  }
  for(const p of graph.nodes){
    const a=Math.atan2(p.z/.88,p.x),r=Math.hypot(p.x,p.z/.88);
    if(r/boundaryRadius(a)>.84&&rnd()<.32)fineBranch(p.x,p.z,a+(rnd()-.5)*.9,.35+rnd()*.6,.024,3);
  }
  const frontMeshes=[];
  for(const front of graph.fronts){
    const shape=new THREE.Shape();shape.moveTo(-.85,0);
    const outline=[];
    for(let i=0;i<=48;i++){
      const a=-Math.PI/2+i/48*Math.PI;
      const r=front.length*(1+.065*Math.sin(a*17)+.035*Math.cos(a*29));
      const x=Math.cos(a)*r,z=Math.sin(a)*front.width;
      shape.lineTo(x,z);outline.push({x,z});
    }
    shape.closePath();
    const geometry=new THREE.ExtrudeGeometry(shape,{depth:.028,bevelEnabled:true,bevelSize:.035,bevelThickness:.018,bevelSegments:2,steps:1});
    geometry.rotateX(-Math.PI/2);geometry.rotateY(-front.angle);geometry.translate(front.x,.065,front.z);
    const frontMesh=new THREE.Mesh(geometry,organic(new THREE.MeshStandardMaterial({color:0xd5b943,roughness:.66,metalness:.03,side:THREE.DoubleSide}),13));
    frontMesh.userData.structure='Frente de expansão';frontMesh.userData.frontIndex=frontMeshes.length;network.add(frontMesh);frontMeshes.push(frontMesh);
    const point=(x,z)=>vec(front.x+x*Math.cos(front.angle)-z*Math.sin(front.angle),.13,front.z+x*Math.sin(front.angle)+z*Math.cos(front.angle));
    for(let i=0;i<outline.length;i+=2){const p=outline[i];parts.push(strand([point(-.7,0),point(p.x*.55,p.z*.46),point(p.x*.93,p.z*.93)],.012+rnd()*.013,8));}
    const nearest=graph.nodes.map(p=>({p,d:Math.hypot(p.x-front.x,p.z-front.z)})).sort((a,b)=>a.d-b.d).slice(0,3);
    for(const {p} of nearest)parts.push(strand([vec(p.x,.12,p.z),point(-.7,0),point(.1,0)],.045,7));
  }
  const networkGeo=mergeGeometries(parts);parts.forEach(g=>g.dispose());
  const meshNetwork=new THREE.Mesh(networkGeo,gold);meshNetwork.userData.structure='Rede tubular';network.add(meshNetwork);
  const dish=new THREE.Mesh(new THREE.CylinderGeometry(18,18,.32,96),new THREE.MeshStandardMaterial({color:0x161f23,roughness:.4,metalness:.5}));dish.position.y=-.56;network.add(dish);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(18,.14,10,100),new THREE.MeshStandardMaterial({color:0x516266,metalness:.75,roughness:.3}));rim.rotation.x=Math.PI/2;rim.position.y=-.34;network.add(rim);
  const tube=new THREE.Group();tube.scale.setScalar(TUBE_SCALE);tube.position.y=.12;scene.add(tube);
  const wallGeo=new THREE.CylinderGeometry(.72,.72,24,64,90,true);wallGeo.rotateX(Math.PI/2);wallGeo.translate(0,0,-4);
  const positions=wallGeo.attributes.position;
  for(let i=0;i<positions.count;i++){
    const x=positions.getX(i),y=positions.getY(i),z=positions.getZ(i),a=Math.atan2(y,x);
    const wobble=1+.095*Math.sin(z*2+a*5)+.037*Math.cos(z*6-a*4);
    positions.setXYZ(i,x*wobble,y*wobble,z);
  }
  wallGeo.computeVertexNormals();
  const wall=new THREE.Mesh(wallGeo,cortex);wall.userData.structure='Tubo plasmodial';tube.add(wall);
  seed=2041; // Interior stays reproducible when the external graph changes.
  const fibreParts=[];
  for(let i=0;i<96;i++){
    const points=[],a=i/96*Math.PI*2;
    for(let j=0;j<=60;j++){const z=8-j*.4,twist=a+Math.sin(z*1.3+i)*.22+Math.cos(z*.43+i*2)*.12,r=.66+.065*Math.sin(z*2+twist*5);points.push(vec(Math.cos(twist)*r,Math.sin(twist)*r,z));}
    fibreParts.push(strand(points,.004+rnd()*.009,120));
  }
  for(let j=0;j<80;j++){
    const points=[],z=7.7-j*.29,phase=rnd()*6.28;
    for(let i=0;i<=36;i++){let a=i/36*Math.PI*2,r=.655+.06*Math.sin(a*5+z*2);points.push(vec(Math.cos(a)*r,Math.sin(a)*r,z+.18*Math.sin(a*4+phase)));}
    fibreParts.push(strand(points,.003+rnd()*.005,72));
  }
  const fibres=new THREE.Mesh(mergeGeometries(fibreParts),organic(new THREE.MeshStandardMaterial({color:0xe3b649,roughness:.42,metalness:.23}),36));fibreParts.forEach(g=>g.dispose());tube.add(fibres);
  const nuclei=[],nuclearMaterial=organic(new THREE.MeshPhysicalMaterial({color:0xf1c448,roughness:.35,metalness:.14,clearcoat:.7}),32);
  const sphere=new THREE.SphereGeometry(1,22,16);
  for(let i=0;i<22;i++){
    const mesh=new THREE.Mesh(sphere,nuclearMaterial);const a=rnd()*Math.PI*2,r=.12+rnd()*.28;
    mesh.position.set(Math.cos(a)*r,Math.sin(a)*r,6.3-i*.87);mesh.scale.setScalar(.055+rnd()*.055);
    mesh.userData={structure:'Núcleo',baseZ:mesh.position.z,phase:rnd()*Math.PI*2};
    const core=new THREE.Mesh(sphere,new THREE.MeshStandardMaterial({color:0x785116,roughness:.7}));core.scale.setScalar(.27);core.position.set(.14,.2,.12);mesh.add(core);
    tube.add(mesh);nuclei.push(mesh);
  }
  const particleGeo=new THREE.BufferGeometry(),particlePos=new Float32Array(1800);
  for(let i=0;i<600;i++){const a=rnd()*Math.PI*2,r=Math.sqrt(rnd())*.64;particlePos[i*3]=Math.cos(a)*r;particlePos[i*3+1]=Math.sin(a)*r;particlePos[i*3+2]=8-rnd()*24;}
  particleGeo.setAttribute('position',new THREE.BufferAttribute(particlePos,3));
  const particleMat=new THREE.PointsMaterial({color:0xffe5a1,size:.011*TUBE_SCALE,transparent:true,opacity:.4});
  particleMat.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <clipping_planes_fragment>','#include <clipping_planes_fragment>\nif (length(gl_PointCoord - vec2(.5)) > .5) discard;');};
  const particles=new THREE.Points(particleGeo,particleMat);tube.add(particles);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(.77,.012,8,64),new THREE.MeshBasicMaterial({color:0x6ce4de}));ring.position.z=8;tube.add(ring);
  const inTube=p=>p.multiplyScalar(TUBE_SCALE).add(vec(0,.12,0));
  const anchors=[vec(23,29,32),vec(3,5,9),inTube(vec(.2,1.5,11.5)),inTube(vec(0,.02,5)),inTube(vec(0,.015,-3.5))];
  const looks=[vec(0,0,0),vec(0,.12,.4),inTube(vec(0,0,5)),inTube(vec(0,0,-2)),inTube(vec(0,0,-10))];
  const anchorDepth=[0,.29,.56,.77,1];
  const raycaster=new THREE.Raycaster();let pointer=null,selectedNucleus=null;
  const selection=new THREE.Mesh(new THREE.TorusGeometry(.13,.002,6,48),new THREE.MeshBasicMaterial({color:0x75f7e3,depthTest:false}));selection.scale.setScalar(TUBE_SCALE);selection.visible=false;selection.renderOrder=10;scene.add(selection);
  const down=e=>{pointer={x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,id:e.pointerId};host.setPointerCapture(e.pointerId);};
  const move=e=>{if(!pointer)return;yaw-=(e.clientX-pointer.lastX)*.004;pitch=clamp(pitch+(e.clientY-pointer.lastY)*.004,-.7,.7);pointer.lastX=e.clientX;pointer.lastY=e.clientY;};
  function focusFront(step=0,index){frontIndex=index??((frontIndex+step+frontMeshes.length)%frontMeshes.length);const f=graph.fronts[frontIndex];focusPoint={x:f.x,z:f.z};callbacks.onSelect('Frente de expansão');}
  const up=e=>{
    if(pointer&&Math.hypot(e.clientX-pointer.x,e.clientY-pointer.y)<5){
      const b=host.getBoundingClientRect();raycaster.setFromCamera(new THREE.Vector2((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1),camera);
      const targets=progress<.7?[wall,meshNetwork,...frontMeshes]:[wall,...nuclei];
      let hits=raycaster.intersectObjects(targets.filter(o=>o.parent?.visible),false);
      // Fine veins lie on top of the front sheet: keep the whole fan selectable.
      const frontHit=hits.find(h=>h.object.userData.structure==='Frente de expansão');if(frontHit&&(!hits[0]||frontHit.distance-hits[0].distance<.25))hits=[frontHit];
      if(hits.length){const name=hits[0].object.userData.structure;callbacks.onSelect(name);if(name==='Frente de expansão')focusFront(0,hits[0].object.userData.frontIndex);else focusPoint=null;selectedNucleus=name==='Núcleo'?hits[0].object:null;if(name==='Tubo plasmodial'&&progress<.43){focusPoint=null;target=.56;}}
    }pointer=null;
  };
  const wheel=e=>{e.preventDefault();if(focusPoint)callbacks.onSelect('');focusPoint=null;target=clamp(target+clamp(e.deltaY,-110,110)*.00065,0,1);};
  const cancel=()=>pointer=null;
  host.addEventListener('pointerdown',down);host.addEventListener('pointermove',move);host.addEventListener('pointerup',up);host.addEventListener('pointercancel',cancel);host.addEventListener('wheel',wheel,{passive:false});
  const resize=()=>{const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();};
  const observer=new ResizeObserver(resize);observer.observe(host);resize();
  const cam=vec(0,0,0),look=vec(0,0,0),offset=vec(0,0,0),lastFocus=vec(0,0,0);
  function render(now){
    if(disposed)return;const dt=Math.min((now-lastTime)/1000,.05);lastTime=now;
    if(!host.clientWidth||!host.clientHeight){raf=requestAnimationFrame(render);return;}
    if(!paused)elapsed+=dt;
    progress=THREE.MathUtils.damp(progress,target,6,dt);
    let idx=0;while(idx<3&&progress>anchorDepth[idx+1])idx++;
    const t=THREE.MathUtils.smoothstep(progress,anchorDepth[idx],anchorDepth[idx+1]);
    cam.lerpVectors(anchors[idx],anchors[idx+1],t);look.lerpVectors(looks[idx],looks[idx+1],t);
    const inside=THREE.MathUtils.smoothstep(progress,.64,.78);
    offset.copy(cam).sub(look);offset.applyAxisAngle(vec(0,1,0),yaw*(1-inside));offset.y+=pitch*offset.length()*(1-inside);camera.position.copy(look).add(offset);
    look.x+=Math.sin(yaw)*3*inside*TUBE_SCALE;look.y+=pitch*3*inside*TUBE_SCALE;
    focusBlend=THREE.MathUtils.damp(focusBlend,focusPoint?1:0,6,dt);
    if(focusPoint)lastFocus.copy(vec(focusPoint.x,.12,focusPoint.z));
    if(focusBlend>.001){const orbit=vec(3,5,4).applyAxisAngle(vec(0,1,0),yaw);orbit.y+=pitch*3;camera.position.lerp(lastFocus.clone().add(orbit),focusBlend);look.lerp(lastFocus,focusBlend);}
    camera.lookAt(look);
    // Emissive cue identifies the one traversable tube; it fades before entering.
    cortex.emissive.setHex(0xffcf54);cortex.emissiveIntensity=(1-THREE.MathUtils.smoothstep(progress,.43,.68))*.95;
    torch.position.copy(camera.position);torch.intensity=inside*1.9*Math.pow(TUBE_SCALE,1.3);
    network.visible=progress<.78&&!isolated;
    fibres.scale.set(1+(separated?.3:0),1+(separated?.3:0),1);
    wall.material.transparent=separated;wall.material.opacity=separated?.18:1;
    for(const n of nuclei)n.position.z=n.userData.baseZ+Math.sin(elapsed*.8+n.userData.phase)*.45;
    selection.visible=!!selectedNucleus&&progress>.65;
    if(selection.visible){selectedNucleus.getWorldPosition(selection.position);selection.quaternion.copy(camera.quaternion);}
    particles.position.z=Math.sin(elapsed*.8)*.3;
    const stage=stageAt(progress);if(stage!==lastStage){lastStage=stage;callbacks.onStage(stage);}
    const depth=Math.round(progress*100);if(depth!==lastDepth){lastDepth=depth;callbacks.onDepth(depth);}
    renderer.render(scene,camera);
    raf=requestAnimationFrame(render);
  }raf=requestAnimationFrame(render);
  return {
    focusFront,
    snapshot(){return {progress,yaw,pitch,elapsed,focusPoint,frontIndex,stage:stageAt(progress)};},
    restore(s){if(!s)return;focusPoint=s.focusPoint||null;frontIndex=s.frontIndex||0;focusBlend=focusPoint?1:0;progress=target=clamp(s.progress,0,1);yaw=s.yaw;pitch=s.pitch;elapsed=s.elapsed;lastStage=stageAt(progress);lastDepth=-1;selectedNucleus=null;},
    go(p){focusPoint=null;target=clamp(p,0,1);yaw=0;pitch=0;selectedNucleus=null;},
    pause(v){paused=v;},isolate(v){isolated=v;},separate(v){separated=v;},
    theme(light){scene.background.set(light?'#dce3df':'#12181a');},
    dispose(){disposed=true;cancelAnimationFrame(raf);observer.disconnect();host.removeEventListener('pointerdown',down);host.removeEventListener('pointermove',move);host.removeEventListener('pointerup',up);host.removeEventListener('pointercancel',cancel);host.removeEventListener('wheel',wheel);const geometries=new Set(),materials=new Set();scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove();}
  };
}
