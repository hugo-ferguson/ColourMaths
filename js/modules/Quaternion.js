/**
 * A quaternion q, where q = a + bi + cj + dk
 */
class Quaternion {
    /**
     * Create a quaternion.
     * @param {number} a - The scalar component of the quaternion.
     * @param {number} b - The real multiple of the basis vector i.
     * @param {number} c - The real multiple of the basis vector j.
     * @param {number} d - The real multiple of the basis vector k.
     */
    constructor(a, b, c, d) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }

    /**
     * Return a, the scalar component a.
     * @return {number} a.
     */
    get a() {
        return this._a;
    }

    /**
     * Return b, the real multiple of the basis vector i.
     * @return {number} b.
     */
    get b() {
        return this._b;
    }

    /**
     * Return c, the real multiple of the basis vector j.
     * @return {number} c.
     */
    get c() {
        return this._c;
    }

    /**
     * Return d, the real multiple of the basis vector k.
     * @return {number} d.
     */
    get d() {
        return this._d;
    }

    /**
     * Return a string representation of this quaternion, e.g., '{a} + {b}i + {c}j + {d}k'.
     * @return {string} A string representation of this quaternion.
     */
    toString() {
        return this.a + " + " +
            this.b + "i + " +
            this.c + "j + " +
            this.d + "k";
    }
}

export { Quaternion };