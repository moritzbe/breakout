//Global Stuff


function distance(coords){
    var distance, finaldistance;
  if(coords.length >0) {
    var destination = new google.maps.LatLng(coords[coords.length-1].latitude, coords[coords.length-1].longitude)
    distance = google.maps.geometry.spherical.computeDistanceBetween(munich, destination)/1000;
    finaldistance = distance.toFixed(1).toString()+"km"
    console.log(finaldistance);
    return finaldistance;
  }
    finaldistance ="0km";
    return finaldistance;
  
}



//Upon Load
$(document).ready(function(){
"use strict";



  var munich = window.munich = new google.maps.LatLng(48.150487, 11.581243)
  var url = "/welcome/data";
  var teamarray = [];
  var Liveblog = window.Liveblog = function () {

  }

  Liveblog.prototype.drawMap = function(){
    var mapOptions = {
      center: new google.maps.LatLng(48.150487, 11.581243),
      zoom: 4,
      styles: styles,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
    };

    this.map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
  };

  Liveblog.prototype.getData = function(){
    var self = this;
      $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function(data) {
          data.forEach(function(dataItem) {
                var team = { 
                  teamnumber: dataItem.team.id,
                  teamname: dataItem.team.teamname,
                  teamcolor: dataItem.team.teamcolor,
                  distance: dataItem.positions[dataItem.positions.length-1].distance,
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
  };


  function initialize() {

    var map = liveblogInstance.map;
    var i;
    teamarray.forEach(function (team) {
      console.log(team);
      var coords = team.positions;
      var route = [munich];          
      //var bounds = new google.maps.LatLngBounds ();
      distance(coords);

      // map.fitBounds (bounds);

      for (i = 0; i < coords.length; i++) {
        route.push(new google.maps.LatLng(coords[i].latitude, coords[i].longitude));
        // bounds.extend (LatLngList[i]);
      
      }

      marker(coords, team, map);

      var flightPath = new google.maps.Polyline({
        path:route,
        strokeColor: team.teamcolor,
        strokeOpacity: 1.0,
        strokeWeight: 3
      });  
      flightPath.setMap(map); 
    }); 
};

  function marker(coords, team, map) {
    var marker;
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(coords[coords.length-1].latitude, coords[coords.length-1].longitude),
      // clickable: true,
      map: map
    });
 
    var infowindow = new google.maps.InfoWindow({
        content: makeContent(team)
    });
 
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }

  function makeContent(team) {
    var messages = "";
    for (var i = 0; i < team.positions.length; i++) {
      messages += "<p>"+team.positions[i].text+"</p>";
    }

    var contentstring = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">'+team.teamname+' - Team '+team.teamnumber+'</h4>'+
      '<p><b>'+team.player1+' and '+team.player2+', Distance: '+team.distance+'km</b></p>'+
      '<div>'+messages+

      '</div>';
    return contentstring;
  }


//-------------------------------------------------------------------
//Display Map
//Key=AIzaSyAq5jqy6DxgQBkk4KoTPgqEk2Pcwc0WfwE
  // var liveblogInstance = new Liveblog();
  // liveblogInstance.drawMap();
  // liveblogInstance.getData(initialize);

var styles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#DCC9A9"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#08304b"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-23"
            },
            {
                "lightness": "27"
            },
            {
                "visibility": "on"
            },
            {
                "gamma": "1"
            },
            {
                "hue": "#ce0058"
            },
            {
                "weight": "0.75"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e74c3c"
            },
            {
                "saturation": "-59"
            },
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff1800"
            },
            {
                "saturation": "2"
            },
            {
                "lightness": "2"
            },
            {
                "weight": "0.75"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-51"
            },
            {
                "color": "#cbcbcb"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#2c3e50"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#041e42"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#041e42"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#475777"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "weight": "1.00"
            },
            {
                "color": "#475777"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]


});

