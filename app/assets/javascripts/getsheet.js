$(document).ready(function(){
"use strict";
//xmlhttp requests not supported 

  $("p").on("click", function() {
    console.log("Hi");
    var url = "https://spreadsheets.google.com/feeds/list/0AqSzOiYE-wakdDU0TlpjdjFxX2szcEExZm15Q2lMdFE/od6/public/values";
    // var data = jQuery.getJSON(url);
    // console.log(data);
    jQuery.get(url, function(data){ console.log(data) });
  });



});

//sheet-key=0AqSzOiYE-wakdDU0TlpjdjFxX2szcEExZm15Q2lMdFE