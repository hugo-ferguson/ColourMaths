import { DuffySpace } from './modules/DuffySpace.js';
import { Transform } from './modules/Transform.js';
import { RGB } from './modules/RGB.js';

// Default values for operation and input colours.
let operation = "add";
let rgbColour1 = new RGB(0, 0, 0);
let rgbColour2 = new RGB(0, 0, 0);

/**
 * Calculate the selected operation for the two
 * selected colours, rgbColour1 and rgbColour2.
 */
function calculate() {
    // Update operation to selected value.
    operation = selectOperation.value;

    // Update the two RGB colours to the selected values
    // from the colour pickers.
    rgbColour1.fromString(pickerColour1.value);
    rgbColour2.fromString(pickerColour2.value);

    // Create a Duffy representation of the two RGB colours.
    let duffyColour1 = Transform.RGBToDuffy(rgbColour1);
    let duffyColour2 = Transform.RGBToDuffy(rgbColour2);
    let duffyColour3;

    // Perform the corresponding operation in DuffySpace for the
    // selected operation.
    switch(operation) {
        case "add":
            duffyColour3 = DuffySpace.add(duffyColour1, duffyColour2);
            break;
        case "mul":
            duffyColour3 = DuffySpace.mul(duffyColour1, duffyColour2);
            break;
        case "div":
            duffyColour3 = DuffySpace.div(duffyColour1, duffyColour2);
            break;
        case "sub":
            duffyColour3 = DuffySpace.sub(duffyColour1, duffyColour2);
            break;

        
    }

    // Update the output colour picker value.
    pickerColour3.value = Transform.DuffyToRGB(duffyColour3).toString();
}

// Element references.
let pickerColour1 = document.getElementById("colour1");
let pickerColour2 = document.getElementById("colour2");
let pickerColour3 = document.getElementById("colour3");
let buttonCalculate = document.getElementById("calculate");
let selectOperation = document.getElementById("operation");

// Calculate on button click.
buttonCalculate.addEventListener("click", calculate, false);