var $burger = $("#burger-icon");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;

function mouseClick() {

  console.log("click");
  if (isVisible === false) {
    $nav.show();
    isVisible = true;
  } else {
    $nav.hide();
    isVisible = false;
  }
}

$burger.on("click", mouseClick);
// close the mobile menu when menu link is clicked
$navA.on("click", mouseClick);



var $searchButton = $('#search-button');
var $searchTrigger = $('#search-trigger');
var searchVisible = false;


function searchBar() {
  console.log("click");
  if (searchVisible === false) {
    $searchButton.addClass("expanded");
    searchVisible = true;
  } else {
    $searchButton.removeClass("expanded");
    searchVisible = false;
  }
}

$searchTrigger.on("click", searchBar);
$navA.on("click", searchBar);


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



$(document).ready(function() {

  $('.donate-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    dots: true
  });
});

//scrollMagic-aboutcircle

// if (!is_touch_device()) {
//     // Start ScrollMagic code
//
//     var $circle = $('#about-circle');
//
//     var controller = new ScrollMagic();
//
//     var timeline = new TimelineMax();
//
//     var tween = TweenMax.to($circle, 1, {className: "+=circle-2"});
//     var tween2 = TweenMax.to($circle, 1, {className: "+=circle-3"});
//     var tween3 = TweenMax.to($circle, 1, {className: "+=circle-4"});
//     var tween4 = TweenMax.to($circle, 1, {className: "+=circle-5"});
//
//     var scene = new ScrollMagic.Scene({
//       triggerElement: "#about-circle-trigger"
//       duration: 1000px;
//     });
//
//     timeline.add(tween1).add(tween2).add(tween3).add(tween4);
//     scene.setTween(timeline)
//     scene.addTo(controller);
// }
// function is_touch_device() {
//   return 'ontouchstart' in window // works on most browsers
//       || 'onmsgesturechange' in window; // works on ie10
// };
$(function(){

var controller = new ScrollMagic.Controller({container: "#site-wrapper"});

var $container1 = $('#about-main');
var height1 = $container1.outerHeight();
var duration1 = height1;
var width1 = $container1.outerWidth();

function pepx(percentX){
  pixelX = width1 * percentX / 100;
  return pixelX;
}
function pepy(percentY){
  pixelY = height1 * percentY / 100;
  return pixelY;
}

var circlePath = [{x:pepx(70), y:pepy(27)}, {x:pepx(100), y:pepy(55)},{x:pepx(70), y:pepy(75)}, {x:pepx(10), y:pepy(90)}];

console.log(circlePath);

var tween = TweenMax.to('#about-circle', 0.5, {
   bezier:{curviness:1.25, values:circlePath, autoRotate:true},
   ease: Power1.easeOut,
   width: 100,
   height: 100,
   force3D:true,
   rotationZ:0.01   
 });

 // Create the Scene and trigger when visible
 var scene = new ScrollMagic.Scene({
   triggerElement: '#about-circle-trigger',
   offset: 300,
   duration: duration1 /* How many pixels to scroll / animate */
 })
 .setTween(tween)
 .addIndicators({name: height1})
 .addTo(controller);


 var timeline = new TimelineMax();

 var tween2 = TweenMax.to('#quote-text', 1, {
    opacity: 1,
    ease: Power1.easeOut
  });

  var tween1 = TweenMax.to('#quote-trigger', 0.5, {
     className:"+=expanded-quote"
   });

timeline.add(tween1).add(tween2);

 var scene2 = new ScrollMagic.Scene({
   triggerElement: '#quote-trigger',
   reverse: false,
 })
 .setTween(timeline)
 .addIndicators({name:'quote'})
 .addTo(controller);


 var parallaxTimeline = new TimelineMax();



 var parallax1 = TweenMax.fromTo('#events .main-content .p-layer-1', 1, {
   y: +100,
   ease: Linear.easeNone
 },
  {
    y: -100,
    ease: Linear.easeNone
  },0);

  var parallax2 = TweenMax.fromTo('#events .main-content .p-layer-2', 1, {
     y: +150,
     ease: Linear.easeNone
   },
   {
      y: -150,
      ease: Linear.easeNone
    },"-=1");

   var parallax3 = TweenMax.fromTo('#events .main-content .p-layer-3', 1, {
     y: +200,
     ease: Linear.easeNone
   },
    {
      y: -200,
      ease: Linear.easeNone
    },"-=1");



parallaxTimeline.add(parallax1).add(parallax2).add(parallax3);

 var parallaxScene = new ScrollMagic.Scene({
   triggerElement: '#parallax-trigger',
   duration: $('#events').outerHeight()

 })
 .setTween(parallaxTimeline)
 .addIndicators({name:'parallax'})
 .addTo(controller);


 // Add debug indicators fixed on right side
});
