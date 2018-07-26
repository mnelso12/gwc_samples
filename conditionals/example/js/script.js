$(document).ready(function(){ 
	console.log("Ready!");


	// this function is triggered when the Generate madlib button is clicked
	$("#enter_button").click(function() {

		// get the values from each input
		var animal = $("#animal").val();
		var image_source = "";

		// determine what animal was inputted
		if (animal == "cat") {
			image_source = "images/cat.png";	
			$("#error_message").html("");
		} 
		else if (animal == "dog") {
			image_source = "images/dog.png";	
			$("#error_message").html("");
		}
		else {
			$("#error_message").html("Not a dog or a cat!");
		}


		// display the image in the img element 
		$("#animal_image").attr('src', image_source);

	});

});
