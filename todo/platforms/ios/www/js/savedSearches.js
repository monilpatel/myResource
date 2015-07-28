function savedSearches(){
        var brandNm = document.getElementById("brand_name").innerHTML;
        
        var genericNm = document.getElementById("generic_name").innerHTML;
       
        
        var drugPurpose = document.getElementById("purpose").innerHTML;
        
        var effects = document.getElementById("side_effects").innerHTML;

        var active = document.getElementById("active_ingred").innerHTML;

        var altBrand = document.getElementById("other_brands").innerHTML;


     //creating object for given drug from retrieved from core collapses #1,2,3,4,5,6
        var drug = 
            {
                brand: brandNm,
                generic: genericNm,
                reason: drugPurpose,
                sideEffects: effects,
                ingredient: active,
                alternative: altBrand
            };
        
        var nameKey = $("#searchValue").val();
        alert(nameKey);

        window.localStorage.setItem(nameKey, JSON.stringify(drug));
        

       
        //alert(keyNames[0]);
        
        //$('#results').html("Drugs: " + window.localStorage.getItem(drug));
        //document.getElementById("results").innerHTML = "Saved drugs: " + keyNames[0];

return true;

}