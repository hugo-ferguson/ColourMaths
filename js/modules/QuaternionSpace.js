import { Quaternion } from "./Quaternion.js";

/**
 * Class containing static methods defining operations between quaternions.
 */
class QuaternionSpace {
    /**
     * Multiply two Quaternion objects.
     * @param {Quaternion} q1.
     * @param {Quaternion} q2.
     * @returns {Quaternion} Quaternion product of q1 and q2, q3 = q1 * q2.
     */
    static mul(q1, q2) {
        // Calculate the new a, b, c, and d components of the 
        // resulting quaternion q3 = q1 * q2. 
        // a1a2 - b1b2 - c1c2 - d1d2
        let a = q1.a * q2.a - 
            q1.b * q2.b - 
            q1.c * q2.c - 
            q1.d * q2.d;

        // a1b2 + b1a2 + c1d2 - d1c2
        let b = q1.a * q2.b +
            q1.b * q2.a +
            q1.c * q2.d - 
            q1.d * q2.c;

        // a1c2 - b1d2 + c1a2 + d1a2
        let c = q1.a * q2.c -
            q1.b * q2.d +
            q1.c * q2.a +
            q1.d * q2.b;
        
        // a1d2 + b1c2 - c1b2 + d1a2
        let d = q1.a * q2.d +
            q1.b * q2.c -
            q1.c * q2.b +
            q1.d * q2.a;

        // Return quaternion q3 = a + bi + cj + dk.
        return new Quaternion(a, b, c, d);
    }

    /**
     * Calculate the multiplicative inverse of a quaternion.
     * @param {Quaternion} q.
     * @returns {Quaternion} The multiplicative inverse of the quaternion q.
     */
    static inverse(q) {
        // Calculate the square of the absolute value of q, |q|^2
        let absSquared = Math.pow(q.a, 2) +
            Math.pow(q.b, 2) +
            Math.pow(q.c, 2) +
            Math.pow(q.d, 2);
        
        // Calculate the multiplicative inverse of q, q* / (||q||^2)
        return new Quaternion(
            q.a / absSquared,
            -1 * q.b / absSquared,
            -1 * q.c / absSquared,
            -1 * q.d / absSquared
        );
    }
}

export { QuaternionSpace };