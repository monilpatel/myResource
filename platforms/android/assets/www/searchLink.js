$(document).ready(function() {
    $(".heading").hide();
    var searchFDA = function() {
         /* Getting the wanted search term */
    	var toAdd = $("#searchValue").val();
        
        /* Grabbing data from the JSON on the SPL of the drug */
		$.getJSON("https://api.fda.gov/drug/label.json?search=brand_name:"+toAdd, function(data) {
			$("#brand_name").text(data.results[0].openfda.brand_name);
			$("#generic_name").text(data.results[0].openfda.generic_name);
            $("#purpose").text(data.results[0].purpose);
            $(".heading").show();
            
		});
        
        /* Grabbing data from the JSON on the adverse events on te drug */
		$.getJSON("https://api.fda.gov/drug/event.json?search=brand_name:"+toAdd, function(data){
			$("#side_effects").text(data.results[0].patient.reaction[0].reactionmeddrapt);
		}); 
    }
    $("#searchBtn").click(function() {
       searchFDA();
    });
    
    $(document).keypress(function(event) {
        if (event.which === 13) {
            searchFDA();
        }
    });
});

