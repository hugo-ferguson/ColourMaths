import { ColourRGB } from "./modules/ColourRGB";
import { ColourVector } from "./modules/ColourVector";
import { DuffySpace } from "./modules/DuffySpace";

let operation = "add";
let colour1RGB = new ColourRGB(0, 0, 0);
let colour2RGB = new ColourRGB(0, 0, 0);

function setOperation() {
    operation = operationSelect.value;
}

function setColour1() {
    colour1RGB.fromString(colour1Picker.value);
}

function setColour2 () {
    colour2RGB.fromString(colour2Picker.value);
}

function calculate() {
    colour1RGB.fromString(colour1Picker.value);
    colour2RGB.fromString(colour2Picker.value);

    let colour1Vector = DuffySpace.RGBToVector(colour1RGB);
    let colour2Vector = DuffySpace.RGBToVector(colour2RGB);
    let colour3Vector;

    switch(operation) {
        case "add":
            colour3Vector = colour1Vector.add(colour2Vector);
            break;
        case "mul":
            colour3Vector = colour1Vector.mul(colour2Vector);
            break;
    }

    colour3Picker.value = DuffySpace.VectorToRGB(colour3Vector).toString();
}

let colour1Picker = document.getElementById("colour1");
let colour2Picker = document.getElementById("colour2");
let colour3Picker = document.getElementById("colour3");
let calculateButton = document.getElementById("calculate");
let operationSelect = document.getElementById("operation");

calculateButton.addEventListener("click", calculate, false);
operationSelect.addEventListener("change", setOperation, false);
colour1Picker.addEventListener("change", setColour1, false);
colour2Picker.addEventListener("change", setColour2, false);