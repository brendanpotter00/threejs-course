import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.y = 3;
scene.add(mesh)

//rotation
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI;

mesh.scale.x = 3;

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

//axis
const AxisHelper = new THREE.AxisHelper();
scene.add(AxisHelper);


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 8
camera.position.x = 1;

camera.lookAt(mesh.position);

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)