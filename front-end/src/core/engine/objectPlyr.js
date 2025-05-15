// objectplayer.js
import { GameObject } from "./gameobject";
import { vector } from "../utils/vector.js";
import { hitbox } from "../utils/hitbox.js";

export class Player extends GameObject {
  constructor({
    position,
    width,
    height,
    controlType = "player",
    attackSlots = [null, null],
    direction = vector(1, 0),
  } = {}) {
    super(position, width, height);

    this.controlType = controlType;   // "player" o "ai"
    this.attackSlots = attackSlots;   // Dos ranuras de arma
    this.activeSlot = 0;              // Índice 0 o 1
    this.direction = direction;       // Dirección de ataque/mirada

    // Hitbox físico para detección de colisiones reales
    this.hitbox = hitbox(this, 0, 0, null, null);
  }

  move(dir) {
    this.position = this.position.plus(dir);
    this.direction = dir;
    this.hitbox.moveTo(this.position.x, this.position.y);
  }


  interact(obj) {
    if (obj && typeof obj.onInteract === "function") {
      obj.onInteract(this);
    }
  }


  attack() {
    const weapon = this.attackSlots[this.activeSlot];
    if (weapon && typeof weapon.fire === "function") {
      weapon.fire(this.position, this.direction);
    }
  }
}


