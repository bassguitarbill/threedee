class GamepadController {
  constructor() {
    window.addEventListener('gamepadconnected', e => {
      const ev = e as GamepadEvent;
      
      console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
      ev.gamepad.index, ev.gamepad.id,
      ev.gamepad.buttons.length, ev.gamepad.axes.length);
    });
  }
}

export default GamepadController;