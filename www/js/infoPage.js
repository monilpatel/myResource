$(document).ready(function(){
    $("core-item[label='Warning']").click(function(){
        $("#field").text("Warnings");
        $("#fieldText").text("This text is just a placeholder for actual warnings.");
    });
    $("core-item[label='Side Effects']").click(function() {
        $("#field").text("Side Effects");
        $("#fieldText").text("This text is just a placeholder for actual side effects.");
    });
});