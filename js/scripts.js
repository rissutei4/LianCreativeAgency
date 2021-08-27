$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],

    responsive:{
      0:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });

  //searchBar

  $(".wrapper").click(function(){
    $(this).toggleClass("active-pos");
    $(".searchbtn").toggleClass("bg");
    $(".fas").toggleClass("color-white");
    $(".input").focus().toggleClass("active-width").val('');
  });


    //tabs
  //alert('here');

  $('#tabs a').click(function(){

    $('.tab').hide();
    $('#tabs a.active').removeClass('active');
    $(this).addClass('active');

    var tab = $(this).attr('href');
    $(tab).fadeIn(1000);

    return false;  // prevents link action

  });  // end click

  $('#tabs li:first a').click();

});

