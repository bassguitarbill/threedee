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
    this.camera.rotateX(ArrowUp ? .05 : ArrowDown ? -.05 : 0);
    this.camera.rotateY(ArrowLeft ? .05 : ArrowRight ? -.05 : 0);
  }
}

export default CameraController;