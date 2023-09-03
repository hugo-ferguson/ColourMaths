import { ColourRGB } from "./ColourRGB";

class ColourCalculator {
    constructor() {
        this._colour1 = new ColourRGB(0, 0, 0);
        this._colour2 = new ColourRGB(0, 0, 0);
    }

    setColours(colour1, colour2) {
        this._colour1 = colour1;
        this._colour2 = colour2;
    }
}