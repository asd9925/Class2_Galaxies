import './style.css';
import * as THREE from 'three';
//call helper function
import { addDefaultMeshes } from './addDefaultMeshes';
import { addSphereMesh } from './addSphereMesh';
import { addSphere2Mesh } from './addSphere2Mesh';
import { addSphere3Mesh } from './addSphere3Mesh';

//referencing scene in THREE library (anything with THREE prefix is refering something in the THREE library)
//THREE.Scene

//calling three library with our own variable scene
const scene = new THREE.Scene();

//FOV, ASPECT RATIO, NEAR, FAR
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

//antialias makes rendering smoother, less pixels, just turn on by default
const renderer = new THREE.WebGLRenderer({ antialias: true});

//set up over, now add things to scene
//meshes means something 3d btw
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const material2 = new THREE.MeshBasicMaterial({color: 0xff222});
// const mesh = new THREE.Mesh(geometry, material);

// //call function
// const mesh = addDefaultMeshes();
// //now add mesh to scene (pass thing you're adding in argument)
// //won't add things to scene manually
// scene.add(mesh);

const mesh = addSphereMesh();



//global function, curly brackets means object (currently empty)
const meshes = {}
let tick = 0;

init();
//all setup stuff goes here
function init(){
  //render full screen (choose size, can change)
  renderer.setSize(window.innerWidth, window.innerHeight)
  //created screen caputre, drew image, so put it on the screen
  document.body.appendChild(renderer.domElement);

  //by defalt everything is at 0,0,0 so move your camera back by 5
  camera.position.z = 5;

  //here we populat our meshes object/container
  //mesh.default = mesh i got back
  meshes.default = addDefaultMeshes();
  //move the cube
  meshes.default.position.x = 2;

  //add a second cube
  meshes.default2 = addDefaultMeshes();
  meshes.default2.position.x = -2;

  //add a third cube
  meshes.default3 = addDefaultMeshes();
  meshes.default3.position.y = 2;

  meshes.sphere1 = addSphereMesh();
  meshes.sphere1.position.x = -2;
  meshes.sphere1.position.y = -2;
  // meshes.sphere1.scale = (2,2,2)
  scene.add(meshes.sphere1);

  meshes.sphere2 = addSphereMesh();
  meshes.sphere2.position.x = 2;
  meshes.sphere2.position.y = 2;
  scene.add(meshes.sphere2);

  meshes.sphere3 = addSphereMesh();
  meshes.sphere3.position.x = -2;
  meshes.sphere3.position.y = 2;
  scene.add(meshes.sphere3);

  //add meshes to our screen
  // scene.add(meshes.default);
  // scene.add(meshes.default2);
  // scene.add(meshes.default3);
  console.log(meshes)

  animate();
}

function animate(){
  //create loop
  requestAnimationFrame(animate);

  //rotate cube on x-axis
  // mesh.rotation.x += 0.1

  //tell renderer to render whats in arguments (current scene and camera)
  renderer.render(scene, camera);

  tick += 0.01

  meshes.sphere1.position.x = Math.sin(tick * 2) *3;
  //move in a circle with sin and cos together
  meshes.sphere1.position.y = Math.cos(tick * 2) *3;

  meshes.sphere2.position.x = -Math.sin(tick * 2) *1.5;
  //move in a circle with sin and cos together
  meshes.sphere2.position.y = Math.cos(tick*2) * 1.5;

  meshes.sphere3.position.x = Math.sin(tick * 2) *0.8;
  //move in a circle with sin and cos together
  meshes.sphere3.position.y = Math.cos(tick*2) *0.8;

  // meshes.default.rotation.x += 0.05;
  // meshes.default2.rotation.y += 0.01;
  // meshes.default3.rotation.z += 0.07;
}