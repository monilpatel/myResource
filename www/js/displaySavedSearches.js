 $(document).ready(function() {
    // Barcode scanner code commented out 
     
//      $('#barcodescanner').click(function(){
//       window.alert("ButtonClicked");
//       cordova.plugins.barcodeScanner.scan(
//       function (result) {
//           $.getJSON("https://api.fda.gov/drug/label.json?search=upc:"+result.text, function(){
//              /* $("#barMsg").text("We got a barcode\n" +
//                "Result: " + result.text + "\n" +
//                "Format: " + result.format + "\n");
//                document.querySelector('#bardialog').toggle();*/
//           },
//               .fail(function(){
//               alert("Hey it failed");
//               });
//           )
//      }, 
//      function (error) {
//          alert("Scanning failed: " + error);
//      })
//    });
//        
     // This is for activating the barcode scanning and then showing the user the data (it maybe rough as it was rushed)
     $('#barcodescanner').click(function(){
        
       window.alert("ButtonClicked");
       cordova.plugins.barcodeScanner.scan(
       function (result) {
           $.getJSON("https://api.fda.gov/drug/label.json?search=upc:"+result.text,function(data){
                $("#barMsg").text("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
           document.querySelector("#bardialog").toggle();
               $("barlink").attr("href","infopage.html?id="+data.results[0].openfda.brand_name);
           })
           .fail(function(){
               
              document.querySelector("#bardialogfail").toggle();

           });
           
          
           
          
      }, 
        
   );
         
    });
   // Click handler for the save drug button
    $('#saveBtn').click(function(e){
        addDrug(e);
        
    });
     
    // Enabling the save button after the user hits enter
    $(document).keypress(function(e) {
        if (e.which === 13) {
            enableBtn();
        }
    });
    // Click handler for the clear drugs button
   $('#clear_drugs').on('click', function(){
    document.querySelector('#dialog').toggle();
    var accept = document.getElementById("accept");
    $('#deleteMsg').text("Clear all drugs?");
       accept.onclick = function(){
        clearAllDrugs();  
       }
     });   
     
     
 
    
//remove drug event from list
$('#drug_table').on('click','#remove_drug', function(e){
    key = $(this).data('id');
    console.log("drug from list");
    //alert(key);
    //id equal to attribute in clear link
    document.querySelector('#dialog').toggle()
    var accept = document.getElementById("accept");
    $('#deleteMsg').text("Delete " + key +"?");
    accept.onclick = function(){
    
    removeDrug(key);
        
    }
    console.log("removing drug from list"); 
});
        
    
    $('#drug_table').on('click','#more_info', function(e){
   
    key = $(this).data('id');
        
    //alert(key);    
    console.log("drug from list");
    var check_storage = JSON.parse(localStorage.getItem('drug'));
      /* if(check_storage != null){
            localStorage.delete(drug);
            alert("erasing stored drug");
        }*/       
         
    moreInfo(key);
    console.log("retrieving more information"); 
    });
     
      displayDrugs();
     
       
    
    function moreInfo(id){
         var drugList = JSON.parse(localStorage.getItem('drugs')); 
        var specific_drug;
        
        //loop to make sure we have the correct drug name to delete
        for(var i=0; i < drugList.length; i++){
            if(drugList[i].id == id){
                //alert("found a match:" + drugList[i].brand); 
                specific_drug = drugList[i];
            }
            
        }
        localStorage.setItem('drug', JSON.stringify(specific_drug));
        console.log('drug is now specified');
       
    }

});