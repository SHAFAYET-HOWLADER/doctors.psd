//veno-box
$(document).ready(function(){
  $('.venobox').venobox(); 
});

// /stivky-menu
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 100){
     $(".main_menu").addClass("sticky")
  }
  else{
    $(".main_menu").removeClass("sticky")
 }
})

// wow.js
new WOW().init();

// banner-slider
$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows:false,
  autoplaySpeed: 2000,
  speed:2000,
});

//about-slider
$('.about-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows:false,
  autoplaySpeed: 2000,
  speed:2000,

    responsive: [
      {
        breakpoint: 991.99,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 575.99,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      }
    
    ]
  
});


// back-to-top
$(window).scroll(function(){
  var up = $(this).scrollTop();
  if(up < 100){
     $(".back-to-top").hide()
  }
  else{
    $(".back-to-top").show()
 }
})

//back-to-scroll
$(".back-to-top").click(function(){
 $("html,body").animate({scrollTop:0},3000
 )
 })


 		// smooth-scroller
     var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');

     if (document.querySelector('[data-easing]')) {
       var linear = new SmoothScroll('[data-easing="linear"]', {easing: 'linear'});

       var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});
       var easeInCubic = new SmoothScroll('[data-easing="easeInCubic"]', {easing: 'easeInCubic'});
       var easeInQuart = new SmoothScroll('[data-easing="easeInQuart"]', {easing: 'easeInQuart'});
       var easeInQuint = new SmoothScroll('[data-easing="easeInQuint"]', {easing: 'easeInQuint'});

       var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {easing: 'easeInOutQuad'});
       var easeInOutCubic = new SmoothScroll('[data-easing="easeInOutCubic"]', {easing: 'easeInOutCubic'});
       var easeInOutQuart = new SmoothScroll('[data-easing="easeInOutQuart"]', {easing: 'easeInOutQuart'});
       var easeInOutQuint = new SmoothScroll('[data-easing="easeInOutQuint"]', {easing: 'easeInOutQuint'});

       var easeOutQuad = new SmoothScroll('[data-easing="easeOutQuad"]', {easing: 'easeOutQuad'});
       var easeOutCubic = new SmoothScroll('[data-easing="easeOutCubic"]', {easing: 'easeOutCubic'});
       var easeOutQuart = new SmoothScroll('[data-easing="easeOutQuart"]', {easing: 'easeOutQuart'});
       var easeOutQuint = new SmoothScroll('[data-easing="easeOutQuint"]', {easing: 'easeOutQuint'});
     }