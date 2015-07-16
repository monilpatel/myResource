 $(document).ready(function() {
          
    $(document).keypress(function(e) {
        if (e.which === 13) {
            enableBtn();
        }
    });
     
   $('#clear_drugs').on('click', function(){
        clearAllDrugs();  
     });   
 
      
$('#drug_table').on('click','#more_info', function(e){
    key = $(this).data('id');
    moreInfo(key);
    window.open("infoPage.html");
});
    
    
//remove drug event from list
$('#drug_table').on('click','#remove_drug', function(e){
    key = $(this).data('id');
    console.log("drug from list");
    alert(key);
    //id equal to attribute in clear link
    removeDrug(key);
    console.log("removing drug from list"); 
});
     
     
      displayDrugs();

});

   