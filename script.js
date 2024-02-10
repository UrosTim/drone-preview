import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let object;
let orbitControls;

const loader = new GLTFLoader();

loader.load('drone.gltf', function (gltf) {
    object = gltf.scene;
    scene.add(object);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container3D").appendChild(renderer.domElement);

camera.position.z = 5;
camera.position.x = 10;
camera.position.y = 5;

const topLight = new THREE.DirectionalLight(0xffffff, 3);
topLight.position.set(500, 500, 500)
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x404040, 5);
scene.add(ambientLight);

orbitControls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();