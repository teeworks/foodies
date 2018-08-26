alert("This Is A Preview Of My Work. ENJOY!!!---BABAYEMI SEGUN")
$(document).ready(function() {
   
    /*----------------------------*/
/* FOR STICKY NAV */
/*---------------------------*/

    $(".js--sectionfeatures").waypoint(function(direction) {
   if (direction == "down") {
       $("nav").addClass("sticky");
   } else {
       $("nav").removeClass("sticky");
   }
   }, {
       offset: "60px;"
});
    
    /*----------------------------*/
/*Scroll BUTTTONS */
/*---------------------------*/

   $(".js--scrolltoplan").click(function() {
   $("html, body").animate({scrollTop: $(".js--sectionplan").offset().top}, 1000);
  }); 
    
     $(".js--scrolltostart").click(function() {
   $("html, body").animate({scrollTop: $(".js--sectionfeatures").offset().top}, 1000);
  });
    
 
        /*----------------------------*/
/*Animation Naviga Scroll */
/*---------------------------*/
$(".js--wp1").waypoint(function(direction) {
    $(".js--wp1").addClass("animated fadeIn");
}, {
 offset: "50%"
})

    $(".js--wp2").waypoint(function(direction) {
    $(".js--wp2").addClass("animated fadeInUp");
}, {
 offset: "50%"
})

    $(".js--wp3").waypoint(function(direction) {
    $(".js--wp3").addClass("animated fadeIn");
}, {
 offset: "50%"
})

    $(".js--wp4").waypoint(function(direction) {
    $(".js--wp4").addClass("animated pulse");
}, {
 offset: "50%"
})

    /* mobile nav */
    $(".js--navicon").click(function() {
        var nav= $(".js--mainnav");
        var icon= $(".js--navicon i");
        nav.slideToggle(200);
        
        if(icon.hasClass("ion-ios-menu")) {
            icon.addClass("ion-ios-close");
            icon.removeClass("ion-ios-menu");
        }
        else {
            icon.addClass("ion-ios-menu");
            icon.removeClass("ion-ios-close");
        }
    })
    
    /*MAPS*/
   var map = new GMaps({
  div: '.map',
  lat: -12.043333,
  lng: -77.028333
});
    map.addMarker({
  lat: -12.043333,
  lng: -77.028333,
  title: 'Lima',
 infoWindow: {
  content: '<p>Our Lima Hq</p>'
}
});
    
});

