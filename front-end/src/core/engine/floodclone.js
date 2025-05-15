import { GameObject } from "./gameobject.js";
import { Hitbox } from "@utils/hitbox.js";

export class FloodClone extends GameObject {
  constructor({ position, width = 40, height = 40, color = "#550000" }) {
    super({ position, width, height, color });
    this.hitbox = new Hitbox(this);
  }

  update() {
    // TODO: programar el comportamiento de los clones
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
