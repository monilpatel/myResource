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
        
        .fail(function(){
            
            document.querySelector('#errortoast').show();
        });
        
        
        /* Grabbing data from the JSON on the adverse events on the drug */
		$.getJSON("https://api.fda.gov/drug/event.json?search=brand_name:"+toAdd, function(data){
            var brands, activeIngredient;
            (data.results[0].patient.drug[0].openfda.brand_name[0]) ? brands = data.results[0].patient.drug[0].openfda.brand_name[0] : brands = "No information found on other brands.";
            
            var length = data.results[0].patient.drug[0].openfda.brand_name.length;
            
            for (var i = 1; i < length && i < 10; ++i) {
                if (i === 10 || i === length) {
                    brands += data.results[0].patient.drug[0].openfda.brand_name[i];
                } else {
                    brands += ","+data.results[0].patient.drug[0].openfda.brand_name[i];
                }
            }
            
            $("#other_brands").text(brands);
            
            (data.results[0].active_ingredient) ? activeIngredient = data.results[0].active_ingredient : activeIngredient = "No information found on active ingredients.";
            $("#active_ingred").text(activeIngredient);
		}); 
        
        $.getJSON("https://api.fda.gov/drug/event.json?search="+ toAdd +"&count=patient.reaction.reactionmeddrapt.exact", function(data){
            var sideEffect;
            
            (data.results[0]) ? sideEffect = data.results[0].term : sideEffect = "No information found on sideffects";
            for(var i = 1; i < data.results.length && i < 5 ; ++i) {
                if (i===5 || i ===data.results.length) {
                    sideEffect += data.results[i].term;
                } else {
                    sideEffect += ","+data.results[i].term;
                }
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

