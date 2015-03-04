$(document).ready(function(){
"use strict";

setTimeout(function() {
  $('#login_alert').hide();
}, 3000);

  $("#twitter-button").click(function(){
    window.open('https://twitter.com/BreakoutMunchen','_blank');
  })

  $("#facebook-button").click(function(){
    window.open('https://www.facebook.com/breakoutmuenchen','_blank');
  })


  $("#homepage_button").click(function(){
    open('/liveblog', '_self',false);
  })

  $("#sign-up").click(function(){
    open('/register', '_self',false);
  })

  $(".social_button").hover(function() {
    $(this).css('cursor','pointer');
  }, function() {
    $(this).css('cursor','auto');
  });

  $("#liveblog-nav").click(function(){
    open('/liveblog', '_self',false);
  })

  $("#teams-nav").click(function(){
    open('/register', '_self',false);
  })

  $("#sponsor-nav").click(function(){
    open('/register', '_self',false);
  })

  $(".signup_button").click(function(e){
    e.preventDefault();    
    open('/register', '_self',false);
  })

  $(".onload").hide();

  $("#getLocation").on("click", function(){
    $(".onload").show();
  });

  $(".leaderboard").hide();


//works only once
  $("#dlead, #rlead").on("click", function() {
    $(".leaderboard").show();
    $("#specialbar").css("height", "150px");
    $("#arrow").css("bottom", "100px");
    $("#glyphicon").css("bottom", "90px");
      $("#dlead, #rlead").on("click", function() {
        $(".leaderboard").hide();
        $("#specialbar").css("height", "50px");
        $("#arrow").css("bottom", "0px");
        $("#glyphicon").css("bottom", "-10px");
      });
  });

  $("#glyphicon").on("click", function() {
    $(window).scrollTop($('#glyphicon').offset().top);
  });

  $('form input').keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });








  $(".clock").TimeCircles({
          start: true, // determines whether or not TimeCircles should start immediately.
    animation: "smooth", // smooth or ticks. The way the circles animate can be either a constant gradual rotating, slowly moving from one second to the other. 
    count_past_zero: true, // This option is only really useful for when counting down. What it does is either give you the option to stop the timer, or start counting up after you've hit the predefined date (or your stopwatch hits zero).
    circle_bg_color: "white", // determines the color of the background circle.
    use_background: true, // sets whether any background circle should be drawn at all. 
    fg_width: 0.1, //  sets the width of the foreground circle. 
    bg_width: 1.2, // sets the width of the backgroundground circle. 
    text_size: 0.07, // This option sets the font size of the text in the circles. 
    total_duration: "Auto", // This option can be set to change how much time will fill the largest visible circle.
    direction: "Clockwise", // "Clockwise", "Counter-clockwise" or "Both".
    use_top_frame: false,
    start_angle: 0, // This option can be set to change the starting point from which the circles will fill up. 
    time: { //  a group of options that allows you to control the options of each time unit independently.
    Days: {
    show: false,
    text: "Days",
    color: "#05ff0d"
    },
    Hours: {
    show: true,
    text: "Hours",
    color: "#05ff0d"
    },
    Minutes: {
    show: true,
    text: "Minutes",
    color: "#05f3ff"
    },
    Seconds: {
    show: true,
    text: "Seconds",
    color: "#ff05da"
    }
    }}
    ); 





});

