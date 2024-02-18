/* Declare and initialize global variables */
var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

/* Event handlers for range sliders */
for (var i = 0; i < sliders.length; i++) {
    sliders[i].onchange = function () {
        var whichSlider = this.getAttribute("id");
        var sliderValue = this.value;
        var newRgb = changeRgb(whichSlider, sliderValue); // STEP 1: Call the changeRgb function
        var newCSS = writeCSS(newRgb); // STEP 5: Call the writeCSS function
        pageBg.style.backgroundColor = newCSS;
    };
}

/* Functions */

// STEP 1: Write a function called changeRgb that accepts two parameters, channel and value
function changeRgb(channel, value) {
    // STEP 2: Build a switch based on the value of the channel parameter
    switch (channel) {
        case "red":
            rgb[0] = value; // STEP 3: Update the appropriate global rgb array element
            break;
        case "green":
            rgb[1] = value;
            break;
        case "blue":
            rgb[2] = value;
            break;
    }
    // STEP 4: Return the updated rgb array back to the event handler
    return rgb;
}

// STEP 5: Write a new function called writeCSS that accepts one parameter, the updated rgb array
function writeCSS(newRgb) {
    var newColor = 'rgb(';
 /* STEP 6: Declare a new local variable called newColor that will contain the new string that will be used to update the CSS 
//            background-color property in the following format: rgb(0,0,0) - initialize it with the start of the string, 'rgb(' */

    var i = 0;
 // STEP 7: Create a while loop that iterates through the array passed into this function, called newRgb (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

 while (i < newRgb.length) {
        newColor += newRgb[i];
        if (i < newRgb.length - 1) {
            newColor += ', ';
        }
        i++;
    }
   // STEP 9: Slice off the last comma from the string contained by the variable, newColor - we don’t need it (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
   newColor += ')';
    // STEP 11: Return the string newColor back to the event handler
    return newColor;
}
//         // STEP 12: Enjoy the application in your browser!

//         // This page inspired by https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values

