$('#nice').delay(800 ).fadeIn("slow");
        $('#nb').delay(1000 ).fadeIn("slow");
        $('#menu').delay(1000 ).fadeIn("slow");
        $(function(){
  $('a.fadelink').on("click",function() {
    var url = $(this).attr('href');
    if (url != '') {
      $('body').fadeOut(800);
      setTimeout(function(){
        location.href = url;
      }, 800);
    }
    return false;
  });
});