import { DuffySpace } from "./DuffySpace.js";
import { Quaternion } from "./Quaternion.js";

class ColourVector {
    constructor(w, c, m, y) {
        this._w = w;
        this._c = c;
        this._m = m;
        this._y = y;
    }

    get w() {
        return this._w;
    }

    get c() {
        return this._c;
    }

   get m() {
        return this._m;
    }

    get y() {
        return this._y;
    }

    set w(w) {
        this._w = w;
    }

    set c(c) {
        this._c = c;
    }

    set m(m) {
        this._m = m;
    }

    set y(y) {
        this._y = y;
    }

    unit() {
        return Math.sqrt(
            Math.pow(this.w, 2) +
            Math.pow(this.c, 2) +
            Math.pow(this.m, 2) +
            Math.pow(this.y, 2)
        );
    }

    abs() {
        return Math.sqrt(
            Math.pow(this.w, 2) +
            Math.pow(this.c, 2) +
            Math.pow(this.m, 2) +
            Math.pow(this.y, 2)
        );
    }

    add(colourVector) {
        let unit = this.unit();
        let w = (this.w + colourVector.w) / unit;
        let c = (this.c + colourVector.c) / unit;
        let m = (this.m + colourVector.m) / unit;
        let y = (this.y + colourVector.y) / unit;
        
        return new ColourVector(w, c, m, y);
    }

    sub(colourVector) {
        let rejectCA = this.subVector(colourVector.mulScalar(this.dot(colourVector)));
        let rejectAC = colourVector.subVector(this.mulScalar(colourVector.dot(this)));

        let difference = this.mulScalar(this.subVector(rejectCA).abs()).subVector(
            rejectAC.mulScalar(rejectCA.abs() / rejectAC.abs())
        );
        
        return new ColourVector(
            Math.abs(difference.w),
            Math.abs(difference.c),
            Math.abs(difference.m),
            Math.abs(difference.y)
        );
    }

    mul(colourVector) {
        let q1 = new Quaternion(
            this.w, 
            this.c,
            this.m,
            this.y
        );

        let q2 = new Quaternion(
            colourVector.w, 
            colourVector.c,
            colourVector.m,
            colourVector.y
        );

        let q3 = q1.mul(q2);

        console.log(q3)

        return new ColourVector(
            Math.abs(q3.w), 
            Math.abs(q3.x), 
            Math.abs(q3.y), 
            Math.abs(q3.z)
        )
    }

    div(colourVector) {
        return this.mul(colourVector.inverse());
    }

    inverse() {
        let modSq = Math.pow(this.w, 2) +
            Math.pow(this.c, 2) +
            Math.pow(this.m, 2) +
            Math.pow(this.y, 2);
        
        return new ColourVector(
            this.w / modSq,
            -1 * this.c / modSq,
            -1 * this.m / modSq,
            -1 * this.y / modSq
        );
    }

    subVector(colourVector2) {
        return new ColourVector(
            this.w - colourVector2.w,
            this.c - colourVector2.c,
            this.m - colourVector2.m,
            this.y - colourVector2.y
        );
    }

    addVector(colourVector2) {
        return new ColourVector(
            this.w + colourVector2.w,
            this.c + colourVector2.c,
            this.m + colourVector2.m,
            this.y + colourVector2.y
        );
    }

    mulScalar(s) {
        return new ColourVector(
            this.w * s,
            this.c * s,
            this.m * s,
            this.y * s
        );
    }

    divScalar(s) {
        return new ColourVector(
            this.w / s,
            this.c / s,
            this.m / s,
            this.y / s
        );
    }

    dot(colourVector) {
        return this.w * colourVector.w +
            this.c * colourVector.c +
            this.m * colourVector.m +
            this.y * colourVector.y;
    }

    toString() {
        return "W: " + this.w + 
            " C: " + this.c +
            " M: " + this.m +
            " Y: " + this.y;
    }
}

export {ColourVector};