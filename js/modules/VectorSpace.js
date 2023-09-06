import { Vector } from "./Vector.js";

/**
 * Class containing static methods defining operations between vectors.
 */
class VectorSpace {
    /**
     * Add two vectors v1 and v2.
     * @param {Vector} v1.
     * @param {Vector} v2.
     * @returns {Vector} The sum of v1 and v2.
     */
    static add(v1, v2) {
        return new Vector(
            v1.a + v2.a,
            v1.b + v2.b,
            v1.c + v2.c,
            v1.d + v2.d
        );
    }

    /**
     * Subtract two vectors v1 from v2.
     * @param {Vector} v1.
     * @param {Vector} v2.
     * @returns {Vector} The difference of v1 and v2.
     */
    static sub(v1, v2) {
        // v1 + (v2 * -1)
        return this.add(v1, this.mulScalar(v2, -1))
    }

    /**
     * Multiply a vector by a scalar.
     * @param {Vector} v - The vector to be multiplied by the scalar.
     * @param {Vector} s - The scalar by which to multiply the vector.
     * @returns {Vector} The product of the vector and the scalar.
     */
    static mulScalar(v, s) {
        return new Vector(
            v.a * s,
            v.b * s,
            v.c * s,
            v.d * s
        );
    }

    /**
     * Divide a vector by a scalar.
     * @param {Vector} v - The vector to be divided by the scalar.
     * @param {Vector} s - The scalar by which to divide the vector.
     * @returns {Vector} The quotient of the vector by the scalar.
     */
    static divScalar(v, s) {
        // v1 * (1 / s)
        return this.mulScalar(v, 1 / s);
    }

    /**
     * Calculate the dot product of two vectors.
     * @param {Vector} v1.
     * @param {Vector} v2.
     * @returns {Vector} The resultant dot product of the two vectors.
     */
    static dot(v1, v2) {
        return (
            v1.a * v2.a +
            v1.b * v2.b +
            v1.c * v2.c +
            v1.d * v2.d
        );
    }

    /**
     * Calculate the absolute value of a vector.
     * @param {Vector} v.
     * @returns {Vector} The absolute value of the vector.
     */
    static abs(v) {
        // sqrt(a^2 + b^2 + c^2 + d^2)
        return Math.sqrt(
            Math.pow(v.a, 2) +
            Math.pow(v.b, 2) +
            Math.pow(v.c, 2) +
            Math.pow(v.d, 2)
        );
    }

    /**
     * Calculate a normalised version of a vector.
     * @param {Vector} v. 
     * @returns {Vector} The normalised version of the vector.
     */
    static normalise(v) {
        // Calculate the absolute value of v.
        let absV = this.abs(v)

        // Return a new vector with each component divided by the
        // absolute value of v.
        // This vector has a length (absolute value) of 1.
        return new Vector(
            v.a / absV,
            v.b / absV,
            v.c / absV,
            v.d / absV
        )
    }
}

export { VectorSpace };