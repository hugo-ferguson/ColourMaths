import { ColourRGB } from "./ColourRGB.js";
import { ColourVector } from "./ColourVector.js";

class DuffySpace {
    static RGBToVector(colourRGB) {
        let w = (Math.min(colourRGB.r, colourRGB.g, colourRGB.b));
        let c = (1 - colourRGB.r);
        let m = (1 - colourRGB.g);
        let y = (1 - colourRGB.b);
        
        let unit = Math.sqrt(
            Math.pow(w, 2) +
            Math.pow(c, 2) +
            Math.pow(m, 2) +
            Math.pow(y, 2)
        )

        let wNorm = w / unit;
        let cNorm = c / unit;
        let mNorm = m / unit;
        let yNorm = y / unit;

        return new ColourVector(wNorm, cNorm, mNorm, yNorm);
    }

    static VectorToRGB(colourVector) {
        let scale = 1 / (colourVector.w + 
            Math.max(colourVector.c, colourVector.m, colourVector.y));

        let r = 1 - colourVector.c * scale;
        let g = 1 - colourVector.m * scale;
        let b = 1 - colourVector.y * scale;

        return new ColourRGB(r, g, b);
    }
}

export {DuffySpace};