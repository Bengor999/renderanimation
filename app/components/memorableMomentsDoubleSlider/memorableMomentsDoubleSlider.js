



//sliderSwiperFeedback////



const swiper1 = new Swiper('.left-slider', {
  direction: 'vertical',
  loop: false,
  //центрируем слайд
  centeredSlides: true,
  //Индексный номер начального слайда
  initialSlide: 5,

  nested: true,


  // navigation: {
  //   nextEl: '.slider-video1-button-next',
  //   prevEl: '.slider-video1-button-prev',
  // },
  //количество слайдов на экране
  slidesPerView: 9,
  
  // pagination: {
  //   // el: value.nextElementSibling,
  //   el: '.slider-video1-pagination',
  //   clickable: true,
  // },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  updateOnWindowResize: true,
  // spaceBetween: 20,
  autoHeight: true,
  // breakpoints: {
  //     0: {
  //         spaceBetween: 20,
  //       },
  //     767: {
  //         spaceBetween: 20,
  //       }
  //     // 1280: {
  //     //     spaceBetween: 20,
  //     //   }
  // }
});

const swiper2 = new Swiper('.right-slider', {
  slidesPerView: 1,
  //центрируем слайд
  centeredSlides: true,
  //Индексный номер начального слайда
  initialSlide: 5,

  nested: true,

  
  // speed: 400,
  // spaceBetween: 50,
  direction: 'vertical',
  loop: false,
  // navigation: {
  //   nextEl: '.slider-video1-button-next',
  //   prevEl: '.slider-video1-button-prev',
  // },
  slidesPerView: 1.8,
  
  // pagination: {
  //   // el: value.nextElementSibling,
  //   el: '.slider-video1-pagination',
  //   clickable: true,
  // },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  updateOnWindowResize: true,
  // spaceBetween: 20,
  autoHeight: true,
  // breakpoints: {
  //     0: {
  //         spaceBetween: 20,
  //       },
  //     767: {
  //         spaceBetween: 20,
  //       }
  //     // 1280: {
  //     //     spaceBetween: 20,
  //     //   }
  // }
});


swiper1.controller.control = swiper2;
swiper2.controller.control = swiper1;


