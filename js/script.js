$(document).ready(function() {
  $('.select').niceSelect();
});


$('.slider-popular').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: `<button class="slick-arrow slick-prev-p fas fa-chevron-left"></button>`,
  nextArrow: `<button class="slick-arrow slick-next-p fas fa-chevron-right"></button>`,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      }
    },

  ]
});


$('.slider-review').slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: `<button class="slick-arrow slick-prev-r fas fa-chevron-left"></button>`,
  nextArrow: `<button class="slick-arrow slick-next-r fas fa-chevron-right"></button>`,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        centerPadding: '30px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 769,
      settings: {
        centerPadding: '30px',
        slidesToShow: 2,
      }
    },

  ]
});


