$(document).ready(function() {
    $("#searchBtn").click(function() {
    	var toAdd = $("#searchValue").val();
        $('p').remove();
		$.getJSON("https://api.fda.gov/drug/label.json?search=brand_name:"+toAdd, function(data) {
            
			$("#brand_name").append("<p>"+data.results[0].openfda.brand_name+"</p>");
			$("#generic_name").append("<p>"+data.results[0].openfda.generic_name+"</p>");
			$("#purpose").append("<p>"+data.results[0].purpose+"</p>");
		});
        
		$.getJSON("https://api.fda.gov/drug/event.json?search=brand_name:"+toAdd, function(data){
			$("#side_effects").append("<p>"+data.results[0].patient.reaction[0].reactionmeddrapt+"</p>");
		}); 
    });
});

