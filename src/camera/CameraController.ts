import { Camera } from 'lib/three.js/three.module';
import KeyboardController from '../input/KeyboardController.js';

class CameraController {
  camera: THREE.Camera;
  keyboardController: KeyboardController;
  constructor(camera: THREE.Camera) {
    this.camera = camera;
    this.keyboardController = new KeyboardController();
    this.setupControls();
  }

  tick() {
    const { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } = this.keyboardController.keysPressed;
    this.camera.translateY(ArrowUp ? .05 : ArrowDown ? -.05 : 0);
    this.camera.translateX(ArrowRight ? .05 : ArrowLeft ? -.05 : 0);
  }

  setupControls(): void {
    //window.addEventListener("key")
  }
}

export default CameraController;