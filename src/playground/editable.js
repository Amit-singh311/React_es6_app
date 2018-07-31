
var editor = document.getElementById("editor");
editor.isContentEditable;
editor.contentEditable = true;
/*document.designMode = 'on';
/*var mode = document.designMode;*/
/*document.designMode = "on";*/
$(document).ready(function(argument) {
 $('#save').click(function(){
 // Get edit field value
 $edit = $('#editor').html();
 $.ajax({
 url: 'get.php',
 type: 'post',
 data: {data: $edit},
 datatype: 'html',
 success: function(rsp){
 alert(rsp);
 }
 });
 });
 });
