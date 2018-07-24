$(document).ready(function(){ 
	console.log("Ready!");


	// this function is triggered when the Generate madlib button is clicked
	$("#enter_button").click(function() {

		// get the values from each input
		var adj1 = $("#adj1").val();
		var adj2 = $("#adj2").val();
		var noun1 = $("#noun1").val();
		var noun2 = $("#noun2").val();
		var adv1 = $("#adv1").val();
		var verb1 = $("#verb1").val();

		// create each sentence
		var sentence1 = "Once upon a time, there was a really " + adj1 + " " + noun1 + ". "; 
		var sentence2 = "The " + noun2 + " " + verb1 + " " + adv1 + " in the park.";

		// put all the sentences together to create a madlib
		var madlib_text = sentence1 + sentence2;

		// display the madlib text in the result element 
		$("#result").text(madlib_text);
	});

});
