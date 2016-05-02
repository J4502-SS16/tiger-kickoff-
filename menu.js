$(document).ready(function(){
  $ (".menu-trigger").click(function(){
    $("#nav").slideToggle();
  });
  $(window).resize(function(){
    if($(window).width() > 700){
      $("#nav").removeAttr("style");
        }
  });
  $(window).resize(function() {
    if($(window).width()<700) {
      $("#nav").slideUp();
    }
  })
});
