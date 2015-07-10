$(document).ready(function() {
    
    /* We hide the information menu from the user before any search is done */
    $(".heading").hide();
    
    /* This function will handle the task of searching information from the openFDA API */
    var searchFDA = function() {
         /* Getting the wanted search term */
    	var toAdd = $("#searchValue").val();
        
        /* Grabbing data from the JSON on the SPL of the drug */
		var jqxhr = $.getJSON("https://api.fda.gov/drug/label.json?search=brand_name:"+toAdd, function(data) {
            var brand, generic, purpose;
            
            /* Checking if the information is in the JSON and then displaying it */
            
            /* Getting and dispaying brand name*/
			(data.results[0].openfda.brand_name) ? 
                brand = data.results[0].openfda.brand_name : brand = "No inormation found on brand name.";
            $("#brand_name").text(brand);
            
            /* Getting and displaying generic name */
            (data.results[0].openfda.generic_name) ? 
                generic = data.results[0].openfda.generic_name : generic = "No information found on generic name";
			
            $("#generic_name").text(generic);
            
            /* Getting and displaying purpose */
            (data.results[0].purpose) ? 
                purpose = data.results[0].purpose : purpose = "No information found on purpose.";
            $("#purpose").text(purpose);
            
            $(".heading").show();
		})
        /* This function will execute will tell the user the drug ins't found when no valid json is returned  */
        .fail(function(){
            document.querySelector('#errortoast').show();
        });
        
        /* Grabbing data from the JSON on the adverse events on the drug */
		$.getJSON("https://api.fda.gov/drug/event.json?search=brand_name:"+toAdd, function(data){
            var brands, activeIngredient;
            
            /* Checking if the brands array exists and intializing the brands variable */
            (data.results[0].patient.drug[0].openfda) ? 
                brands = data.results[0].patient.drug[0].openfda.brand_name[0] : brands = "No information found on other brands.";
            
            /* Grabbing up to 10 brand names and displaying them */
            var drugLength = data.results[0].patient.drug.length;
            var brandCount = 0;
            for (var j = 0; j < drugLength; j++) {
                if(data.results[0].patient.drug[j].openfda){
                    
                    var brandLength = data.results[0].patient.drug[j].openfda.brand_name.length
                    for (var i = 1; i < brandLength && brandCount < 10; i++) {
                        brands += ","+data.results[0].patient.drug[j].openfda.brand_name[i];
                        brandCount++;
                    }
                }
            }
            
            
            $("#other_brands").text(brands);
            
            /* Grabbing and displaying the information for active ingredients */
            (data.results[0].active_ingredient) ? 
                activeIngredient = data.results[0].active_ingredient : activeIngredient = "No information found on active ingredients.";
            
            $("#active_ingred").text(activeIngredient);
		}); 
        
        /* Third JSON request to get every single side effect and ranked by reported occurences with their reported counts */
        $.getJSON("https://api.fda.gov/drug/event.json?search=brand_name:"+ toAdd +"&count=patient.reaction.reactionmeddrapt.exact", 
                  function(data){
            var sideEffect;
            /* Grabbing the side-effects and then following four form the array */
            (data.results[0]) ? 
                sideEffect = data.results[0].term : sideEffect = "No information found on sideffects";
            
            for(var i = 1; i < data.results.length && i < 5 ; ++i) {
                sideEffect += ","+data.results[i].term;
            }
            
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

