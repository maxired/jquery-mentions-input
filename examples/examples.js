$(function(){
$("textarea.first").keypress(function(e){
setTimeout(function(){
var value = e.currentTarget.value;
if(value.lastIndexOf("#")>-1){
alert("toto");
}
console.log(e.currentTarget.value );
},0);
});
});
