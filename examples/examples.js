$(function(){


var data = ["#","#Hello","#koi","#moi"];

$("select.first").hide();

$("select.first").change(function(){
console.log("selected");
$("textarea.first").val( $("textarea.first").val() + $("select.first").val().substr(1));
});
$("textarea.first").keypress(function(e){
setTimeout(function(){
var value = e.currentTarget.value;
if(value.lastIndexOf("#")>-1){
$("select.first").html("");
data.forEach(function(el){
$("select.first").append("<option>"+el+"</option>");
});

$("select.first").show();
}
console.log(e.currentTarget.value );
},0);
});
});
