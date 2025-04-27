"use strict";
//IMPORTS TO BE CORRECTLY ADDED
import { vector } from "../utils/vector.js";
import { hitbox } from "../utils/hitbox.js";


export class GameObject {
    constructor(options = {}) {
        this.position = options.position || vector(0, 0);
        this.width = options.width || 0;
        this.height = options.height || 0;
        this.hitbox = options.hitbox || hitbox(this.position, this.width, this.height);
        this.sprite = options.sprite || null;
        this.destroyImage = options.destroyImage || null;
    }

    //METHODS
    draw(ctx) {
        if (this.sprite) {
            ctx.drawImage(this.sprite.image, this.position.x, this.position.y, this.width, this.height);

        } else {
            ctx.fillStyle = "red";
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }


        this.drawBoundingBox(ctx);
    }
    collidesWith(other) {
        if (this.hitbox.collidesWith(other.hitbox)) {
            return true;
        }
        return false;
    }
    // For debugging purposes
    drawBoundingBox(ctx) {
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
    }
    
    onDestroy(ctx){
        
        ctx.clearRect(this.position.x, this.position.y, this.width, this.height);
        this.hitbox.clear();
        this.sprite = null;
        this.position = null;
        this.width = null;
        this.height = null;
        this.hitbox = null;
        ctx.drawImage(this.destroyImage, this.position.x, this.position.y, this.width, this.height);
        

    }
    isVisible(viewport){
        if (this.position.x + this.width < viewport.x || this.position.x > viewport.x + viewport.width ||
            this.position.y + this.height < viewport.y || this.position.y > viewport.y + viewport.height) {
            return false;
        }
        return true;
    }
    serialize() {
        return {
            position: this.position,
            width: this.width,
            height: this.height,
            hitbox: this.hitbox,
            sprite: this.sprite,
            destroyImage: this.destroyImage
        };
    }
    update(delta) {
        // Method to be implemented
        this.hitbox.update(this.position, this.width, this.height);
    }
}
