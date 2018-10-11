$('#nice').delay(800 ).fadeIn("slow");
        $('#nb').delay(200 ).fadeIn("slow");
        $('#menu').delay(200 ).fadeIn("slow");
        $('body').delay(200).fadeIn("slow");
        $(function(){
  $('a.fadelink').on("click",function() {
    var url = $(this).attr('href');
    if (url != '') {
      $('body').fadeOut(200);
      setTimeout(function(){
        location.href = url;
      }, 800);
    }
    return false;
  });
});