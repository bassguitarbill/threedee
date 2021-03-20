import Component from "./Component.js";
import Game from "./game/Game.js";

class Entity {
  readonly id: number;
  readonly name: string;
  readonly components: Component[] = [];

  static nextId = 0;
  constructor(readonly game: Game) {
    this.id = Entity.nextId++;
    this.name = `${this.constructor.name}_${this.id}`;
    game.entities.push(this);
    console.log(`${this.name} created`);
  }

  tick(dt: number) {
    this.components.forEach(c => c.tick(dt));
  }
}

export default Entity;