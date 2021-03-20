import Game from "../game/Game.js";
import Entity from "../Entity.js";
import CubeGeometry from "../components/CubeGeometry.js";

class SpinnyCube extends Entity {
  constructor(game: Game) {
    super(game);
    this.components.push(new CubeGeometry(this));
  }
}

export default SpinnyCube;