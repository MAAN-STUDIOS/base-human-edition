import { GameObject } from "./gameobject.js";
import { Hitbox } from "@utils/hitbox.js";

const PLAYER_SPEED = 5;
const MAX_HEALTH = 100;
const WEAPON_DAMAGE = {
    pistola: 10,
    granada: 30
};
const PISTOL_RANGE = 500; // Rango máximo de la pistola

class Player extends GameObject {
    constructor(options = {}) {
        super(options);
        this.health = MAX_HEALTH;
        this.attackSlots = ["pistola", "granada"]; // Ejemplo de slots de ataque
        this.hitbox = new Hitbox(this);
    }

    // Mover al jugador en una dirección
    move(dir) {
        const speed = 5;
        switch (dir) {
            case "up":
                this.position.y -= speed;
                break;
            case "down":
                this.position.y += speed;
                break;
            case "left":
                this.position.x -= speed;
                break;
            case "right":
                this.position.x += speed;
                break;
        }
    }

    // Interactuar con un objeto
    interact(obj) {
        console.log(`Interacting with ${obj}`);
    }

    // Atacar 
    attack(target) {
        if (this.attackSlots[0] === "pistola") {
            this.shoot(target);
        } else if (this.attackSlots[0] === "granada") {
            this.throwGrenade(target);
        }
    }

    shoot(target) {
        // Calcular la distancia entre el jugador y el objetivo
        const dx = target.position.x - this.position.x;
        const dy = target.position.y - this.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Solo disparar si el objetivo está dentro del rango
        if (distance <= PISTOL_RANGE) {
            target.takeDamage(WEAPON_DAMAGE.pistola);
        } else {
            console.log("Objetivo fuera de rango");
        }
    }

    throwGrenade(target) {
        // Lógica para lanzar granada
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
        }
    }
}

export { Player };