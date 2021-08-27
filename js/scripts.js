$(document).ready(function(){

  //sticky navbar
  window.onscroll = () => {
    var header  = document.querySelector('header');

    if (window.pageYOffset > 0) {
      header.classList.add("sticky")
    }
    else {
      header.classList.remove("sticky");
    }
  }

  //owl-carousel
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
//Pop Up Images
const buttons = document.querySelectorAll('.galleryPic');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
}

function close() {
  overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);
