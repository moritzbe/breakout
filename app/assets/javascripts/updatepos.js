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
      document.getElementById("latitude").innerHTML = update.latitude;
      document.getElementById("longitude").innerHTML = update.longitude;
      document.getElementById("distance").innerHTML = finaldistance;
      getAddress(update);     
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

  function postData() {
    $.ajax({
      type: "POST",
      url: url,
      dataType: "json",
      success: function(data) {
        data.forEach(function(dataItem) {
              var team = { 
                teamnumber: dataItem.team.id,
                teamname: dataItem.team.teamname,
                teamcolor: dataItem.team.teamcolor,
                player1: dataItem.players[0].prename,
                player2: dataItem.players[1].prename,
                messages: dataItem.messages,
                positions: dataItem.positions,
              };
              teamarray.push(team);
        });
        initialize();
      },
      error: function() {
         console.log(error);
      }
    });
  }









});