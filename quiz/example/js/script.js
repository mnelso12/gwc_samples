$(document).ready(function(){ 
	console.log("Ready!");

	var choices = {'setting': '', 'food': '', 'time': ''};

	$("img").click(function() {
		console.log("clicked image");	
		var chosen_id = $(this).attr('id');
		var chosen_class = $(this).attr('class');

		choices[chosen_class] = chosen_id;

		$("."+chosen_class).each( function() {
			if ( $(this).attr('id') != chosen_id ) {
				$(this).css('opacity', '0.5');
			}
			else {
				$(this).css('opacity', '1.0');
			}
		});
	});


	// this function is triggered when the enter button is clicked
	$("#enter_button").click(function() {
		var lizard_score = 0;
		var monkey_score = 0;
		var bear_score = 0;
		var pigeon_score = 0;

		// setting
		if (choices['setting'] == 'desert_image') {
			lizard_score += 1;
		}
		else if (choices['setting'] == 'rainforest_image') {
			monkey_score += 1;
		}
		else if (choices['setting'] == 'forest_image') {
			bear_score += 1;
		}
		else if (choices['setting'] == 'city_image') {
			pigeon_score += 1;
		}

		// food
		if (choices['food'] == 'cactus_image') {
			lizard_score += 1;
		}
		else if (choices['food'] == 'banana_image') {
			monkey_score += 1;
		}
		else if (choices['food'] == 'fish_image') {
			bear_score += 1;
		}
		else if (choices['food'] == 'crumbs_image') {
			pigeon_score += 1;
		}

		// time of day
		if (choices['time'] == 'night_image') {
			lizard_score += 1;
		}
		else if (choices['time'] == 'dusk_image') {
			monkey_score += 1;
		}
		else if (choices['time'] == 'noon_image') {
			bear_score += 1;
		}
		else if (choices['time'] == 'morning_image') {
			pigeon_score += 1;
		}

		// determine top score
		var top_score = Math.max(lizard_score, monkey_score, bear_score, pigeon_score);
		var top_animal = "";
		if (top_score == lizard_score) {
			top_animal = "lizard";	
		}
		else if (top_score == monkey_score) {
			top_animal = "monkey";	
		}
		else if (top_score == bear_score) {
			top_animal = "bear";	
		}
		else if (top_score == pigeon_score) {
			top_animal = "pigeon";	
		}

		// print new animal to HTML
		$("#result").html("Your spirit animal is... a " + top_animal + "!");

	});

});
