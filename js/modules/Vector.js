/**
 * Stores a four-dimensional vector [a, b, c, d] which has operations 
 * defined in VectorSpace.
 * This is a more general object than a Duffy, as its values do not 
 * need to be normalised and typical vector retain their meanings.
 */
class Vector {
    /**
     * Create a vector.
     * @param {number} a - The first element of the vector.
     * @param {number} b - The second element of the vector.
     * @param {number} c - The third element of the vector.
     * @param {number} d - The fourth element of the vector.
     */
    constructor(a, b, c, d) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }

    /**
     * Return a, the first element of the vector.
     * @return {number} a.
     */
    get a() {
        return this._a;
    }

    /**
     * Return b, the second element of the vector.
     * @return {number} a.
     */
    get b() {
        return this._b;
    }

    /**
     * Return c, the third element of the vector.
     * @return {number} a.
     */
    get c() {
        return this._c;
    }

    /**
     * Return d, the fourth element of the vector.
     * @return {number} a.
     */
    get d() {
        return this._d;
    }

    /**
     * Return a string representation of this vector, e.g., '[{a}, {b}, {c}, {d}]'.
     * @return {string} A string representation of this vector.
     */
    toString() {
        return "[" + this.a +
            ", " + this.b +
            ", " + this.c +
            ", " + this.d + "]";
    }
}

export { Vector };