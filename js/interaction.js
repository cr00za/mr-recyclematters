
/* -- ------------------------------------ --
   -- jQUERY FOR CAROUSEL INTERACTION  --
   -- --------------------------------- --- -- */
   // $(document).ready(function(){

     

   //    if $("#caro-0").click(function(){
   //    $("material-title0").show();
   //    });
    
   //    // $("#show").click(function(){
   //    // $("material-title0").hide();
   //    // });

   // }); 

   $("varousel ul li ").click(function(e){
      e.preventDefault(); 
      showTitle();
});

function showTitle(){
      if ($('#caro-0').hasClass("active")) {
         $(".material-title0").show();
         $(".material-title1").hide();
         $(".material-title2").hide();
         $(".material-title3").hide();
      } else {$(".material-title0").hide();}

      if ($('#caro-1').hasClass("active")) {
         $(".material-title0").hide();
         $(".material-title1").show();
         $(".material-title2").hide();
         $(".material-title3").hide();
      } else {$(".material-title1").hide();}

      if ($('#caro-2').hasClass("active")) {
         $(".material-title0").hide();
         $(".material-title1").hide();
         $(".material-title2").show();
         $(".material-title3").hide();
      } else {(".material-title2").hide();}
      
      if ($('#caro-3').hasClass("active")) {
         $(".material-title0").hide();
         $(".material-title1").hide();
         $(".material-title2").hide();
         $(".material-title3").show();
      } else {$(".material-title3").hide();}

   };
   // });

// $(document).ready(function(){
//    if $("#carousel-selector-0").hasClass("active") {
//     $('.material-title0').removeClass("title-hide");
//    } else if $("#carousel-selector-1").hasClass("active") {
//     $('.material-title1').removeClass("title-hide");
//    } else if $("#carousel-selector-2").hasClass("active") {
//       $('.material-title2').removeClass("title-hide");
//    } else $("#carousel-selector-3").hasClass("active") {
//       $('.material-title3').removeClass("title-hide");
//    }

//    }); 
    

// $(document).ready(function(){
//    if $('#caro-0').clicked() {
//       $('#material-title0').removeClass('title-hide');
//    }
// });
   

// if ($('#caro-0').hasClass('active')) {
//    $('.material-title0').removeClass('title-hide').addClass('title-show');
//    $('.material-title1').addClass('title-hide');
//    $('.material-title2').addClass('title-hide');
//    $('.material-title3').addClass('title-hide');
//  };
 
//  if ($('#caro-1').hasClass('active')) {
//    $('.material-title1').removeClass('title-hide').addClass('title-show');
//    $('.material-title0').addClass('title-hide');
//    $('.material-title2').addClass('title-hide');
//    $('.material-title3').addClass('title-hide');
//  };
 
//  if ($('#caro-2').hasClass('active')) {
//    $('.material-title2').removeClass('title-hide').addClass('title-show');
//    $('.material-title0').addClass('title-show');
//    $('.material-title1').addClass('title-show');
//    $('.material-title2').addClass('title-show');
//  };
 
//  if ($('#caro-3').hasClass('active')) {
//    $('.material-title3').removeClass('title-hide').addClass('title-show');
//    $('.material-title0').addClass('title-hide');
//    $('.material-title1').addClass('title-hide');
//    $('.material-title2').addClass('title-hide');
//  }; 

// $(document).ready(function() {    
//    if ($("#caro-0").hasClass("active")) || $('#caro-0').click(function (e) {
//       $('.material-title0').addClass('title-show');
//       $('.material-title0').removeClass('title-hide');
//    } else if ($("#caro-1").hasClass("active")) {
//       $('.material-title0').addClass('title-hide');
//       $('.material-title1').addClass('title-show');
//       $('.material-title1').removeClass('title-hide');
//    };
// });

// $(document).ready(function(){

//    if $("#caro-0").hasClass("active") { 
//       $('#material-title0').removeClass('title-hide');
//      });
  

//  });



// $('#caro-0').click(function (e) {
//    $('.material-title0').removeClass('title-hide');
//  });

//  $('#caro-1').click(function (e) {
//    $('.material-title1').toggle('title-hide');
//  });
//  $('#caro-2').click(function (e) {
//    $('.material-title2').toggle('title-hide');
//  });
//  $('#caro-3').click(function (e) {
//    $('.material-title3').toggle('title-hide');
//  });
