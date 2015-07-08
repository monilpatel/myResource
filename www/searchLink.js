$(document).ready(function() {
    $(".heading").hide();
    var searchFDA = function() {
         /* Getting the wanted search term */
    	var toAdd = $("#searchValue").val();
        
        /* Grabbing data from the JSON on the SPL of the drug */
		$.getJSON("https://api.fda.gov/drug/label.json?search=brand_name:"+toAdd, function(data) {
            var brand, generic, purpose;
            /* Checking if the information is in the JSON and then displaying it */
			(data.results[0].openfda.brand_name) ? brand = data.results[0].openfda.brand_name : brand = "No inormation found on brand name.";
            $("#brandName").text(brand);
            
            (data.results[0].openfda.generic_name) ? generic = data.results[0].openfda.generic_name : generic = "No information found on generic name";
			$("#generic_name").text(generic);
            
            (data.results[0].purpose) ? purpose = data.results[0].purpose : purpose = "No information found on purpose.";
            $("#purpose").text(purpose);
            
            $(".heading").show();
            
		});
        
        /* Grabbing data from the JSON on the adverse events on te drug */
		$.getJSON("https://api.fda.gov/drug/event.json?search=brand_name:"+toAdd, function(data){
            var sideEffect;
            (data.results[0].patient.reaction[0].reactionmeddrapt) ? sideEffect = data.results[0].patient.reaction[0].reactionmeddrapt : sideEffect = "No information found on side effects.";
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

