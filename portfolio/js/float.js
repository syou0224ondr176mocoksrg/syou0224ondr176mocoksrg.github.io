$('.syoukai').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.syoukai').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight - 50){
   $(this).addClass("fadeInDown");
  }
 });
});