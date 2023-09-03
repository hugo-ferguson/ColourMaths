class ColourRGB {
    constructor(r, g, b) {
        this._r = r;
        this._g = g;
        this._b = b;
    }

    get r() {
        return this._r;
    }

    get g() {
        return this._g;
    }

    get b() {
        return this._b;
    }

    set r(r) {
        this._r = r;
    }

    set g(g) {
        this._g = g;
    }

    set b(b) {
        this._b = b;
    }

    toString() {
        return '#' + 
            Math.round((this.r * 255)).toString(16).padStart(2, '0').toUpperCase() +
            Math.round((this.g * 255)).toString(16).padStart(2, '0').toUpperCase() +
            Math.round((this.b * 255)).toString(16).padStart(2, '0').toUpperCase();
    }

    fromString(rgbString) {
        this.r = parseInt(rgbString.substring(1, 3), 16) / 255;
        this.g = parseInt(rgbString.substring(3, 5), 16) / 255;
        this.b = parseInt(rgbString.substring(5, 7), 16) / 255;
    }
}

export {ColourRGB}