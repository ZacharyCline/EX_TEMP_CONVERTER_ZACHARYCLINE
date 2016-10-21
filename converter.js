
// In the HTML, have one input field where someone can enter in a temperature.


// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.

// Create a block level element that will hold the text of the converted temperature.

// Create a button that, when clicked, displays the converted temperature.

// Create another button that, when clicked, clears any text in the input field.

// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.

// If the temperature is greater than 90F/32C the color of the converted temperature should be red.

// If the temperature is less than 32F/0C the color of the converted temperature should be blue.

// For any other temperature, the color should be green.


// Html ELEMENTS		ID
// input field			input
// radio button		f
// radio button		c
// submit button		submit
// clear button		clear
//div output			output





var submit = document.getElementById("submit");





// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (input) {
	
	var f = document.getElementById("f");
	var c = document.getElementById("c");
	
	if (f.checked) {
		toFahrenheit(input);
	} else if (c.checked) {
		toCelsius(input);
	} else {
		alert("Something is Jacked UP!");
	}

	//console.log(f, c);
  //console.log("event", clickEvent);
}

function toCelsius (input) {
	var outputC = (input - 32) / 1.8;
	//console.log("celsius ", input);
	outputToDom(outputC, "c");

}

function toFahrenheit (input) {
	var outputF = (input * 1.8) + 32;
	//console.log("fahrenheit ", input);
	outputToDom(outputF, "f" );

}

function getInput (input) {
	//console.log("is this running?", input);
}
function checkInput () {
	var input = document.getElementById("input").value;
	//console.log(input.value)
	if (input) {
		determineConverter(input);
	} else {
		alert("No input!");
	}
 }

function outputToDom (outputTemp, type) {
	//console.log("Color Text", outputTemp.toFixed(1), type);
	var output = document.getElementById("output");


	if (type === "c") {
		if (outputTemp > 32){
		output.innerHTML = "<p class= 'red'>" + outputTemp.toFixed(1) +"</p>";
		} else if (outputTemp < 0){
		output.innerHTML = "<p class= 'blue'>" + outputTemp.toFixed(1) +"</p>";
		}else {
		output.innerHTML = "<p class= 'green'>" + outputTemp.toFixed(1) +"</p>";
		}


	} else{
		if (outputTemp > 90){
		output.innerHTML = "<p class= 'red'>" + outputTemp.toFixed(1) + "</p>";
		} else if (outputTemp < 32){
		output.innerHTML = "<p class= 'blue'>" + outputTemp.toFixed(1) + "</p>";
		}else {
		output.innerHTML = "<p class= 'green'>" + outputTemp.toFixed(1) + "</p>";
		}
	}
}
function resetForm () {
	var clear = document.getElementById("clear");
	document.getElementById("Main").reset();
	





	//need something passed from the outputToDom function and set equal to ""
	

	// console.log("Reset Form", ;

}
// Assign a function to be executed when the button is clicked
submit.addEventListener("click", checkInput);
clear.addEventListener("click", resetForm);














