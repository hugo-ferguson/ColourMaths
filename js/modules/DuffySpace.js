import { Duffy } from "./Duffy.js";
import { VectorSpace } from "./VectorSpace.js";
import { QuaternionSpace } from "./QuaternionSpace.js";
import { Transform } from "./Transform.js";

class DuffySpace {
    /**
     * Add two Duffy objects d1 and d2.
     * @param {Duffy} d1.
     * @param {Duffy} d2.
     * @returns {Duffy} The sum of d1 and d2.
     */
    static add(d1, d2) {
        // Transform both Duffy objects to vectors.
        let v1 = Transform.DuffyToVector(d1);
        let v2 = Transform.DuffyToVector(d2);

        // Add the two vectors.
        let vSum = VectorSpace.add(v1, v2);
        
        // Normalise the resulting vector sum.
        let vNorm = VectorSpace.normalise(vSum);

        console.log(Transform.VectorToDuffy(vNorm))

        // Transform the normalised vector sum to a Duffy object.
        return Transform.VectorToDuffy(vNorm)
    }

    /**
     * Subtract two Duffy objects d1 from d2.
     * @param {Duffy} d1.
     * @param {Duffy} d2.
     * @returns {Duffy} The difference of d1 and d2.
     */
    static sub(d1, d2) {
        // Transform both Duffy objects to vectors.
        let v1 = Transform.DuffyToVector(d1);
        let v2 = Transform.DuffyToVector(d2);

        // Calculate the vector rejection of C onto A
        let vRejectCA = VectorSpace.sub(
            v1, 
            VectorSpace.mulScalar(
                v2,
                VectorSpace.dot(
                    v1, 
                    v2
                )
            )
        )

        // Calculate the vector rejection of A onto C
        let vRejectAC = VectorSpace.sub(
            v2, 
            VectorSpace.mulScalar(
                v1,
                VectorSpace.dot(
                    v2, 
                    v1
                )
            )
        )

        // Calculate the vector difference of the Duffy objects.
        let vDifference = VectorSpace.sub(
            VectorSpace.mulScalar(
                v1,
                VectorSpace.abs(
                    VectorSpace.sub(
                        v1,
                        vRejectCA
                    )
                )
            ),
            VectorSpace.mulScalar(
                vRejectAC,
                VectorSpace.abs(vRejectCA) / VectorSpace.abs(vRejectAC)
            )
        )

        // Orient the Duffy representation of the difference vector.
        let d = DuffySpace.orient(Transform.VectorToDuffy(vDifference))

        return d;
    }

    /**
     * Multiply two Duffy objects d1 and d2.
     * @param {Duffy} d1.
     * @param {Duffy} d2.
     * @returns {Duffy} The product of d1 and d2.
     */
    static mul(d1, d2) {
        // Transform both Duffy objects to quaternions.
        let q1 = Transform.DuffyToQuaternion(d1);
        let q2 = Transform.DuffyToQuaternion(d2);

        // Multiply both quaternions.
        let q3 = QuaternionSpace.mul(q1, q2);

        // Orient the duffy representation of the product quaternion.
        return this.orient(Transform.QuaternionToDuffy(q3))
    }

    /**
     * Divide two Duffy objects d1 by d2.
     * @param {Duffy} d1.
     * @param {Duffy} d2.
     * @returns {Duffy} The quotient of d1 by d2.
     */
    static div(d1, d2) {
        // Multiply d1 by the inverse of d2.
        return DuffySpace.mul(
            d1, 
            // Transform d2 to a quaternion and find the inverse,
            // then transform back to a Duffy object.
            Transform.QuaternionToDuffy(
                QuaternionSpace.inverse(
                    Transform.DuffyToQuaternion(d2)
                )
            )
        )
    }

    /**
     * Orient a Duffy object to point into the correct part of the unit hypersphere.
     * @param {Duffy} d - The Duffy object to orient.
     * @returns {Duffy} The oriented Duffy object.
     */
    static orient(d) {
        // Orient the Duffy object by taking the absolute value of each component,
        // so they all point in the positive direction.
        return new Duffy(
            Math.abs(d.w),
            Math.abs(d.c),
            Math.abs(d.m),
            Math.abs(d.y)
        )
    }
}

export { DuffySpace };