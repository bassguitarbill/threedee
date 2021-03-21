import GameObject from "../GameObject.js";
import Game from "../Game.js";
import KeyboardController from "./KeyboardController.js";
import { cartesianFromSpherical } from "../math/Sphere.js";

class OrbitalController extends GameObject {
  
  private radius;
  private altitude = 0;
  private azimuth = 0;

  constructor(readonly game: Game, readonly controller: KeyboardController, readonly target: THREE.Mesh, readonly center: THREE.Vector3) {
    super(game);
    this.radius = Math.abs(center.distanceTo(target.position))
    console.log(cartesianFromSpherical(this.radius, this.altitude, this.azimuth));
  }
  tick(dt: number) {
    let changed = false;
    const kc = this.controller;
    if (kc.isKeyPressed('KeyA')) {
      this.azimuth -= .000001;
      changed = true;
    } else if (kc.isKeyPressed('KeyD')) {
      this.azimuth += .000001;
      changed = true;
    }

    if (kc.isKeyPressed('KeyW')) {
      this.altitude -= 0.000001;
      changed = true;
    } else if (kc.isKeyPressed('KeyS')) {
      this.altitude += 0.000001;
      changed = true;
    }

    if (changed) this.recalculate();

   
  }

  recalculate() {
    this.radius = Math.abs(this.center.distanceTo(this.target.position))
    const cartesianCoordinates = cartesianFromSpherical(this.radius, this.altitude, this.azimuth);
    //this.target.position.set(cartesianCoordinates.x, cartesianCoordinates.y, cartesianCoordinates.z);
    console.log(this.target.position)
    console.log(cartesianCoordinates)
    console.log(this.center)
    console.log(this.target.position.x - cartesianCoordinates.x, this.target.position.y - cartesianCoordinates.y, this.target.position.z - cartesianCoordinates.z)
    this.target.translateX(this.target.position.x - cartesianCoordinates.x);
    this.target.translateY(this.target.position.y - cartesianCoordinates.y);
    this.target.translateZ(this.target.position.z - cartesianCoordinates.z);
    console.log(cartesianCoordinates)
  }
}

export default OrbitalController;