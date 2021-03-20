class KeyboardController {
  keysPressed: {[key in string]: boolean} = {};
  constructor() {
    window.addEventListener("keydown", this.keyDown.bind(this));
    window.addEventListener("keyup", this.keyUp.bind(this));
  }

  keyDown(event: KeyboardEvent) {
    this.keysPressed[event.code] = true;
  }

  keyUp(event: KeyboardEvent): void {
    this.keysPressed[event.code] = false;
  }

  isKeyPressed(code: string) {
    if (code in this.keysPressed) {
      return this.keysPressed[code];
    }
    return false;
  }
}

export default KeyboardController;