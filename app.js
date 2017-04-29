$(".number,.operator").click(function(){
    var value = $(this).attr("value");
        $("#result-field").attr("value", function(i, origValue){
            return origValue += value; 
    });
});
$("#executer").click(function(){
  var result = eval($("#result-field").attr("value"));
  $("#result-field").attr("value",result);
});
$("#clear").click(function(){
  $("#result-field").attr("value","");
});
