/**
 * An RGB colour.
 * Each component (red, green, and blue) is stored as
 * a value between 0 and 1.
 */
class RGB {
    /**
     * Create an RGB colour object.
     * @param {*} r 
     * @param {*} g 
     * @param {*} b 
     */
    constructor(r, g, b) {
        this._r = r;
        this._g = g;
        this._b = b;
    }

    /**
     * Get r, the red component of this colour.
     * @return {number} r - The red component between 0 and 1.
     */
    get r() {
        return this._r;
    }

    /**
     * Get g, the green component of this colour.
     * @return {number} g - The green component between 0 and 1.
     */
    get g() {
        return this._g;
    }

    /**
     * Get b, the blue component of this colour.
     * @return {number} b - The blue component between 0 and 1.
     */
    get b() {
        return this._b;
    }

    /**
     * Set r, the red component of this colour.
     * @param {number} r - The red component between 0 and 1.
     */
    set r(r) {
        this._r = r;
    }

    /**
     * Set g, the green component of this colour.
     * @param {number} g - The green component between 0 and 1.
     */
    set g(g) {
        this._g = g;
    }

    /**
     * Set b, the blue component of this colour.
     * @param {number} b - The blue component between 0 and 1.
     */
    set b(b) {
        this._b = b;
    }

    /**
     * Convert this colour to an RGB string.
     * @returns {string} An RGB string representation of this colour, e.g., '#RRGGBB'.
     */
    toString() {
        // Return '#' plus each attribute (r, g, and b) multiplied by 255,
        // converted from decimal to hexadecimal, and converted to upper case:
        // '#RRGGBB'.
        return '#' + 
            Math.round((this.r * 255)).toString(16).padStart(2, '0').toUpperCase() +
            Math.round((this.g * 255)).toString(16).padStart(2, '0').toUpperCase() +
            Math.round((this.b * 255)).toString(16).padStart(2, '0').toUpperCase();
    }

    /**
     * Set this colour to the colour represented by an RGB string.
     * @param {string} rgbString - An RGB string representation of this colour, e.g., '#RRGGBB'.
     */
    fromString(rgbString) {
        // Set the r, g, and b attributes to the relevant substring in the input string
        // (e.g., the red component is substring(1, 3) of #RRggbb),
        // convert from hexadecimal to decimal, and get the decimal between 0 and 1
        // out of 255.
        this.r = parseInt(rgbString.substring(1, 3), 16) / 255;
        this.g = parseInt(rgbString.substring(3, 5), 16) / 255;
        this.b = parseInt(rgbString.substring(5, 7), 16) / 255;
    }
}

export { RGB };