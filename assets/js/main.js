
const scrollbtn = document.querySelector('.scrol_btn')

window.addEventListener('scroll', () => {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    scrollbtn.style.display = 'block';
  }
  else{
    scrollbtn.style.display = 'none';
  }

})
scrollbtn.addEventListener('click' , () => {
  window.scroll({
    top: 0,
    behavior: "smooth"

  })

})


// --============--SCROll BTN END--============--

new Mmenu(document.querySelector('#menu'));

document.addEventListener('click', function (evnt) {
    var anchor = evnt.target.closest('a[href^="#/"]');
    if (anchor) {
        alert("Thank you for clicking, but that's a demo link.");
        evnt.preventDefault();
    }
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.menuSec').addClass("sticky");
        }
        else{
            $('.menuSec').removeClass("sticky");
        }

    });
});


// --============--Mmenu END--===============--

var typed3 = new Typed('.typing', {
    strings: ['Web-Designer','Developer'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,

  });
  
// --================--SMART TYPING --==============--

$(document).ready(function(){
	$('.seervices_Slick').slick({
		arrows: false,
		autoplay:false,
    dots: true,
		autoplaySpeed:600,
		slidesToShow: 2,
		centerMode: false,
		slidesToScroll: 1,
    // prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    // nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		  responsive: [
		  
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
		
	});


});


// --==================--GALLERY SLICK SLIDER END--===================--

$('.desktop_menu ul li a').click(function(){
  // applying again smooth scroll on menu items click
  $('html').css("scrollBehavior", "smooth");
});

// --===================--HTML SMOOTH END--====================--

new WOW().init();

// --===================--wow js--======-------=======--
(function($) {
  'use strict';

  $('.html').rProgressbar({
      percentage: 100,
      fillBackgroundColor: '#1abc9c'
  });
  $('.css').rProgressbar({
      percentage: 94,
      fillBackgroundColor: '#2ecc71'
  });


  $('.BOOTSTRAP').rProgressbar({
      percentage: 84,
      fillBackgroundColor: '#9b59b6'
  });


  $('.JAVASCRIPT').rProgressbar({
      percentage: 50,
      fillBackgroundColor: '#34495e'
  });


  $('.RESPONSIVE').rProgressbar({
      percentage: 100,
      fillBackgroundColor: '#f1c40f',
  });


})(jQuery);



$(document).ready(function(){
	$('.gallery_slick').slick({
		arrows: false,
		autoplay:false,
    dots: true,
		autoplaySpeed:600,
		slidesToShow:3,
		centerMode: false,
		slidesToScroll: 1,
    // prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    // nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		  responsive: [
		  
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
		
	});


});