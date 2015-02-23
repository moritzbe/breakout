$(document).ready(function(){
"use strict";
//xmlhttp requests not supported 

var Tinder = window.Tinder || {};
  $(".getLocation").on("click", function() {
    console.log("Hi");
    geolocate();
  });

  $(".getAddress").on("click", function() {
    console.log("Hi");
    geolocate();
  });



});

//https://www.google.com.au/maps/preview/@-15.623037,18.388672,8z