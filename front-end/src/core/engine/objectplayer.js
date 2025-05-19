
import { GameObject } from "./gameobject.js";
import { Hitbox } from "@utils/hitbox.js";

export class Player extends GameObject {
    constructor(options = {}) {
        super(options);
        this.health = MAX_HEALTH;
        this.attackSlots = ["pistola", "granada"]; // Ejemplo de slots de ataque
        this.hitbox = new Hitbox(this);
    }


        this.controlType = controlType;   // "player" o "ai"
        this.attackSlots = attackSlots;   // Dos ranuras de arma
        this.activeSlot = 0;              // Índice 0 o 1
        this.direction = direction;       // Dirección de ataque/mirada
    }

    move(dir) {
        this.position = this.position.add(dir);
        this.direction = dir;
        this.hitbox.moveTo(this.position.x, this.position.y);
    }


    interact(obj) {
        if (obj && typeof obj.onInteract === "function") {
            obj.onInteract(this);
        }
    }



    // Método de colisión con enemigos o estructuras
    checkCollisions(objects) {
        for (let obj of objects) {
            if (this.checkCollision(obj)) {
                console.log("Collision detected with", obj);
                // Lógica de qué hacer en caso de colisión
            }
        }
    }

    draw(ctx) {
        // Primero dibujamos el rectángulo base
        ctx.fillStyle = this.color || "#8b0000";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    
        // Luego dibujamos el texto
        ctx.font = "12px monospace";
        ctx.fillStyle = "white";
        ctx.fillText(`Biomass: ${this.biomass || 100}`, this.position.x, this.position.y - 20);
        ctx.fillText(`Evo: ${this.evolution || 1}`, this.position.x, this.position.y - 35);
    
        if (window.DEBUG_MODE) {
            this.hitbox.drawDebug(ctx);

    attack() {
        const weapon = this.attackSlots[this.activeSlot];
        if (weapon && typeof weapon.fire === "function") {
            weapon.fire(this.position, this.direction);

        }
    }
}


