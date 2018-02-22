$(document).ready(function(){

  // Smooth Scrolling
  var scrollLink = $('.scroll');
  scrollLink.click(function(e) {
    var linkHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 1000);
  
    e.preventDefault();
  });


// HUMBURGER menu
// menu-toggle
  $('.menu-toggle').click(function(){
    $('.main-nav').toggleClass('is-open');
    $('.burger').toggleClass('is-open');
  });

  $('.main-nav_item').click(function(){
    $('.main-nav').toggleClass('is-open');
    $('.burger').toggleClass('is-open');
  })


})

