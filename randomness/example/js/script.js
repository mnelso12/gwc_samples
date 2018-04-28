$(document).ready(function(){ 
	console.log("Ready!");

	

	// this function is triggered when die roller button is clicked
	$("#roll_die_button").click(function() {

		// generate a random number between 1 and 6
		var random_number = Math.floor((Math.random() * 6) + 1);

		// display this random number in h1 element
		$("#number").text(random_number);
	});




	// this function is triggered when background color button is clicked
	$("#background_color_button").click(function() {
		
		// array of color options
		var colors = ["lightblue", "yellow", "red", "purple", "black", "slateblue"];
		// generate a random number between 0 and the length of your color list
		var random_number = Math.floor((Math.random() * colors.length));

		// get the color at the random index
		var random_color = colors[random_number]

		// set the background color to the random color
		$("body").css("background-color", random_color);
	});
});
