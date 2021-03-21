import Game from "./Game.js";

class GameObject {
  readonly id: number;
  readonly name: string;

  static nextId = 0;
  constructor(readonly game: Game) {
    this.id = GameObject.nextId++;
    this.name = `${this.constructor.name}_${this.id}`;
    game.gameObjects.push(this);
    console.log(`${this.name} created`);
  }

  tick(_: number) {}
}

export default GameObject;