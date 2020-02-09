
/* -- ------------------------------------ --
   -- jQUERY FOR CAROUSEL INTERACTION  --
   -- --------------------------------- --- -- */


   $(document).ready(function() { 

      $('.carousel-indicators li a img').click(function() {
         let alt = $(this).attr('alt');
         $('.material-title').html(alt);
         $('.instruct-block-title').replace("Fluorescent Bulb", "alt");
       });

  });
 
//   $(".instruct-block-title").text(function () {
//    return $(this).text().replace("contains", "hello everyone"); 
// });​​​​​