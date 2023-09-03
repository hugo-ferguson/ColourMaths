class Quaternion {
    constructor(w, x, y, z) {
        this._w = w;
        this._x = x;
        this._y = y;
        this._z = z;
    }

    get w() {
        return this._w;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get z() {
        return this._z;
    }

    mul(quaternion) {
        let w = this.w * quaternion.w - 
            this.x * quaternion.x - 
            this.y * quaternion.y - 
            this.z * quaternion.z;

        let x = this.w * quaternion.x +
            this.x * quaternion.w +
            this.y * quaternion.z - 
            this.z * quaternion.y;

        let y = this.w * quaternion.y -
            this.x * quaternion.z +
            this.y * quaternion.w +
            this.z * quaternion.x;
        
        let z = this.w * quaternion.z +
            this.x * quaternion.y -
            this.y * quaternion.x +
            this.z * quaternion.w;

        return new Quaternion(w, x, y, z)
    }
}

export {Quaternion};