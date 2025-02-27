$(document).ready(function(){
    $('p').hover(function(){
        $('.menu').fadeIn('slow');
      }, function(){
        $('.menu').fadeOut('slow');
      });

      $("#fade").click(function(){
        $("img").fadeToggle(2000);
      })

      $("#slideup").click(function(){
        $("#f").slideToggle()
      })

      $("#animate").click(function(){

        $(".animate").animate({
          left: '500px',
          opacity: '0.5',
          height: '300px',
          width: '300px'
        })
      })
      var $images = $('.carousel img');
      var totalImages = $images.length;
      var currentIndex = 0;

      function showImage(index) {
          $images.removeClass('active');
          $images.eq(index).addClass('active');
      }

      $('#next').click(function() {
          currentIndex = (currentIndex + 1) % totalImages;
          showImage(currentIndex);
      });

      $('#prev').click(function() {
          currentIndex = (currentIndex - 1 + totalImages) % totalImages;
          showImage(currentIndex);
      });

})