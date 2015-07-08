$(document).ready(function() {
    $(".heading").hide();
    var searchFDA = function() {
         /* Getting the wanted search term */
    	var toAdd = $("#searchValue").val();
        
        /* Grabbing data from the JSON on the SPL of the drug */
		var jqxhr = $.getJSON("https://api.fda.gov/drug/label.json?search=brand_name:"+toAdd, function(data) {
            var brand, generic, purpose;
            
            /* Checking if the information is in the JSON and then displaying it */
            
            /* Getting and dispaying brand name*/
			(data.results[0].openfda.brand_name) ? brand = data.results[0].openfda.brand_name : brand = "No inormation found on brand name.";
            $("#brand_name").text(brand);
            
            /* Getting and displaying generic name */
            (data.results[0].openfda.generic_name) ? generic = data.results[0].openfda.generic_name : generic = "No information found on generic name";
			$("#generic_name").text(generic);
            
            /* Getting and displaying purpose */
            (data.results[0].purpose) ? purpose = data.results[0].purpose : purpose = "No information found on purpose.";
            $("#purpose").text(purpose);
            
            $(".heading").show();
            
		})
        
        .fail(function(){
            
            document.querySelector('#errortoast').show();
        });
        
        
        /* Grabbing data from the JSON on the adverse events on the drug */
		$.getJSON("https://api.fda.gov/drug/event.json?search=brand_name:"+toAdd, function(data){
            var sideEffect;
            
            /* Getting and displaying Side Effects */
            (data.results[0].patient.reaction[0].reactionmeddrapt) ? sideEffect = data.results[0].patient.reaction[0].reactionmeddrapt : sideEffect = "No information found on side effects.";
			$("#side_effects").text(sideEffect);
		}); 
    }
    /* The two ways for the user to prompt a search : clicking the search button or hitting enter */
    $("#searchBtn").click(function() {
       searchFDA();
    });
    
    $(document).keypress(function(event) {
        if (event.which === 13) {
            searchFDA();
        }
    });
});

