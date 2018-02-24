$(document).ready(function(){

  // Smooth Scrolling
  var scrollLink = $('.scroll');
  scrollLink.click(function(e) {
    e.preventDefault();
    var linkHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - $('.logo-nav').height()
    }, 1000);
  
    $(window).scroll(function(){
      var scrollBarLocation = $(this).scrollTop;
      console.log(scrollBarLocation);
      // scrollLink.each(function(){
      //   var sectionOffset = $(this.hash).offset().top;
      //     console.log(sectionOffset);
      //   if ( sectionOffset <= scrollBarLocation ){
      //     $(this).addClass('.selected');
      //   }
      // })
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
})

