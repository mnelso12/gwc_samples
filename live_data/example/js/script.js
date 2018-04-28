$(document).ready(function(){ 
	console.log("Ready!");

	$("#get_bus_times_button").click(function() {

		// get rid of existing table rows
		$("#bus_times_table tbody").html("");

		var bus_route_number = $("#bus_route_number").val();
		var bus_data_url = 'http://www.ctabustracker.com/bustime/api/v2/getvehicles?key=NJN9gei9v5tKH7xgXWmuicL2w&format=json&rt=' + bus_route_number;
	
		// ask CTA API for bus times data
		$.ajax({
			type: 'GET',
			url: bus_data_url,
			success: function(response_data) {
				displayBusTimes(response_data);
			},
			error: function() {
				alert("error");
			}
		});

	});

	// display bus times data with HTML
	function displayBusTimes(bus_times_data) {

		var vehicles = bus_times_data['bustime-response']['vehicle'];

		// loop through each bus from the CTA data
		for (var i=0; i<vehicles.length; i++) {

			// get data for this bus
			var bus_object = vehicles[i]; 
			var vehicle_id = bus_object['vid'];
			var latitude = bus_object['lat'];
			var longitude = bus_object['lon'];
			var delay = bus_object['dly'];

			// make a new data cells for table 
			var cell1 = '<td>' + vehicle_id + '</td>';
			var cell2 = '<td>' + latitude + '</td>';
			var cell3 = '<td>' + longitude + '</td>';
			var cell4 = '<td>' + delay + '</td>';

			// make a row out of the new table cells	
			var new_row = '<tr>' + cell1 + cell2 + cell3 + cell4 + '</tr>';

			// add this new row to our table
			$("#bus_times_table tbody").append(new_row);
		}
	}

});
