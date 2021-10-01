// import Swiper, { Navigation } from 'swiper';
// Swiper.use([Navigation]);

import Swiper from 'swiper/bundle';

const galleryTop = new Swiper('.galleryTop', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  // controller: {
  //   control: galleryThumbs,
  // }
});
const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 4,
  // controller: {
  //   control: galleryTop,
  // }
});
/*
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;  */