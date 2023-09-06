import { Duffy } from "./Duffy.js";
import { Vector } from "./Vector.js";
import { Quaternion } from "./Quaternion.js";
import { VectorSpace } from "./VectorSpace.js";
import { RGB } from "./RGB.js";

/**
 * Class containing static methods defining transformations between
 * objects in spaces.
 */
class Transform {
    /**
     * Transform a Duffy object to a quaternion.
     * @param {Duffy} d - Duffy object to transform.
     * @returns {Quaternion} Quaternion representation of the Duffy.
     */
    static DuffyToQuaternion(d) {
        // Map each element of the Duffy to a component of a quaternion.
        // w -> a
        // c -> b
        // m -> c
        // y -> d
        return new Quaternion(
            d.w,
            d.c,
            d.m,
            d.y
        )
    }

    /**
     * Transform a quaternion to a Duffy object.
     * @param {Quaternion} q - Quaternion to transform.
     * @returns {Duffy} Duffy representation of the quaternion.
     */
    static QuaternionToDuffy(q) {
        // Map each element of the quaternion to a component of a duffy object.
        // a -> w
        // b -> c
        // c -> m
        // d -> y
        return new Duffy(
            q.a,
            q.b,
            q.c,
            q.d
        )
    }

    /**
     * Transform a Duffy object to a vector.
     * @param {Duffy} d - Duffy object to transform.
     * @returns {Vector} Vector representation of the Duffy.
     */
    static DuffyToVector(d) {
        // Map each element of the Duffy to a vector.
        // w -> a
        // c -> b
        // m -> c
        // y -> d
        return new Vector(
            d.w,
            d.c,
            d.m,
            d.y
        )
    }

    /**
     * Transform a vector to a Duffy object.
     * @param {Vector} v - Vector to transform.
     * @returns {Duffy} Duffy representation of the vector.
     */
    static VectorToDuffy(v) {
        // Map each element of the vector to a Duffy.
        // a -> w
        // b -> c
        // c -> m
        // d -> y
        return new Duffy(
            v.a,
            v.b,
            v.c,
            v.d
        )
    }

    /**
     * Transform a Duffy object to an RGB object.
     * @param {Duffy} d - Duffy object to transform. 
     * @returns {RGB} RGB representation of the Duffy.
     */
    static DuffyToRGB(d) {
        // Calculate a scale by which to multiply each CMY component.
        let scale = 1 / (d.w + Math.max(d.c, d.m, d.y));

        // Map the CMY components of the Duffy to the RGB components
        // of a new RGB object.
        return new RGB(
            1 - d.c * scale,
            1 - d.m * scale,
            1 - d.y * scale
        );
    }

    /**
     * Transform an RGB object to a Duffy object.
     * @param {RGB} rgb 
     * @returns {Duffy} Duffy representation of the RGB object.
     */
    static RGBToDuffy(rgb) {
        // Normalise the vector, which transforms the vector to
        // an object in DuffySpace.
        let v = VectorSpace.normalise(
            // Create a vector representation of the RGB object,
            // where a is the lowest value of the r, g, and b values
            // (which will become the w value of the Duffy object),
            // and b, c, and d are the c, m, and y components of the Duffy.
            new Vector(
                Math.min(rgb.r, rgb.g, rgb.b),
                1 - rgb.r,
                1 - rgb.g,
                1 - rgb.b
            )
        )

        // Map the elements of the vector to a new Duffy object.
        // a -> w
        // b -> c
        // c -> m
        // d -> y
        return new Duffy(
            v.a,
            v.b,
            v.c,
            v.d
        )
    }
}

export { Transform };