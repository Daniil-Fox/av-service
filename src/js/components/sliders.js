import {Swiper} from 'swiper'

import {Pagination, Navigation} from 'swiper/modules'

Swiper.use([Pagination, Navigation])

new Swiper('.works__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,
  pagination: {
    el: '.works__pagination'
  },
  navigation: {
    prevEl: '.works__btn--prev',
    nextEl: '.works__btn--next',
  }
})
