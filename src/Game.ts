import * as THREE from '../lib/three.js/three.module.js';
import GameObject from './GameObject.js';
import CameraController from "./camera/CameraController.js";
import SpinnyCube from './gameObjects/SpinnyCube.js';
import KeyboardController from './input/KeyboardController.js';

class Game {
  scene: THREE.Scene;
  camera: THREE.Camera;
  gameObjects: GameObject[];
  renderer: THREE.WebGLRenderer;

  input: {keyboard?: KeyboardController} = {};

  cube!: THREE.Mesh;

  constructor() {
    this.gameObjects = [];
    this.scene = new THREE.Scene();
    this.input.keyboard = new KeyboardController();
    this.camera = this.initializeCamera();
    this.initializeStuffInScene();

    this.renderer =  new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );


    this.startGameLoop = this.startGameLoop.bind(this);
    this.startGameLoop();
  }

  initializeStuffInScene() {
    new SpinnyCube(this);

    const light = new THREE.PointLight( 0xffffff , 10, 100 );
    light.position.set( 15, 15, 15 ); 
    this.scene.add( light );
  }

  initializeCamera(): THREE.Camera {
    
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;

    new CameraController(this, camera);
    return camera;

  }

  startGameLoop(dt: number = 0) {
    this.renderer.render( this.scene, this.camera );
    this.gameObjects.forEach(e => e.tick(dt));
    /*this.cube.rotateX(.01);
    this.cube.rotateY(.01);*/
    requestAnimationFrame( this.startGameLoop );
  }
}

export default Game;