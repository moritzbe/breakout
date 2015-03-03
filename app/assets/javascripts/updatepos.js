$(document).ready(function(){
"use strict";

  var update = {};

  $("#getLocation").on("click", function() {
    if (navigator.geolocation) {
      console.log("Geolocation is supported!");
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
      var options = {enableHighAccuracy: true, maximumAge:30000, timeout: 60000};
      navigator.geolocation.watchPosition(onSuccess, onError, options); 
    };
  });
  

  function onSuccess(position) {
    update = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    var coords = [];
    coords.push(update);
    var finaldistance = distance(coords);
    var kmdistance = parseFloat(finaldistance.replace('km',''));
    console.log(kmdistance);
    $(".latitude").val(update.latitude);
    $(".longitude").val(update.longitude);
    $(".distance").val(kmdistance);
    $("#latitude").html(update.latitude);
    $("#longitude").html(update.longitude);
    $("#distance").html(finaldistance);



    document.getElementById("distance").innerHTML = finaldistance;
    getAddress(update);
    // postData();     
  }

  function getAddress(update){
    console.log(update)
    var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+update.latitude+","+update.longitude+"&sensor=true_or_false";
      $.ajax(url, {
      success: function(data) {
         console.log(data.results[0].formatted_address);
         var address = data.results[0].formatted_address;
         document.getElementById("address").innerHTML = address;
      },
      error: function() {
         console.log(error);
      }
    });
  }


  function onError(error){
    alert("Geolocation error: " + error);
  } 

  // function postData() {
  //   var dataTobeSent = {
  //     "position": {
  //       "longitude": 12.12,
  //       "latitude": 41.14
  //       }
  //   }
  //   console.log(dataTobeSent);
  //   $.ajax({
  //     type: "POST",
  //     url: "/update",
  //     data: dataTobeSent,
  //     dataType: "json",
  //     success: function(data) {
  //       console.log(data);
  //     },
  //     error: function(error) {
  //        console.log(error);
  //     }
  //   });
  // }









});