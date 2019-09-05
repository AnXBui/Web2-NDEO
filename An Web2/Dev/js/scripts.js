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

function mouseClick() {

  console.log('mouseClick');
  if (isVisible === false) {
    $nav.show();
    $nav.toggleClass("nav-expanded");
    TweenMax.to($topLine, animationSpeed, {
      rotation: 45,
      y: 10
    });
    TweenMax.to($middleLine, animationSpeed, {
      alpha: 0,
      scaleX: 0
    });
    TweenMax.to($bottomLine, animationSpeed, {
      rotation: -45,
      y: -10
    });
    isVisible = true;

  } else {
    $nav.hide();
    $nav.toggleClass("nav-expanded");
    TweenMax.to($topLine, animationSpeed, {
      rotation: 0,
      y: 0
    });
    TweenMax.to($middleLine, animationSpeed, {
      alpha: 1,
      scaleX: 1
    });
    TweenMax.to($bottomLine, animationSpeed, {
      rotation: 0,
      y: 0
    });
    isVisible = false;

  }
}


$burger.on("click", mouseClick);
// close the mobile menu when menu link is clicked
$navA.on("click", mouseClick);

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
