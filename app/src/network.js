// Procedural morphology, not a growth or hydraulic simulation.
// The graph keeps closed loops; a weighted spanning tree only varies tube thickness.
export const TUBE_SCALE = .16;
export const tubePorts = [{x:0,z:8*TUBE_SCALE},{x:0,z:-16*TUBE_SCALE}];

function randomGenerator(seed) {
  return () => { seed=(Math.imul(seed,1664525)+1013904223)>>>0; return seed/4294967296; };
}

export function boundaryRadius(angle) {
  return 12.4+1.6*Math.sin(3*angle+.6)+1.0*Math.cos(5*angle-1)+.45*Math.sin(9*angle);
}

function withinBody(p) {
  const z=p.z/.88;
  return Math.hypot(p.x,z)<boundaryRadius(Math.atan2(z,p.x));
}

function triangle(a,b,c,points) {
  const p=points[a],q=points[b],r=points[c];
  const d=2*(p.x*(q.z-r.z)+q.x*(r.z-p.z)+r.x*(p.z-q.z));
  if(Math.abs(d)<1e-9)return null;
  const pp=p.x*p.x+p.z*p.z,qq=q.x*q.x+q.z*q.z,rr=r.x*r.x+r.z*r.z;
  const x=(pp*(q.z-r.z)+qq*(r.z-p.z)+rr*(p.z-q.z))/d;
  const z=(pp*(r.x-q.x)+qq*(p.x-r.x)+rr*(q.x-p.x))/d;
  return {a,b,c,x,z,r2:(x-p.x)**2+(z-p.z)**2};
}

function delaunay(sites) {
  const count=sites.length,points=[...sites,{x:-100,z:-80},{x:100,z:-80},{x:0,z:100}];
  let triangles=[triangle(count,count+1,count+2,points)];
  for(let i=0;i<count;i++) {
    const p=points[i],boundary=new Map(),keep=[];
    for(const t of triangles) {
      if((t.x-p.x)**2+(t.z-p.z)**2<t.r2) {
        for(const [a,b] of [[t.a,t.b],[t.b,t.c],[t.c,t.a]]) {
          const key=a<b?`${a},${b}`:`${b},${a}`;
          if(boundary.has(key))boundary.delete(key);else boundary.set(key,[a,b]);
        }
      } else keep.push(t);
    }
    for(const [a,b] of boundary.values()){const t=triangle(a,b,i,points);if(t)keep.push(t);}
    triangles=keep;
  }
  return triangles.filter(t=>t.a<count&&t.b<count&&t.c<count);
}

export function makeNetworkGraph(seed=719) {
  const random=randomGenerator(seed),sites=[];
  // Uneven sampling avoids a regular honeycomb and creates regions of finer mesh.
  // Sites outside the body keep boundary cells finite.
  for(let attempt=0;attempt<22000&&sites.length<1700;attempt++) {
    const x=(random()-.5)*34,z=(random()-.5)*32;
    const spacing=.26+.46*(.5+.5*Math.sin(x*.55)*Math.cos(z*.63));
    if(sites.every(p=>(p.x-x)**2+(p.z-z)**2>spacing*spacing))sites.push({x,z});
  }
  const triangles=delaunay(sites),vertices=[],triToVertex=new Map();
  triangles.forEach((t,i)=>{if(withinBody(t)){triToVertex.set(i,vertices.length);vertices.push({x:t.x,z:t.z});}});
  const adjacency=new Map(),edges=[];
  triangles.forEach((t,i)=>{
    for(const [a,b] of [[t.a,t.b],[t.b,t.c],[t.c,t.a]]){
      const key=a<b?`${a},${b}`:`${b},${a}`;
      if(adjacency.has(key)){
        const u=triToVertex.get(adjacency.get(key)),v=triToVertex.get(i);
        if(u!==undefined&&v!==undefined&&Math.hypot(vertices[u].x-vertices[v].x,vertices[u].z-vertices[v].z)>.035)edges.push({a:u,b:v});
      }else adjacency.set(key,i);
    }
  });
  // Keep the largest connected component after cropping at the irregular outline.
  const neighbors=vertices.map(()=>[]);
  edges.forEach(e=>{neighbors[e.a].push(e.b);neighbors[e.b].push(e.a);});
  const visited=new Set();let largest=[];
  for(let i=0;i<vertices.length;i++){
    if(visited.has(i))continue;
    const component=[i];visited.add(i);
    for(let k=0;k<component.length;k++)for(const n of neighbors[component[k]])if(!visited.has(n)){visited.add(n);component.push(n);}
    if(component.length>largest.length)largest=component;
  }
  const ids=new Map(largest.map((id,i)=>[id,i])),nodes=largest.map(id=>vertices[id]);
  const connected=edges.filter(e=>ids.has(e.a)&&ids.has(e.b)).map(e=>({a:ids.get(e.a),b:ids.get(e.b)}));
  const ports=tubePorts.map(p=>{
    const nearest=nodes.map((n,i)=>({i,d:Math.hypot(p.x-n.x,p.z-n.z)})).sort((a,b)=>a.d-b.d).slice(0,3);
    const id=nodes.length;nodes.push({...p});
    nearest.forEach(n=>connected.push({a:id,b:n.i,junction:true}));return id;
  });
  connected.push({a:ports[0],b:ports[1],explorable:true});
  const links=nodes.map(()=>[]);
  connected.forEach((e,i)=>{e.length=Math.hypot(nodes[e.a].x-nodes[e.b].x,nodes[e.a].z-nodes[e.b].z);links[e.a].push({to:e.b,edge:i});links[e.b].push({to:e.a,edge:i});});
  const dist=nodes.map(()=>Infinity),parent=nodes.map(()=>-1),used=nodes.map(()=>false);
  dist[ports[1]]=0;
  for(let k=0;k<nodes.length;k++) {
    let current=-1;
    for(let i=0;i<nodes.length;i++)if(!used[i]&&(current<0||dist[i]<dist[current]))current=i;
    if(current<0||!Number.isFinite(dist[current]))break;
    used[current]=true;
    for(const next of links[current]){
      const cost=dist[current]+connected[next.edge].length;
      if(cost<dist[next.to]){dist[next.to]=cost;parent[next.to]=next.edge;}
    }
  }
  const load=nodes.map(()=>1),edgeLoad=connected.map(()=>0);
  const order=nodes.map((_,i)=>i).sort((a,b)=>dist[b]-dist[a]);
  for(const i of order){const edge=parent[i];if(edge<0)continue;edgeLoad[edge]=load[i];const e=connected[edge];load[e.a===i?e.b:e.a]+=load[i];}
  connected.forEach((e,i)=>{
    e.radius=e.explorable?.72*TUBE_SCALE:Math.min(.16,.014+.01*Math.sqrt(edgeLoad[i])+.006*random());
    if(e.junction)e.radius=Math.max(.065,e.radius);
    e.bend=(random()-.5)*.16;
  });
  const fronts=[.22,1.35,2.9,4.1,5.4].map((a,i)=>{
    const r=boundaryRadius(a)-.75;
    return {x:Math.cos(a)*r,z:Math.sin(a)*r*.88,angle:a,width:1.0+(i%3)*.3,length:1.35+(i%2)*.3};
  });
  return {nodes,edges:connected,ports,fronts};
}
