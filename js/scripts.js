$(document).ready(function(){

  // Smooth Scrolling
  var scrollLink = $('.scroll');
  scrollLink.click(function(e) {
    e.preventDefault();
    var linkHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - $('.logo-nav').height()
    }, 1000);
  });
  
  $(window).scroll(function(){
    var scrollBarLocation = $(this).scrollTop() + 20;
    scrollLink.each(function(){

      var sectionOffset = $(this.hash).offset().top - $('.logo-nav').height();

      if( sectionOffset <= scrollBarLocation ) {
        $(this).addClass('selected');
        $(this).parent().siblings().children().removeClass('selected');
      }
    })  
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
});


$(window).resize(function () {
  var viewportWidth = $(window).width();
  if (viewportWidth <= 600) {
          $("#portfolio").removeClass("parallax--bg");
          $("#latest_news").removeClass("parallax--bg");
  }
});