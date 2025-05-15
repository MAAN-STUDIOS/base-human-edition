import { GameObject } from "./gameobject.js";
import { Hitbox } from "@utils/hitbox.js";

export class FloodClone extends GameObject {
  constructor(options = {}) {
    super(options);
    this.health = 50;
    this.hitbox = new Hitbox(this);
  }

  update() {
    // TODO: programar el comportamiento de los clones
  }

  draw(ctx) {
    // Dibujar el clon
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    // Dibujar la barra de vida
    const healthBarWidth = this.width;
    const healthBarHeight = 5;
    const healthPercentage = this.health / 50; // 50 es la vida máxima

    // Fondo de la barra de vida
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y - 10, healthBarWidth, healthBarHeight);

    // Vida actual
    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x, this.position.y - 10, healthBarWidth * healthPercentage, healthBarHeight);
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    console.log("Clone destroyed");
  }
}
