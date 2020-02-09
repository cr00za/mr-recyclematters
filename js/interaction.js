
/* -- ------------------------------------ --
   -- jQUERY FOR CAROUSEL INTERACTION  --
   -- --------------------------------- --- -- */

// $(document).ready(function(){
//    if $("#carousel-selector-0").hasClass("active") {
//     $( 'material-title0' ).addClass("title-show");
//    } else if $("#carousel-selector-1").hasClass("active") {
//     $('material-title1').removeClass("title-hide");
//    } else if $("#carousel-selector-2").hasClass("active") {
//       $('material-title2').removeClass("title-hide");
//    } else $("#carousel-selector-3").hasClass("active") {
//       $('material-title3').removeClass("title-hide");
//    }

//    }); 
    

$(document).ready(function(){
   if $('#caro-0').clicked() {
      $('#material-title0').removeClass('title-hide');
   }
});
      
 
