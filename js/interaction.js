
/* -- ------------------------------------ --
   -- jQUERY FOR CAROUSEL INTERACTION  --
   -- --------------------------------- --- -- */


   $(document).ready(function() { 

      $('.carousel-indicators li a img').click(function() {
         let alt = $(this).attr('alt');
         $('.material-title').html(alt);
         $('.instruct-block-title').swap("Fluorescent Bulb", "alt");
       });

  });
 
//   $(".instruct-block-title").text(function () {
//    return $(this).text().replace("contains", "hello everyone"); 
// });​​​​​

function changeBlock1() {
   document.getElementById("div1").style.display="block";
   document.getElementById("div2").style.display="none";
   document.getElementById("div3").style.display="none";
   document.getElementById("div4").style.display="none";
   }

function changeBlock2() {
   document.getElementById("div1").style.display="none";
   document.getElementById("div2").style.display="block";
   document.getElementById("div3").style.display="none";
   document.getElementById("div4").style.display="none";
   }

function changeBlock3() {
   document.getElementById("div1").style.display="none";
   document.getElementById("div2").style.display="none";
   document.getElementById("div3").style.display="block";
   document.getElementById("div4").style.display="none";
   }

function changeBlock4() {
   document.getElementById("div1").style.display="none";
   document.getElementById("div2").style.display="none";
   document.getElementById("div3").style.display="none";
   document.getElementById("div4").style.display="block";
   }
   
   