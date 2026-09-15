import test from 'node:test';
import assert from 'node:assert/strict';
import {makeNetworkGraph,TUBE_SCALE,tubePorts} from '../src/network.js';

const graph=makeNetworkGraph();
test('network remains connected and contains closed paths after contour cropping',()=>{
  const adj=graph.nodes.map(()=>[]);
  for(const e of graph.edges){adj[e.a].push(e.b);adj[e.b].push(e.a);}
  const seen=new Set([0]),queue=[0];
  for(let i=0;i<queue.length;i++)for(const n of adj[queue[i]])if(!seen.has(n)){seen.add(n);queue.push(n);}
  assert.equal(seen.size,graph.nodes.length);
  assert.ok(graph.edges.length-graph.nodes.length+1>100,'expected a reticulated graph, not a tree');
});
test('geometry is finite and stays inside the dish',()=>{
  for(const n of graph.nodes){assert.ok(Number.isFinite(n.x)&&Number.isFinite(n.z));assert.ok(Math.hypot(n.x,n.z)<17.5);}
  for(const e of graph.edges){assert.ok(e.length>0);assert.ok(e.radius>0&&e.radius<=.2);}
});
test('both ends of the explorable tube connect to the surrounding network',()=>{
  const tube=graph.edges.filter(e=>e.explorable);
  assert.equal(tube.length,1);
  for(const id of graph.ports){assert.ok(graph.edges.filter(e=>(e.a===id||e.b===id)&&!e.explorable).length>=3);}
  assert.deepEqual(graph.ports.map(id=>graph.nodes[id]),tubePorts);
  assert.equal(tube[0].radius,.72*TUBE_SCALE);
});
test('seed produces a reproducible morphology for comparison',()=>{
  assert.deepEqual(makeNetworkGraph(),graph);
});
