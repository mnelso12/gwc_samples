$(document).ready(function(){ 
	// this will print "Ready!" to the console when the web page has loaded. Inspect element on the web page to see this text
	console.log("Ready!");

	// this function is triggered when the button is clicked
	$("#convert_button").click(function(){

		// this prints to the console
		console.log("convert button is clicked");

		// get the fahrenheit value from the input element
		var fahrenheit = $("#fahrenheit").val();

		// determine the celsius value with the equation
		var celsius = (fahrenheit - 32) / 1.8

		// display the celsius value on the web page
		$("#celsius").text(celsius.toFixed(2) + " degrees Celsius");

	});

});
