import Game from '../Game.js';
import GameObject from '../GameObject.js';
import KeyboardController from '../input/KeyboardController.js';

class CameraController extends GameObject {
  camera: THREE.Camera;
  keyboardController: KeyboardController;
  constructor(game: Game, camera: THREE.Camera) {
    super(game);
    this.camera = camera;
    this.keyboardController = new KeyboardController();
  }

  tick() {
    const { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } = this.keyboardController.keysPressed;
    // this.camera.translateY(ArrowUp ? .05 : ArrowDown ? -.05 : 0);
    // this.camera.translateX(ArrowRight ? .05 : ArrowLeft ? -.05 : 0);
  }
}

export default CameraController;