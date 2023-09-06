/**
 * Stores a Duffy object [w, c, m, y] which has operations
 * defined in DuffySpace.
 */
class Duffy {
    /**
     * Create a Duffy object.
     * @param {number} w - The white value of the Duffy object.
     * @param {number} c - The cyan value of the Duffy object.
     * @param {number} m - The magenta value of the Duffy object.
     * @param {number} y - The yellow value of the Duffy object.
     */
    constructor(w, c, m, y) {
        this._w = w;
        this._c = c;
        this._m = m;
        this._y = y;
    }

    /**
     * Return w, the white value of the Duffy object.
     * @returns {number} w.
     */
    get w() {
        return this._w;
    }

    /**
     * Return c, the cyan value of the Duffy object.
     * @returns {number} c.
     */
    get c() {
        return this._c;
    }

    /**
     * Return m, the magenta value of the Duffy object.
     * @returns {number} m.
     */
    get m() {
        return this._m;
    }

    /**
     * Return y, the yellow value of the Duffy object.
     * @returns {number} y.
     */
    get y() {
        return this._y;
    }

    /**
     * Return a string representation of this Duffy object, 
     *  e.g., '[W: {w} C: {c} M: {m} Y: {y}]'.
     * @returns {string} A string representation of this Duffy object.
     */
    toString() {
        return "W: " + this.w + 
            " C: " + this.c +
            " M: " + this.m +
            " Y: " + this.y;
    }
}

export { Duffy };