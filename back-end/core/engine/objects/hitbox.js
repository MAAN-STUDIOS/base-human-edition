import { Vector } from './vector.js';

export class Hitbox {
    /**
     * Creates a hitbox for collision detection
     * @param {GameObject} gameObject - The GameObject this hitbox belongs to
     * @param {number} offsetX - X offset of the hitbox relative to the GameObject position
     * @param {number} offsetY - Y offset of the hitbox relative to the GameObject position
     * @param {number|null} width - Width of the hitbox (if null, uses GameObject width)
     * @param {number|null} height - Height of the hitbox (if null, uses GameObject height)
     */
    constructor(gameObject, offsetX = 0, offsetY = 0, width = null, height = null) {
        this.gameObject = gameObject;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this._width = width;
        this._height = height;

        this.isPhysical = true;  // For physical collisions (blocking movement)
        this.isLogical = true;   // For logical collisions (triggering events)
    }

    /**
     * Gets the X coordinate of the hitbox (GameObject X + offset)
     * @returns {number} The actual X coordinate
     */
    get x() {
        return this.gameObject.position.x + this.offsetX;
    }

    /**
     * Gets the Y coordinate of the hitbox (GameObject Y + offset)
     * @returns {number} The actual Y coordinate
     */
    get y() {
        return this.gameObject.position.y + this.offsetY;
    }

    /**
     * Gets the position as a Vector
     * @returns {Vector} Position vector
     */
    get position() {
        return new Vector(this.x, this.y);
    }

    /**
     * Gets the width of the hitbox
     * @returns {number} Width
     */
    get width() {
        return this._width !== null ? this._width : this.gameObject.width;
    }

    /**
     * Sets the width of the hitbox
     * @param {number} value - New width
     */
    set width(value) {
        this._width = value;
    }

    /**
     * Gets the height of the hitbox
     * @returns {number} Height
     */
    get height() {
        return this._height !== null ? this._height : this.gameObject.height;
    }

    /**
     * Sets the height of the hitbox
     * @param {number} value - New height
     */
    set height(value) {
        this._height = value;
    }

    /**
     * Gets the center point of the hitbox
     * @returns {Vector} Center position
     */
    get center() {
        return new Vector(
            this.x + this.width / 2,
            this.y + this.height / 2
        );
    }

    /**
     * Checks if this hitbox intersects with another hitbox
     * @param {Hitbox} hitbox - The other hitbox to check collision with
     * @returns {boolean} True if collision exists, false otherwise
     */
    intersects(hitbox) {
        return this.x < hitbox.x + hitbox.width &&
            this.x + this.width > hitbox.x &&
            this.y < hitbox.y + hitbox.height &&
            this.y + this.height > hitbox.y;
    }

    /**
     * Alias for intersects method
     * @param {Hitbox} hitbox - The other hitbox
     * @returns {boolean} True if collision exists
     */
    collidesWith(hitbox) {
        return this.intersects(hitbox);
    }

    /**
     * Checks if the hitbox contains a specific point
     * @param {Vector|{x: number, y: number}} point - Point to check
     * @returns {boolean} True if the point is inside the hitbox
     */
    contains(point) {
        return point.x >= this.x &&
            point.x < this.x + this.width &&
            point.y >= this.y &&
            point.y < this.y + this.height;
    }

    /**
     * Calculates the distance between the centers of two hitboxes
     * @param {Hitbox} hitbox - Other hitbox
     * @returns {number} Distance between centers
     */
    distanceTo(hitbox) {
        return this.center.distanceTo(hitbox.center);
    }

    /**
     * Gets direction vector from this hitbox's center to another hitbox's center
     * @param {Hitbox} hitbox - Target hitbox
     * @returns {Vector} Normalized direction vector
     */
    directionTo(hitbox) {
        return hitbox.center.sub(this.center).normalize();
    }

    /**
     * Moves the hitbox and GameObject to a new position
     * @param {number} x - New X position
     * @param {number} y - New Y position
     */
    moveTo(x, y) {
        this.gameObject.position.x = x - this.offsetX;
        this.gameObject.position.y = y - this.offsetY;
    }

    /**
     * Moves the hitbox to a position specified by a Vector
     * @param {Vector} position - New position
     */
    moveToVector(position) {
        this.moveTo(position.x, position.y);
    }

    /**
     * Adjusts the hitbox offset
     * @param {number} offsetX - New X offset
     * @param {number} offsetY - New Y offset
     * @returns {Hitbox} This hitbox for chaining
     */
    setOffset(offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        return this;
    }

    /**
     * Draws the hitbox in debug mode
     * @param {CanvasRenderingContext2D} ctx - Canvas context
     * @param {string} physicalColor - Color for physical hitbox
     * @param {string} logicalColor - Color for logical hitbox
     */
    drawDebug(ctx, physicalColor = "red", logicalColor = "blue") {
        ctx.save();

        // Draw physical hitbox
        if (this.isPhysical) {
            ctx.strokeStyle = physicalColor;
            ctx.lineWidth = 2;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }

        // Draw logical hitbox (if different from physical)
        if (this.isLogical && this.isLogical !== this.isPhysical) {
            ctx.strokeStyle = logicalColor;
            ctx.setLineDash([5, 5]);
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }

        // Draw center point
        ctx.fillStyle = "white";
        const center = this.center;
        ctx.beginPath();
        ctx.arc(center.x, center.y, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    /**
     * Updates the hitbox size
     * @param {number|null} width - New width (or null to use GameObject's)
     * @param {number|null} height - New height (or null to use GameObject's)
     * @returns {Hitbox} This hitbox for chaining
     */
    resize(width, height) {
        this._width = width;
        this._height = height;
        return this;
    }

    /**
     * Changes the GameObject this hitbox is associated with
     * @param {GameObject} gameObject - New GameObject
     * @returns {Hitbox} This hitbox for chaining
     */
    setGameObject(gameObject) {
        this.gameObject = gameObject;
        return this;
    }

    /**
     * Clears all references and resets the hitbox
     */
    clear() {
        const gameObjectRef = this.gameObject;

        if (gameObjectRef) {
            // If we have an event system, we could unsubscribe from events here
            // gameObjectRef.offAllEvents(this);
        }

        this.gameObject = null;
        this._width = 0;
        this._height = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.isPhysical = false;
        this.isLogical = false;
    }

    /**
     * Clones the hitbox (associated with a new GameObject if provided)
     * @param {GameObject|null} newGameObject - New GameObject (optional)
     * @returns {Hitbox} New Hitbox instance
     */
    clone(newGameObject = null) {
        const target = newGameObject || this.gameObject;
        const cloned = new Hitbox(target, this.offsetX, this.offsetY, this._width, this._height);
        cloned.isPhysical = this.isPhysical;
        cloned.isLogical = this.isLogical;
        return cloned;
    }

    /**
     * Serializes the hitbox to a plain object
     * @returns {Object} Serialized representation
     */
    serialize() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            offsetX: this.offsetX,
            offsetY: this.offsetY,
            isPhysical: this.isPhysical,
            isLogical: this.isLogical
        };
    }

    /**
     * Calculates the overlapping area between two hitboxes
     * @param {Hitbox} hitbox - Other hitbox
     * @returns {number|null} Area of overlap or null if no overlap
     */
    overlapArea(hitbox) {
        if (!this.intersects(hitbox)) {
            return null;
        }

        const xOverlap = Math.min(this.x + this.width, hitbox.x + hitbox.width) -
            Math.max(this.x, hitbox.x);
        const yOverlap = Math.min(this.y + this.height, hitbox.y + hitbox.height) -
            Math.max(this.y, hitbox.y);

        return xOverlap * yOverlap;
    }

    /**
     * Calculates which side of this hitbox is colliding with another
     * @param {Hitbox} hitbox - Other hitbox
     * @returns {{top: boolean, right: boolean, bottom: boolean, left: boolean}|null}
     *          Collision sides or null if no collision
     */
    getCollisionSides(hitbox) {
        if (!this.intersects(hitbox)) {
            return null;
        }

        return {
            top: this.y < hitbox.y && this.y + this.height > hitbox.y,
            right: this.x + this.width > hitbox.x + hitbox.width && this.x < hitbox.x + hitbox.width,
            bottom: this.y + this.height > hitbox.y + hitbox.height && this.y < hitbox.y + hitbox.height,
            left: this.x < hitbox.x && this.x + this.width > hitbox.x
        };
    }
}