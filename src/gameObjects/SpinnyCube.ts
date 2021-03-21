import * as THREE from '../../lib/three.js/three.module.js';
import Game from "../Game.js";
import GameObject from '../GameObject.js';

class SpinnyCube extends GameObject {
  readonly geometry: THREE.Mesh;
  constructor(readonly game: Game) {
    super(game);
    this.geometry = constructCube();
    this.game.gameObjects.push(this);
    this.game.scene.add(this.geometry);
  }

  tick(dt: number) {
    const kc = this.game.input.keyboard!;
    if (kc.isKeyPressed('KeyA')) {
      this.geometry.rotateY(.000005 * dt);
    } else if (kc.isKeyPressed('KeyD')) {
      this.geometry.rotateY(-.000005 * dt);
    }
    if (kc.isKeyPressed('KeyW')) {
      this.geometry.rotateZ(.000005 * dt);
    } else if (kc.isKeyPressed('KeyS')) {
      this.geometry.rotateZ(-.000005 * dt);
    }
    if (kc.isKeyPressed('KeyQ')) {
      this.geometry.rotateX(.000005 * dt);
    } else if (kc.isKeyPressed('KeyE')) {
      this.geometry.rotateX(-.000005 * dt);
    }
  }
}

export default SpinnyCube;

function constructCube(): THREE.Mesh {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshPhongMaterial( { color: 0x552299 } );
  const cube = new THREE.Mesh( geometry, material );
  return cube;
}