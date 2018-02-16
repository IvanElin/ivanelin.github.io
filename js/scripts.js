// Smooth Scrolling
$(document).ready(function(){
  var scrollLink = $('.scroll');

  scrollLink.click(function(e) {
    var linkHref = $(this).attr('href');
    // console.log($(linkHref).offset().top);

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 1000);
    
    e.preventDefault();

  });
})