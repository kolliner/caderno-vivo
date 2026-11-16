import * as T from 'three';

const vec = (x, y, z) => new T.Vector3(x, y, z);
const oral = vec(0, 1.12, 0);
const tissue = vec(.50, -.28, .28);
const cell = tissue.clone().add(vec(.08, .015, .065));
const poses = [
  [vec(3.8, 5.6, 5.9), vec(0, .05, 0)],
  [vec(.62, 5.42, 1.95), vec(0, 1.03, 0)],
  [vec(1.36, 1.68, 4.23), vec(0, .21, 0)],
  [tissue.clone().add(vec(.09, .16, .82)), tissue.clone().add(vec(-.055, 0, 0))],
  [cell.clone().add(vec(.055, .044, .25)), cell],
  [cell.clone().add(vec(.033, .088, .205)), cell.clone().add(vec(0, .02, .02))],
];

function material(color, roughness = .57) {
  return new T.MeshStandardMaterial({color, roughness});
}

function sculptSurface(columns, rows, point, tint) {
  const positions = [];
  const colors = [];
  const indices = [];
  const stride = columns + 1;
  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= columns; col++) {
      const u = col / columns;
      const v = row / rows;
      positions.push(...point(u, v));
      if (tint) colors.push(...tint(u, v));
      if (row && col) {
        const index = row * stride + col;
        indices.push(index - stride - 1, index - stride, index, index - stride - 1, index, index - 1);
      }
    }
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  if (tint) geometry.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function organicTint(base, variance = .22) {
  const color = new T.Color(base);
  return (u, v) => {
    const ripple = .5 * Math.sin(u * 31 + v * 12) + .32 * Math.sin(u * 97 - v * 24)
      + .18 * Math.cos(v * 97 + u * 110);
    return color.clone().multiplyScalar(1 + variance * ripple).toArray();
  };
}

function softTissue(color, settings = {}) {
  return new T.MeshPhysicalMaterial({
    color, roughness: .47, sheen: .65, sheenColor: new T.Color(0xffc2ad),
    clearcoat: .18, clearcoatRoughness: .42, ...settings,
  });
}

export function createActinia(host, onPick, marker) {
  const renderer = new T.WebGLRenderer({antialias: true, alpha: true});
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.domElement.setAttribute('aria-label', 'Modelo 3D interativo de Actinia');
  host.append(renderer.domElement);
  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(38, 1, .003, 40);
  const outer = new T.Group();
  const crossSection = new T.Group();
  const tissueView = new T.Group();
  const microscopic = new T.Group();
  const molecules = new T.Group();
  scene.add(outer, crossSection, tissueView, microscopic, molecules);
  const selectable = new Map();
  const highlight = new Map();
  let selection = '';
  let selectedMesh = null;
  scene.add(new T.HemisphereLight(0xffecdf, 0x4e284b, 1.65));
  const light = new T.DirectionalLight(0xffe2ea, 2.2);
  light.position.set(3, 5, 4);
  scene.add(light);
  const rim = new T.DirectionalLight(0xf5a8b5, 1.25);
  rim.position.set(-4, 1, -3);
  scene.add(rim);

  const column = softTissue(0xffffff, {vertexColors: true, transparent: true, opacity: .81});
  const oralColor = softTissue(0xffffff, {vertexColors: true, side: T.DoubleSide});
  const inner = softTissue(0xffffff, {vertexColors: true, side: T.DoubleSide});
  const pharynx = softTissue(0xffffff, {vertexColors: true, side: T.DoubleSide});
  const septum = softTissue(0xffffff, {vertexColors: true, side: T.DoubleSide});
  const purple = material(0x865180);
  const teal = material(0x68cdb5);

  function mesh(group, geometry, mat, position, name) {
    const object = new T.Mesh(geometry, mat);
    object.position.copy(position);
    object.userData.name = name;
    group.add(object);
    if (name) {
      if (!selectable.has(name)) selectable.set(name, []);
      selectable.get(name).push(object);
    }
    return object;
  }

  const profile = new T.SplineCurve([
    [.06, -.68], [.67, -.68], [.91, -.59], [1.00, -.37], [1.055, -.09],
    [1.12, .25], [1.21, .56], [1.20, .78],
  ].map(([r, y]) => new T.Vector2(r, y)));
  const tau = Math.PI * 2;
  const bodyRadius = (angle, y) => 1 + .021 * Math.sin(angle * 9 + y * 2) + .018 * Math.cos(angle * 3 - y * 2);
  function wallPoint(u, v, start = 0, span = tau) {
    const angle = start + u * span;
    const profilePoint = profile.getPoint(v);
    const radius = profilePoint.x * bodyRadius(angle, profilePoint.y);
    return [radius * Math.cos(angle), profilePoint.y, radius * Math.sin(angle)];
  }
  const wallTint = organicTint(0xa34560, .34);
  const body = mesh(outer, sculptSurface(112, 48, (u, v) => wallPoint(1 - u, v), wallTint), column, vec(0, 0, 0), 'Coluna');
  body.renderOrder = 2;
  column.side = T.FrontSide;

  // The disc starts at the last ring of the column and rolls down into an oral slit.
  const oralTint = organicTint(0xc76e83, .26);
  const oralPoint = (u, v) => {
    const angle = u * tau;
    const edge = 1.20 * bodyRadius(angle, .78);
    const innerRadius = .095 + .053 * Math.cos(angle * 2);
    const radius = T.MathUtils.lerp(edge, innerRadius, v);
    const rimBlend = Math.sin(Math.PI * v);
    const pleat = .036 * Math.cos(angle * 19 + v * 5) * rimBlend
      + .019 * Math.sin(angle * 9 - v * 3) * rimBlend;
    const height = .78 + .32 * Math.sin(v * Math.PI * .75) - .19 * v ** 5 + pleat;
    return [radius * Math.cos(angle), height, radius * Math.sin(angle)];
  };
  const disc = mesh(outer, sculptSurface(128, 48, oralPoint, oralTint), oralColor, vec(0, 0, 0), 'Disco oral');
  disc.renderOrder = 3;
  const base = mesh(outer, new T.SphereGeometry(1, 48, 24), softTissue(0x8d3b5a), vec(0, -.65, 0), 'Disco pedal');
  base.scale.set(.87, .105, .83);
  const mouth = mesh(outer, new T.SphereGeometry(1, 40, 20), material(0x281522, .74), vec(0, .733, 0), 'Boca');
  mouth.scale.set(.17, .085, .068);
  const oralLip = new T.CatmullRomCurve3(Array.from({length: 32}, (_, i) => vec(...oralPoint(i / 32, 1))), true);
  mesh(outer, new T.TubeGeometry(oralLip, 64, .013, 10, true), softTissue(0xb66077), vec(0, 0, 0), 'Boca');

  for (let i = 0; i < 21; i++) {
    const angle = i * Math.PI * 2 / 21 + .07 * Math.sin(i * 3);
    const length = .20 + .22 * (.5 + .5 * Math.sin(i * 2.34));
    const width = .122 + .036 * Math.sin(i * 2.1);
    const mat = softTissue(new T.Color().setHSL(.975 + .012 * Math.sin(i), .52, .39 + .061 * Math.cos(i * 2)));
    const points = [[.59, .96], [.80, 1.055], [1.04, 1.16], [1.06 + length, 1.09 + .11 * Math.sin(i * 1.8)]].map(
      ([r, y]) => vec(r * Math.cos(angle + .045 * r * Math.sin(i)), y + length * .17, r * Math.sin(angle + .045 * r * Math.sin(i))),
    );
    const curve = new T.CatmullRomCurve3(points);
    const geometry = new T.TubeGeometry(curve, 32, width, 20, false);
    const attr = geometry.attributes.position;
    for (let j = 0; j <= 32; j++) {
      const t = j / 32;
      const center = curve.getPointAt(t);
      const taper = Math.sqrt(1 - t ** 4) * (.73 + .32 * Math.sin(Math.PI * t)) + .025;
      for (let k = 0; k <= 20; k++) {
        const ix = j * 21 + k;
        const p = vec(attr.getX(ix), attr.getY(ix), attr.getZ(ix)).lerp(center, 1 - taper);
        attr.setXYZ(ix, p.x, p.y, p.z);
      }
    }
    geometry.computeVertexNormals();
    const tentacle = mesh(outer, geometry, mat, vec(0, 0, 0), 'Tentáculos');
    tentacle.renderOrder = 0;
  }

  // Open sagittal view, with a shaded rim indicating the thickness of the cut wall.
  const cutStart = Math.PI - .22;
  const cutSpan = Math.PI + .36;
  mesh(crossSection, sculptSurface(96, 52, (u, v) => wallPoint(u, v, cutStart, cutSpan),
    organicTint(0x934861, .29)), inner, vec(0, 0, 0), 'Parede da coluna');
  const cutTint = softTissue(0xe8a7a1, {side: T.DoubleSide});
  for (const cut of [0, 1]) {
    const cutEdge = new T.CatmullRomCurve3(Array.from({length: 45}, (_, i) =>
      vec(...wallPoint(cut, i / 44, cutStart, cutSpan))));
    mesh(crossSection, new T.TubeGeometry(cutEdge, 60, .035, 12), cutTint, vec(0, 0, 0), 'Parede da coluna');
  }

  const pharynxSurface = (u, v) => {
    const angle = u * tau;
    const radius = .145 + .13 * Math.sin(v * Math.PI * .72) + .018 * Math.sin(angle * 13 + v * 3);
    return [radius * Math.cos(angle), .91 - v * .69, radius * Math.sin(angle) * (.60 + v * .26)];
  };
  mesh(crossSection, sculptSurface(104, 44, pharynxSurface, organicTint(0xcb7d87, .26)),
    pharynx, vec(0, 0, 0), 'Actinofaringe');

  const filamentMaterial = softTissue(0xffffff, {vertexColors: true, side: T.DoubleSide});
  const foldAngles = [.40, -.37, -.86, -1.35, -1.85, -2.34, -2.83, -3.25];
  for (const [index, angle] of foldAngles.entries()) {
    const foldPoint = (u, v) => {
      const y = -.59 + 1.27 * v;
      const wall = 1.0 + .19 * Math.sin(v * 1.65);
      const freeEdge = .48 + .15 * Math.cos(v * 2.8) + .035 * Math.sin(v * 16 + index);
      const radius = T.MathUtils.lerp(wall, freeEdge, u);
      const bend = .12 * Math.sin(v * 5 + index * .8) * u + .018 * Math.sin(v * 57 + u * 9) * u;
      return [radius * Math.cos(angle + bend), y, radius * Math.sin(angle + bend)];
    };
    const foldColor = organicTint(index % 2 ? 0xa65470 : 0xc07b83, .37);
    mesh(crossSection, sculptSurface(30, 46, foldPoint, foldColor), septum, vec(0, 0, 0), 'Mesentério');
    const edge = new T.CatmullRomCurve3(Array.from({length: 25}, (_, i) => vec(...foldPoint(1, i / 24))));
    const margin = new T.TubeGeometry(edge, 52, index === 0 ? .052 : .034, 12);
    const positions = margin.attributes.position;
    for (let i = 0; i <= 52; i++) {
      const t = i / 52;
      const center = edge.getPointAt(t);
      const taper = .33 + .67 * Math.sin(Math.PI * t) ** .31;
      for (let j = 0; j <= 12; j++) {
        const vertex = i * 13 + j;
        const point = vec(positions.getX(vertex), positions.getY(vertex), positions.getZ(vertex));
        point.lerp(center, 1 - taper);
        positions.setXYZ(vertex, point.x, point.y, point.z);
      }
    }
    margin.computeVertexNormals();
    const marginColors = [];
    const tint = organicTint(index === 0 ? 0xe5a080 : 0xc67f78, .26);
    for (let i = 0; i <= 52; i++) {
      for (let j = 0; j <= 12; j++) marginColors.push(...tint(i / 52, j / 12));
    }
    margin.setAttribute('color', new T.Float32BufferAttribute(marginColors, 3));
    mesh(crossSection, margin, filamentMaterial, vec(0, 0, 0), 'Filamento mesentérico');
  }

  // Shared profile keeps the cell attached to the free edge of the fold.
  const edgeX = y => .080 + .026 * Math.cos(y * 19) + .012 * Math.sin(y * 38);
  const foldZ = (x, y) => .014 * Math.cos(y * 20) + .024 * Math.sin(x * 13 + y * 9);
  const foldMaterial = material(0x713855, .48);
  foldMaterial.side = T.DoubleSide;
  const edgeMaterial = softTissue(0xffffff, {vertexColors: true, roughness: .56, side: T.DoubleSide});
  const epitheliumMaterials = [0xa77186, 0x995b7d, 0xb78191, 0x935976].map(color => softTissue(color, {roughness: .59}));
  const epithelialNucleus = material(0x59395d);
  const surfacePoints = [];
  const surfaceIndices = [];
  for (let row = 0; row <= 32; row++) {
    const y = -.158 + .316 * row / 32;
    for (let col = 0; col <= 24; col++) {
      const x = T.MathUtils.lerp(-.30 + .032 * Math.cos(y * 17), edgeX(y), col / 24);
      surfacePoints.push(x, y, foldZ(x, y));
      if (row && col) {
        const i = row * 25 + col;
        surfaceIndices.push(i - 26, i - 25, i, i - 26, i, i - 1);
      }
    }
  }
  const tissueSurface = new T.BufferGeometry();
  tissueSurface.setAttribute('position', new T.Float32BufferAttribute(surfacePoints, 3));
  tissueSurface.setIndex(surfaceIndices);
  tissueSurface.computeVertexNormals();
  mesh(tissueView, tissueSurface, foldMaterial, tissue, 'Mesentério');

  const ribbon = (u, v) => {
    const y = -.158 + .316 * v;
    const angle = u * tau;
    const center = edgeX(y);
    const r = .021 + .004 * Math.sin(v * 26) + .004 * Math.sin(angle * 3 + v * 11);
    const narrowing = .52 + .48 * Math.sin(Math.PI * v) ** .36;
    return [center + r * Math.cos(angle) * narrowing,
      y + .010 * Math.cos(angle * 3 + v * 9) * Math.sin(Math.PI * v),
      foldZ(center, y) + r * Math.sin(angle) * 1.36 * narrowing];
  };
  mesh(tissueView, sculptSurface(44, 64, ribbon, organicTint(0xc98084, .35)),
    edgeMaterial, tissue, 'Filamento mesentérico');

  const tileGeometry = new T.SphereGeometry(1, 20, 14);
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 12; col++) {
      const x = -.274 + col * .029 + .006 * Math.sin(row * 5 + col * 2);
      const y = -.138 + row * .030 + .005 * Math.sin(col * 3 + row);
      const outerEdge = -.30 + .032 * Math.cos(y * 17);
      if (x < outerEdge + .010 || x > edgeX(y) - .017) continue;
      const z = foldZ(x, y);
      const tile = mesh(tissueView, tileGeometry, epitheliumMaterials[(row * 7 + col * 5) % epitheliumMaterials.length],
        tissue.clone().add(vec(x, y, z + .0005)), 'Epitélio');
      tile.scale.set(.017 + .003 * Math.cos(col), .0175 + .0025 * Math.sin(row + col), .008);
      tile.rotation.z = .38 * Math.sin(row + col);
      const center = mesh(tissueView, tileGeometry, epithelialNucleus,
        tissue.clone().add(vec(x + .002, y - .002, z + .0073)), 'Epitélio');
      center.scale.set(.004, .0054, .002);
    }
  }

  const glandProfile = new T.SplineCurve([
    [0, -.044], [.012, -.043], [.022, -.035], [.028, -.018],
    [.029, .007], [.026, .027], [.018, .042], [.012, .050], [0, .052],
  ].map(([r, y]) => new T.Vector2(r, y)));
  const glandShape = sculptSurface(72, 55, (u, v) => {
    const angle = -u * tau;
    const {x: r, y} = glandProfile.getPoint(v);
    const variation = 1 + .06 * Math.sin(angle * 5 + v * 9) + .04 * Math.cos(angle * 3 - v * 5);
    return [r * Math.cos(angle) * variation + .004 * Math.sin(v * 4 + .2), y, r * Math.sin(angle) * variation * .83];
  }, organicTint(0x5b9e9a, .30));
  const glandPreview = mesh(tissueView, glandShape, softTissue(0x62a69d), cell, 'Célula glandular');
  glandPreview.scale.setScalar(.71);

  const glandMaterial = new T.MeshPhysicalMaterial({
    color: 0xffffff, vertexColors: true, roughness: .38, transparent: true, opacity: .43,
    depthWrite: false, clearcoat: .46, sheen: .8, sheenColor: new T.Color(0x9be0d2), side: T.DoubleSide,
  });
  const gland = mesh(microscopic, glandShape, glandMaterial, cell, 'Membrana plasmática');
  gland.renderOrder = 2;

  const nucleus = mesh(microscopic, new T.SphereGeometry(.015, 36, 24), purple,
    cell.clone().add(vec(0, -.022, .006)), 'Núcleo');
  nucleus.scale.set(1.04, .87, .80);
  nucleus.rotation.z = -.2;
  const nucleolus = mesh(microscopic, new T.SphereGeometry(.0042, 28, 18),
    softTissue(0x563a67), nucleus.position.clone().add(vec(.004, .002, .010)), 'Nucléolo');
  nucleolus.scale.set(1.0, .88, .64);

  const cytoplasmTint = softTissue(0x509083, {transparent: true, opacity: .28, depthWrite: false});
  const speckGeometry = new T.SphereGeometry(1, 9, 6);
  for (let i = 0; i < 47; i++) {
    const angle = i * 2.39996;
    const y = -.030 + .067 * (i % 23) / 22;
    const spread = (.012 + .009 * Math.sin(i * 2.9) ** 2) * Math.cos(y * 15);
    const detail = mesh(microscopic, speckGeometry, cytoplasmTint,
      cell.clone().add(vec(Math.cos(angle) * spread, y, Math.sin(angle) * spread)), null);
    detail.scale.setScalar(.0007 + .0007 * Math.sin(i * 2.8) ** 2);
  }
  const granuleGeometry = new T.SphereGeometry(1, 24, 16);
  const granuleMaterials = [material(0xc38443, .37), material(0xe1a360, .40), material(0xf1c288, .43)];
  for (let i = 0; i < 17; i++) {
    const angle = i * 2.4;
    const radius = .010 + .007 * (.5 + .5 * Math.cos(i * 1.8));
    const size = .0036 + .002 * (.5 + .5 * Math.cos(i * 2.3));
    const granule = mesh(microscopic, granuleGeometry, granuleMaterials[i % 3],
      cell.clone().add(vec(Math.cos(angle) * radius, .001 + i * .0024, Math.sin(angle) * radius)), 'Grânulos');
    granule.scale.set(size, size * .88, size * .94);
  }

  // Organelles use comparative animal-cell anatomy. Positions are illustrative.
  const rerMaterial = softTissue(0x968bd1, {side: T.DoubleSide, roughness: .56});
  const ribosomeMaterial = material(0xd1b7ed, .52);
  const ribosomeGeometry = new T.SphereGeometry(.00078, 12, 8);
  for (let layer = 0; layer < 4; layer++) {
    const y = -.013 + layer * .0032;
    const rerPoint = (u, v) => {
      const x = -.022 + .0145 * u;
      return [x, y + .0015 * Math.sin(u * Math.PI * 2 + layer * .52) + .002 * (v - .5),
        .009 + .008 * v + .0013 * Math.cos(u * 6 + layer)];
    };
    mesh(microscopic, sculptSurface(24, 7, rerPoint), rerMaterial, cell, 'Retículo endoplasmático rugoso');
    for (let i = 1; i < 9; i++) {
      const where = vec(...rerPoint(i / 9, .82)).add(vec(0, .0008, .001));
      mesh(microscopic, ribosomeGeometry, ribosomeMaterial, cell.clone().add(where), 'Ribossomos');
    }
  }

  const golgiMaterial = softTissue(0xb8749e, {side: T.DoubleSide, roughness: .42});
  for (let layer = 0; layer < 4; layer++) {
    const cisterna = (u, v) => {
      const across = u * 2 - 1;
      return [.011 + across * (.0065 - layer * .0005),
        -.004 + layer * .0027 + across ** 2 * .003 + (v - .5) * .002,
        .017 + (v - .5) * .007 * Math.sqrt(Math.max(0, 1 - across ** 2))];
    };
    mesh(microscopic, sculptSurface(24, 8, cisterna), golgiMaterial, cell, 'Complexo de Golgi');
  }

  const mitoOuter = softTissue(0x419f83, {transparent: true, opacity: .46, depthWrite: false});
  const cristaMaterial = material(0x99d5a8, .52);
  for (const [x, y, z, tilt] of [[.020, -.015, .014, -.6], [-.017, .017, .012, .55]]) {
    const center = cell.clone().add(vec(x, y, z));
    const axis = vec(0, 0, 1);
    const mitochondrion = mesh(microscopic, new T.SphereGeometry(1, 28, 18), mitoOuter, center, 'Mitocôndrias');
    mitochondrion.scale.set(.0040, .008, .003);
    mitochondrion.rotation.z = tilt;
    for (let fold = 0; fold < 5; fold++) {
      const oy = (fold - 2) * .002;
      const curve = new T.CatmullRomCurve3([
        vec(-.0026, oy, .001), vec(0, oy + .0012, .0017), vec(.0026, oy, .001),
      ].map(p => p.applyAxisAngle(axis, tilt)));
      mesh(microscopic, new T.TubeGeometry(curve, 10, .00046, 7), cristaMaterial, center, 'Mitocôndrias');
    }
  }

  const enzymeGeometry = new T.SphereGeometry(.013, 48, 32);
  const enzymePoints = enzymeGeometry.attributes.position;
  const vertex = vec(0, 0, 0);
  const pocket = vec(.42, .9, .27).normalize();
  for (let i = 0; i < enzymePoints.count; i++) {
    vertex.fromBufferAttribute(enzymePoints, i).normalize();
    const relief = 1 + .11 * Math.sin(vertex.x * 13 + vertex.y * 7) * Math.cos(vertex.z * 13);
    const depression = Math.pow(Math.max(0, vertex.dot(pocket)), 16) * .48;
    vertex.multiplyScalar(.013 * (relief - depression));
    enzymePoints.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }
  enzymeGeometry.computeVertexNormals();
  const enzyme = mesh(molecules, enzymeGeometry, teal, cell, 'Protease');
  const residueMaterials = [material(0xe2af6b, .33), material(0xd98266, .33)];
  const chain = Array.from({length: 8}, (_, i) => mesh(molecules,
    new T.SphereGeometry(.0027 + .00055 * (i % 3), 24, 16), residueMaterials[i < 4 ? 0 : 1], cell, 'Cadeia proteica'));
  const bondMaterial = material(0xb4826b, .44);
  const bondGeometry = new T.CylinderGeometry(.00065, .00065, 1, 10);
  const bonds = chain.slice(1).map(() => mesh(molecules, bondGeometry, bondMaterial, cell, 'Cadeia proteica'));
  const bondDirection = vec(0, 0, 0);

  let target = 0;
  let progress = 0;
  let yaw = 0;
  let pitch = 0;
  let frame;
  let lastFrameTime = performance.now();
  let pointer;
  const ray = new T.Raycaster();
  const aim = vec(0, 0, 0);
  const offset = vec(0, 0, 0);
  const upAxis = vec(0, 1, 0);
  const oralPassage = new T.CatmullRomCurve3([poses[1][0], vec(.06, 1.38, .11), vec(.06, .75, .16), poses[2][0]]);
  const resize = () => {
    const {clientWidth: width, clientHeight: height} = host;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  resize();

  function pick(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    ray.setFromCamera(new T.Vector2(
      (event.clientX - rect.left) / rect.width * 2 - 1,
      1 - (event.clientY - rect.top) / rect.height * 2,
    ), camera);
    const visible = [outer, crossSection, tissueView, microscopic, molecules]
      .filter(group => group.visible).flatMap(group => group.children.filter(object => object.visible && object.userData.name));
    const hits = ray.intersectObjects(visible, false);
    const first = hits[0]?.object;
    const insideGland = first === gland && hits.find(({object}) => object.parent === microscopic && object !== gland);
    const object = insideGland?.object || first;
    const pickedName = object?.userData.name;
    const next = pickedName && pickedName !== selection ? pickedName : '';
    select(next, next ? object : undefined);
    onPick(next);
  }
  const down = event => {
    if (event.button !== 0) return;
    pointer = {x: event.clientX, y: event.clientY, travel: 0};
    host.setPointerCapture(event.pointerId);
  };
  const move = event => {
    if (!pointer) return;
    const dx = event.clientX - pointer.x;
    const dy = event.clientY - pointer.y;
    yaw -= dx * .008;
    pitch = T.MathUtils.clamp(pitch + dy * .005, -.38, .38);
    pointer = {x: event.clientX, y: event.clientY, travel: pointer.travel + Math.hypot(dx, dy)};
  };
  const up = event => {
    if (pointer && pointer.travel < 5) pick(event);
    pointer = null;
  };
  const cancel = () => { pointer = null; };
  host.addEventListener('pointerdown', down);
  host.addEventListener('pointermove', move);
  host.addEventListener('pointerup', up);
  host.addEventListener('pointercancel', cancel);

  function select(name, picked) {
    if (name === selection && !picked) return;
    for (const [object, {base, accent}] of highlight) {
      object.material = base;
      accent.dispose();
    }
    highlight.clear();
    selection = name;
    selectedMesh = picked ?? null;
    for (const object of selectable.get(name) ?? []) {
      const base = object.material;
      const accent = base.clone();
      accent.emissive.setHex(0x49f0ff);
      accent.emissiveIntensity = .39;
      accent.opacity = Math.max(.44, accent.opacity);
      object.material = accent;
      highlight.set(object, {base, accent});
    }
  }

  const projected = vec(0, 0, 0);
  function positionMarker() {
    if (!marker) return;
    const object = selectedMesh?.parent.visible
      ? selectedMesh
      : selectable.get(selection)?.find(candidate => candidate.parent.visible);
    if (object) {
      if (!object.geometry.boundingBox) object.geometry.computeBoundingBox();
      object.geometry.boundingBox.getCenter(projected);
      object.localToWorld(projected).project(camera);
    }
    marker.hidden = !object || Math.abs(projected.x) > .95 || Math.abs(projected.y) > .92 || Math.abs(projected.z) > 1;
    if (!marker.hidden) {
      marker.style.left = `${(projected.x + 1) * 50}%`;
      marker.style.top = `${(1 - projected.y) * 50}%`;
    }
  }

  function draw(time) {
    frame = requestAnimationFrame(draw);
    const seconds = Math.min(Math.max(0, (time - lastFrameTime) / 1000), .15);
    lastFrameTime = time;
    if (!host.clientWidth || !host.clientHeight) return;
    progress = T.MathUtils.damp(progress, target, 9, seconds);
    const lower = Math.floor(progress);
    const higher = Math.min(lower + 1, poses.length - 1);
    const blend = progress - lower;
    aim.lerpVectors(poses[lower][1], poses[higher][1], blend);
    if (lower === 1) oralPassage.getPoint(blend, offset);
    else offset.lerpVectors(poses[lower][0], poses[higher][0], blend);
    offset.sub(aim).applyAxisAngle(upAxis, yaw);
    offset.y += pitch * offset.length();
    camera.position.copy(aim).add(offset);
    camera.lookAt(aim);
    outer.visible = progress < 1.48;
    crossSection.visible = progress >= 1.48 && progress < 2.65;
    tissueView.visible = progress >= 2.65 && progress < 3.63;
    microscopic.visible = progress >= 3.63 && progress < 4.57;
    molecules.visible = progress >= 4.57;
    const phase = (time / 5900) % 1;
    const approach = Math.min(phase / .53, 1);
    const retreat = Math.max(0, (phase - .53) / .47);
    enzyme.position.set(cell.x - .015 + .016 * approach, cell.y + .019 + .011 * approach - .006 * retreat, cell.z + .032);
    enzyme.rotation.y = -.25 + .35 * approach;
    chain.forEach((part, i) => {
      const gap = phase > .53 && i > 3 ? (phase - .53) * .025 : 0;
      part.position.set(cell.x - .023 + .0061 * i + gap, cell.y + .050 + .0035 * Math.sin(i * .9), cell.z + .037 + .003 * Math.cos(i));
    });
    bonds.forEach((bond, i) => {
      const from = chain[i].position;
      const to = chain[i + 1].position;
      bondDirection.subVectors(to, from);
      bond.position.copy(from).lerp(to, .5);
      bond.scale.y = bondDirection.length();
      bond.quaternion.setFromUnitVectors(upAxis, bondDirection.normalize());
      bond.visible = i !== 3 || phase <= .53;
    });
    renderer.render(scene, camera);
    positionMarker();
  }
  draw(performance.now());

  return {
    go(index) { target = index; yaw = 0; pitch = 0; select(''); },
    select,
    dispose() {
      cancelAnimationFrame(frame);
      select('');
      observer.disconnect();
      host.removeEventListener('pointerdown', down);
      host.removeEventListener('pointermove', move);
      host.removeEventListener('pointerup', up);
      host.removeEventListener('pointercancel', cancel);
      const geometries = new Set();
      const materials = new Set();
      scene.traverse(object => {
        if (object.geometry) geometries.add(object.geometry);
        if (object.material) materials.add(object.material);
      });
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(mat => mat.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
