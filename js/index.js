import { DuffySpace } from './modules/DuffySpace.js';
import { Transform } from './modules/Transform.js';
import { RGB } from './modules/RGB.js';

// Default values for operation and input colours.
let operation = "add";
let rgb1 = new RGB(0, 0, 0);
let rgb2 = new RGB(0, 0, 0);

/**
 * Calculate the selected operation for the two
 * selected colours, rgbColour1 and rgbColour2.
 */
function calculate() {
    // Update operation to selected value.
    operation = selectOperation.value;

    // Update the two RGB colours to the selected values
    // from the colour pickers.
    rgb1.fromString(pickerColour1.value);
    rgb2.fromString(pickerColour2.value);

    // Create a Duffy representation of the two RGB colours.
    let d1 = Transform.RGBToDuffy(rgb1);
    let d2 = Transform.RGBToDuffy(rgb2);
    let d3;

    // Perform the corresponding operation in DuffySpace for the
    // selected operation.
    switch(operation) {
        case "add":
            d3 = DuffySpace.add(d1, d2);
            break;
        case "mul":
            d3 = DuffySpace.mul(d1, d2);
            break;
        case "div":
            d3 = DuffySpace.div(d1, d2);
            break;
        case "sub":
            d3 = DuffySpace.sub(d1, d2);
            break;

        
    }

    // Update the output colour picker value.
    pickerColour3.value = Transform.DuffyToRGB(d3).toString();
}

// Element references.
let pickerColour1 = document.getElementById("colour1");
let pickerColour2 = document.getElementById("colour2");
let pickerColour3 = document.getElementById("colour3");
let buttonCalculate = document.getElementById("calculate");
let selectOperation = document.getElementById("operation");

// Calculate on button click.
buttonCalculate.addEventListener("click", calculate, false);
