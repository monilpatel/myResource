$(document).ready(function() {
    $(".heading").hide();
    var searchFDA = function() {
         /* 'Cleaning out' the old information and getting the wanted search term */
        $('p').remove();
    	var toAdd = $("#searchValue").val();
        
        /* Grabbing data from the JSON on the SPL of the drug */
		$.getJSON("https://api.fda.gov/drug/label.json?search=brand_name:"+toAdd, function(data) {
			$("#brand_name").append("<p>"+data.results[0].openfda.brand_name+"</p>");
			$("#generic_name").append("<p>"+data.results[0].openfda.generic_name+"</p>");
            $("#purpose").append("<p>"+data.results[0].purpose+"</p>");
            $(".heading").show();
		});
        
        /* Grabbingdata from the JSON on the adverse events on te drug */
		$.getJSON("https://api.fda.gov/drug/event.json?search=brand_name:"+toAdd, function(data){
			$("#side_effects").append("<p>"+data.results[0].patient.reaction[0].reactionmeddrapt+"</p>");
       
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

