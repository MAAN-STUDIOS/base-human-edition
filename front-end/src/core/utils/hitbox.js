export class Hitbox {
    /**
     * Constructor
     * @param {Vector}origin
     * @param {number}width
     * @param {number}height
     * @param options
     */
    constructor(origin, width, height, options = {}) {
        this.origin = origin;
        this.width = width;
        this.height = height;
        this.options = options || {};
    }

    /**
     * Update this hitbox attributes.
     * @param {Vector}origin
     * @param {number||null}width
     * @param {number||null}height
     */
    update(origin, width = null,height = null) {
        this.origin = origin;
        this.width = width || this.width;
        this.height = height || this.height;
    }

    /**
     * Checks if this hitbox collides with other hitbox.
     * @param {Hitbox}other
     * @returns {boolean}
     */
    collidesWith(other) {
        return this.origin.x + this.width < other.origin.x && this.origin.x < other.origin.x &&
            this.origin.y + this.width < other.origin.y && this.origin.y < other.origin.y;
    }
}