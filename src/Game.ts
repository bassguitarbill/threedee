import * as THREE from '../lib/three.js/three.module.js';
import GameObject from './GameObject.js';
import CameraController from "./camera/CameraController.js";
import SpinnyCube from './gameObjects/SpinnyCube.js';
import KeyboardController from './input/KeyboardController.js';
import SkyboxTexture from './skybox/SkyboxTexture.js';
import PositionalController from './input/PositionalController.js';
import OrbitalController from './input/OrbitalController.js';

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
    const sc =new SpinnyCube(this);
    sc.geometry.translateX(3)

    const unitSphereGeo = new THREE.SphereGeometry(1);
    const unitSphereMaterial = new THREE.MeshPhongMaterial({ color: 0xf00});
    const unitSphere = new THREE.Mesh(unitSphereGeo, unitSphereMaterial);
    //this.scene.add(unitSphere);

    const oc = new OrbitalController(this, this.input.keyboard!, sc.geometry, unitSphere.position);
    this.gameObjects.push(oc);

    const light = new THREE.PointLight( 0xffffff , 10, 100 );
    light.position.set( 15, 15, 15 ); 
    this.scene.add( light );

    const ambientLight = new THREE.AmbientLight(0xffaaaa, 3);
    this.scene.add(ambientLight);

    this.scene.background = new SkyboxTexture('/static/skybox/miramar/').texture;

    const planeGeometry = new THREE.PlaneGeometry(100, 100);
    const planeMaterial = new THREE.MeshPhongMaterial({ color: 0x909090 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.z = -60;
    plane.position.y = -20;
    //plane.rotateX(-Math.PI);
    //plane.translateZ(60)
    this.scene.add(plane);
    this.gameObjects.push(new PositionalController(this, this.input.keyboard!, plane))
    this.gameObjects.push(new PositionalController(this, this.input.keyboard!, sc.geometry));
  }

  initializeCamera(): THREE.Camera {
    
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;
    //new CameraController(this, camera);
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