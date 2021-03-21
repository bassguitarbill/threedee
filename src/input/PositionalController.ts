import Game from "../Game.js";
import GameObject from "../GameObject.js";
import KeyboardController from "./KeyboardController.js";

class PositionalController extends GameObject {
  constructor(readonly game: Game, readonly controller: KeyboardController, readonly target: THREE.Mesh | THREE.Camera) {
    super(game);
  }
  tick(dt: number) {
    const kc = this.controller;
    if (kc.isKeyPressed('KeyA')) {
      this.target.rotateY(.0000005 * dt);
    } else if (kc.isKeyPressed('KeyD')) {
      this.target.rotateY(-.0000005 * dt);
    }

    if (kc.isKeyPressed('KeyW')) {
      this.target.rotateZ(.000001 * dt);
    } else if (kc.isKeyPressed('KeyS')) {
      this.target.rotateZ(-.000001 * dt);
    }
    
    if (kc.isKeyPressed('KeyQ')) {
      this.target.rotateX(.000001 * dt);
      console.log(this.target.rotation.x)
    } else if (kc.isKeyPressed('KeyE')) {
      this.target.rotateX(-.000001 * dt);
      console.log(this.target.rotation.x)
    }
    
    if (kc.isKeyPressed('ArrowUp')) {
      this.target.translateZ(.00001 * dt);
      console.log(this.target.position.z);
    } else if (kc.isKeyPressed('ArrowDown')) {
      this.target.translateZ(-.00001 * dt);
      console.log(this.target.position.z);
    }
    
    if (kc.isKeyPressed('ArrowLeft')) {
      this.target.translateY(.000005 * dt);
    } else if (kc.isKeyPressed('ArrowRight')) {
      this.target.translateY(-.000005 * dt);
    }
  }
}

export default PositionalController;