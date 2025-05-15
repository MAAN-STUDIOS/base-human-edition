import { Player } from "./objectplayer.js";
import { Hitbox } from "@utils/hitbox.js";
import { FloodClone } from "./floodclone.js";

export class FloodPlayer extends Player {
  constructor(options = {}) {
    super(options);
    this.biomass = 100;
    this.evolution = 1;
    this.cloneCooldown = 5000; // ms
    this.lastCloneTime = 0;
    this.color = "#8b0000";
    this.hitbox = new Hitbox(this);
    this.clones = [];

  }

  infectHuman(human) {
    if (human.infected) return;
    human.infected = true;
    this.biomass += 20;
    console.log("Infected human! Biomass:", this.biomass);
  }

  createClone() {
    const now = performance.now();
    if (now - this.lastCloneTime < this.cloneCooldown || this.biomass < 25) return;
  
    this.lastCloneTime = now;
    this.biomass -= 25;
  
    const clone = new FloodClone({
      position: this.position.clone().add(new Vector(60, 0)), // un poco a la derecha
      color: "#550000"
    });
  
    this.clones.push(clone);
    console.log("Clone created. Remaining biomass:", this.biomass);
  }
  

  evolve() {
    if (this.evolution < 3 && this.biomass >= 50) {
      this.biomass -= 50;
      this.evolution++;
      this.cloneCooldown = Math.max(2000, 5000 - this.evolution * 1000);
      console.log("Evolved to level", this.evolution);
    }
  }

  attack(type, target) {
    switch (type) {
      case "melee":
        target.takeDamage?.(15);
        break;
      case "acid":
        target.takeDamage?.(5);
        target.status = "corroded";
        break;
      case "toxicSmoke":
        target.status = "confused";
        break;
      case "spikes":
        target.takeDamage?.(10);
        break;
    }
  }

  draw(ctx) {
    const colors = ["#8b0000", "#b80000", "#ff3030"];
    this.color = colors[this.evolution - 1];
    super.draw(ctx);

    // Dibujar biomasa y nivel
    ctx.font = "12px monospace";
    ctx.fillStyle = "white";
    ctx.fillText(`Biomass: ${this.biomass}`, this.position.x, this.position.y - 20);
    ctx.fillText(`Evo: ${this.evolution}`, this.position.x, this.position.y - 35);
  }
}
