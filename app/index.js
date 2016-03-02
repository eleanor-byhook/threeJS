'use strict';
var THREE = require('./three/three.min.js');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement);

var geometry = new THREE.TorusKnotGeometry(10, 4, 150, 26);
var material = new THREE.MeshPhongMaterial({ color: 0xcce5cc, specular: 0x008800, shininess: 2, shading: THREE.FlatShading });
var cube = new THREE.Mesh( geometry, material );
cube.scale.set = 0.5
scene.add(cube);

var pl = new THREE.PointLight(0xaa00aa);

pl.position.x = 10;
pl.position.y = 50;
pl.position.z = 130;

scene.add(pl);

var ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient);


camera.position.z = 55;

function render() {
  requestAnimationFrame( render );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render( scene, camera );
}
render();

