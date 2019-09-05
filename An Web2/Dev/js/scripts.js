var $burger = $("#burger-container");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;
var $topLine = $('#burger-container div:nth-child(1)');
var $middleLine = $('#burger-container div:nth-child(2)');
var $bottomLine = $('#burger-container div:nth-child(3)');
var animationSpeed = 0.25;

var $searchButton = $('#search-button');
var $searchTrigger = $('#search-trigger');
var searchVisible = false;

// ============================ //
//         MENU + BURGER        //
// ============================ //

// You may change this number if you want to increase or decrease the speed of your navigation animtion
var speedOfAnimation = 0.4;
var $burger = $("#burger-icon");
var $offCanvas = $('#off-canvas-container');
var isVisible = false;
var $main = $('main');
var leftOrRight;
var $fixedItem = $("[data-fixed=fixed-item]");


//console.log($($offCanvas).width());
//console.log($($offCanvas).data("navigation-slide"));

// check for window resize to make sure the navigation stays off the view when closed
$(window).resize(function() {

    //console.log($($offCanvas).width() + "width of canvas");

    // check to see if the menu is isVisible
    if (isVisible === false) {
        // check to see if the menu should be move off to the left or right
        if ($($offCanvas).data("navigation-position") === 'left') {
            if ($($offCanvas).data("navigation-slide") === "over" || $($offCanvas).data("navigation-slide") === "push") {
                // move the off canvas off the view import
                TweenMax.set($offCanvas, {
                    x: -$($offCanvas).width()
                });
            }
            leftOrRight = "left";
        } else {
            if ($($offCanvas).data("navigation-slide") === "over" || $($offCanvas).data("navigation-slide") === "push") {
                // move the off canvas off the view import
                TweenMax.set($offCanvas, {
                    x: $($offCanvas).width()
                });
            }
            leftOrRight = "right";
        }
    } else {
        // makde sure the content offset is the same as the width of the navigation
        if ($($offCanvas).data("navigation-slide") === "over" || $($offCanvas).data("navigation-slide") === "push") {
            if($($offCanvas).data("navigation-position") === 'left'){
                TweenMax.to($main, speedOfAnimation, {
                    x: $($offCanvas).width()
                });
            }
            else{
                TweenMax.to($main, speedOfAnimation, {
                    x: -$($offCanvas).width()
                });
            }
        }
    }
});

// this is for when the page loads to make sure the menu is out of view
// check to see if the menu should be move off to the left or right
if ($($offCanvas).data("navigation-position") === 'left') {
    // chceck to see if its over or under
    if ($($offCanvas).data("navigation-slide") === "over" || $($offCanvas).data("navigation-slide") === "push") {
        // move the off canvas off the view import
        TweenMax.set($offCanvas, {
            x: -$($offCanvas).width()
        });
    }
    leftOrRight = "left";
} else {
    if ($($offCanvas).data("navigation-slide") === "over" || $($offCanvas).data("navigation-slide") === "push") {
        // move the off canvas off the view import
        TweenMax.set($offCanvas, {
            x: $($offCanvas).width()
        });
    }
    leftOrRight = "right";
}


function openCloseMenu() {
    // OPEN
    if (isVisible === false) {

        //console.log(leftOrRight);
        //check to see if its left or right
        if (leftOrRight === "left") {
            // if the navigation slide doesn't equal push slide the main tag
            if ($($offCanvas).data("navigation-slide") === "push" || $($offCanvas).data("navigation-slide") === "under") {
                //slide over the website Content
                TweenMax.to($main, speedOfAnimation, {x: $($offCanvas).width()});
                // slide over the fixed item
                TweenMax.to($fixedItem, speedOfAnimation, {x: $($offCanvas).width()});
                // fade out $burger
                TweenMax.to($burger, speedOfAnimation, {alpha:0});

            }
        } else {
            if ($($offCanvas).data("navigation-slide") === "push" || $($offCanvas).data("navigation-slide") === "under") {
                //slide over the website Content
                TweenMax.to($main, speedOfAnimation, {x: -$($offCanvas).width()});
                // slide over the fixed item
                TweenMax.to($fixedItem, speedOfAnimation, {x: -$($offCanvas).width()});
                // fade out $burger
                TweenMax.to($burger, speedOfAnimation, {alpha:0});

            }
        }

        if ($($offCanvas).data("navigation-slide") === "over" || $($offCanvas).data("navigation-slide") === "push") {
            //slide over the website Content
            TweenMax.to($offCanvas, speedOfAnimation, {x: 0});
        }

        //add the overlay
        $("#overlay").addClass("is-visible");
        isVisible = true;
    }
    // CLOSE
    else {
        //check to see if its left or right
        if (leftOrRight === "left") {
            if ($($offCanvas).data("navigation-slide") === "over" || $($offCanvas).data("navigation-slide") === "push") {
                //slide over the website Content
                TweenMax.to($offCanvas, speedOfAnimation, {x: -$($offCanvas).width()});
            }
        } else {
            if ($($offCanvas).data("navigation-slide") === "over" || $($offCanvas).data("navigation-slide") === "push") {
                //slide over the website Content
                TweenMax.to($offCanvas, speedOfAnimation, {x: $($offCanvas).width()});
            }
        }

        //slide back the website Content
        TweenMax.to($main, speedOfAnimation, {x: 0});
        // slide over the fixed item
        TweenMax.to($fixedItem, speedOfAnimation, {x: 0});
        // fade in $burger
        TweenMax.to($burger, speedOfAnimation, {alpha:1});

        //remove the overlay
        $("#overlay").removeClass("is-visible");
        isVisible = false;
    }
}
// open or close the menu with the burger is tapped / click
$burger.on("click", openCloseMenu);
// close the mobile menu when menu links are tapped / click
$("nav[data-nav='main-navigation'] a").on("click", openCloseMenu);
// close the mobile menu when the close link is tapped / click
$("#close-btn").on("click", openCloseMenu);
// close the mobile menu when the overlay link is tapped / click
$("#overlay").on("click", openCloseMenu);

// ============================ //
//              END             //
// ============================ //



// ============================ //
//         CONTACT FORM         //
// ============================ //


var $contactForm = $('#contact-form');
var $formTrigger = $('#form-trigger');
var $formExit = $('#form-close-button');
var formVisible = false;


function formToggle() {
  console.log("click");
  if (formVisible === false) {
    $contactForm.toggleClass("form-expanded");
    formVisible = true;
  } else {
    $contactForm.toggleClass("form-expanded");
    formVisible = false;
  }
}

$formTrigger.on("click", formToggle);
$formExit.on("click", formToggle);

// ============================ //
//              END             //
// ============================ //



// ============================ //
//        SCROLL-EFFECTS        //
// ============================ //


$(document).ready(function() {

  $('.donate-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    dots: true
  });
});


$(function() {

  var controller = new ScrollMagic.Controller({container:'#site-wrapper'});

  var $container1 = $('#about-main');
  var height1 = $container1.innerHeight();
  var duration1 = height1;
  var width1 = $container1.innerWidth();

  function pepx(percentX) {
    pixelX = width1 * percentX / 100;
    return pixelX;
  }

  function pepy(percentY) {
    pixelY = height1 * percentY / 100;
    return pixelY;
  }

  var circlePath = [{
    x: pepx(70),
    y: pepy(27)
  }, {
    x: pepx(100),
    y: pepy(55)
  }, {
    x: pepx(70),
    y: pepy(75)
  }, {
    x: pepx(10),
    y: pepy(90)
  }];

  console.log(circlePath);

  var tween = TweenMax.to('#about-circle', 0.5, {
    bezier: {
      curviness: 1.25,
      values: circlePath
    },
    ease: Power2.easeOut,
    width: 200,
    height: 200,
    force3D: true,
    autoRound: false,
  });

  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
      triggerElement: '#about-circle-trigger',
      offset: 300,
      duration: duration1 /* How many pixels to scroll / animate */
    })
    .setTween(tween)
    .addIndicators({
      name: height1
    })
    .addTo(controller);


  var timeline = new TimelineMax();

  var tween2 = TweenMax.to('#quote-text', 1, {
    opacity: 1,
    ease: Power1.easeOut
  });

  var tween1 = TweenMax.to('#quote-trigger', 0.5, {
    className: "+=expanded-quote"
  });

  timeline.add(tween1).add(tween2);

  var scene2 = new ScrollMagic.Scene({
      triggerElement: '#quote-trigger',
      reverse: false,
    })
    .setTween(timeline)
    .addIndicators({
      name: 'quote'
    })
    .addTo(controller);


  var parallaxTimeline = new TimelineMax();



  var parallax1 = TweenMax.fromTo('#events .main-content .p-layer-1', 1, {
    y: +100,
    ease: Linear.easeNone
  }, {
    y: -100,
    ease: Linear.easeNone
  }, 0);

  var parallax2 = TweenMax.fromTo('#events .main-content .p-layer-2', 1, {
    y: +150,
    ease: Linear.easeNone
  }, {
    y: -150,
    ease: Linear.easeNone
  }, "-=1");

  var parallax3 = TweenMax.fromTo('#events .main-content .p-layer-3', 1, {
    y: +200,
    ease: Linear.easeNone
  }, {
    y: -200,
    ease: Linear.easeNone
  }, "-=1");



  parallaxTimeline.add(parallax1).add(parallax2).add(parallax3);

  var parallaxScene = new ScrollMagic.Scene({
      triggerElement: '#parallax-trigger',
      duration: $('#events').outerHeight()

    })
    .setTween(parallaxTimeline)
    .addIndicators({
      name: 'parallax'
    })
    .addTo(controller);

});
// ============================ //
//              END             //
// ============================ //


// ============================ //
//             VIDEO            //
// ============================ //

$(document).ready(function() {
  console.log("fire");
  $('#video-back').vidbacking({
    'masked': true
  });
});

// ============================ //
//              END             //
// ============================ //
