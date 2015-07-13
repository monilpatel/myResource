function enableBtn(){
     document.getElementById("b").disabled = false;
    
    /* $('#searchBtn').on('click', function(e){
     document.getElementById("b").disabled = false;
     });*/

}

function savedSearches(){
  // document.getElementById("searchBtn").addEventListener("click", submitListener);

    /* $('#searchBtn').on('click', function(e){
       
      
         //submitListener();
        addDrug(e);
     });*/

    
        //MUST ADD VALIDATION FOR NUMBER OF CLICKS...
   // $('#b').on('click', function(e){
        
        addDrug();
        
  // });
        
    
 }
// displayDrugs();
    
        
        
    //function to display drug list
 window.onload =  function displayDrugs(){

        //get drugs
        var drugList = JSON.parse(localStorage.getItem('drugs'));
        //sort drugs by name
        if(drugList != null){
            drugList = drugList.sort(sortByName); 
        }
        
        
        //set counter
        var i = 0;
        //check drugs 
        if(drugList != null) {
            //loop through array and display
            $.each(drugList, function(key, value){
                $("#drug_table").append('<tr id= "' + value.id + '">'+ 
                '<td>' + value.id + '</td>' + 
                '<td><a href="a" id="remove-drug">Clear</a> | <a href="#" id="more_info">View Info</a></td>' +
                '</tr>');
                
              //  alert(value.brand);
                
            })
    
        }
          document.getElementById("b").disabled = true;
        document.getElementById("b").addEventListener("click", savedSearches);
        console.log('display drug');
    
    }
    
    
                  
                  
                  
                  
   //function to sort drug names 
    function sortByName(a,b){
        var aName = a.id;
        var bName = b.id;
        
        if(aName < bName){
            return -1;
        }
        
        if(aName > bName){
            return 1;    
        
        }else{
            return 0;    
        }
    }
                  
                  
  //functio to listen of save event listener
    function submitListener(){
  console.log("going into submit listener");      //document.getElementById("b").addEventListener("click", addDrug);
        
     $('#b').on('click', function(){
        addDrug();
     });
     document.getElementById("b").click = null;
    console.log("leaving submit");
    
    }
                  
                  
    //Function to add a drug save
    function addDrug(){
        
        //Add unique ID using drug name
        var id = $("#searchValue").val();
        
        //MUST add input validation later...
        
        var brandNm = document.getElementById("brand_name").innerHTML;
        alert(id);
        alert(brandNm);
        
        
        //Simple Validation
        if(id == ''){
            alert('drug name is required');
            e.preventDefault();
        } else{
            
            drugs = JSON.parse(localStorage.getItem('drugs'));
            
            //check for drugs
            if(drugs == null){
                drugs = [];
            }//add else statement to verify name has already 
            
            //variable reference to array
            var drugList = JSON.parse(localStorage.getItem('drugs'));
            
            //New drug object
            var new_drug = {
                "id" : id,
                "brand" : brandNm
            } 
            
            //add "new_drug" object of drug list array
            drugs.push(new_drug);
            
            //set the item to local storage
            localStorage.setItem('drugs', JSON.stringify(drugs));
            
            
            console.log('Drug Added');
            
            document.getElementById("b").disabled = true;
         
            console.log("button disabled");                
                    
        }
    }
     
 


    

    
    









/*function savedSearches(){
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

}*/