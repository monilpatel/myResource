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
        //alert(nameKey);

        window.localStorage.setItem(nameKey, JSON.stringify(drug));
        

        //retrieve local storage by creating an array
        var keyNames = [];
        var values = [];
        var numKeys = localStorage.length;
        //iterate through array
        for(i = 0; i < numKeys; i++)
        {
            //get key name into an array
            keyNames[i] = localStorage.key(i);
            //alert(keyNames[i]);
            
            //use key name to retreive value and store in array
            values[i] = localStorage.getItem(keyNames[i]);
            //alert(values[i]);
        }
        //alert(keyNames[0]);
        
        //$('#results').html("Drugs: " + window.localStorage.getItem(drug));
        //document.getElementById("results").innerHTML = "Saved drugs: " + keyNames[0];

return true;

}