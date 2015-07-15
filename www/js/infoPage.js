$(document).ready(function(){
   

    
    $("core-item[label='Warning']").click(function(){
        $("#field").text("Warnings");
         display();
        //$("#fieldText").text("This text is just a placeholder for actual warnings.");
    });
    $("core-item[label='Side Effects']").click(function() {
        $("#field").text("Side Effects");
        $("#fieldText").text("This text is just a placeholder for actual side effects.");
    });
    
 
 //function to display drug list
 function display(){
     
     console.log("entering display");

        //get drug
     var specific_drug = JSON.parse(localStorage.getItem('drug'));
        
        
        
        //set counter
        var i = 0;
        //check drugs 
        if(specific_drug != null) {
            //loop through array and display
            $.each(specific_drug, function(key, value){
                $("#fieldText").text(specific_drug.brand);     
            });
    
        }
 }
    
});


  