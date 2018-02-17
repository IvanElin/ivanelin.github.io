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

  // Scroll-to-the-Top button
    // var offset = 450;
    // var duration = 500;

    // $(window).scroll(function(){
    //   if($(this).scrollTop < offset){
    //     $('#backToTop').fadeIn(duration);
    //   }else{
    //     $('#backToTop').fadeOut(duration);
    //   }
    // });


})

