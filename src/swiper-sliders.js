import Swiper, { Navigation, Thumbs } from 'swiper';

Swiper.use([Navigation,Thumbs]);

import 'swiper/swiper.min.css';

// SLIDER COMMENTS
var swiperComment = new Swiper("#slider-comment .swiper-container", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    initialSlide: 1,
    watchOverflow: true,

    navigation: {
        nextEl: "#slider-comment .swiper-button-next",
        prevEl: "#slider-comment .swiper-button-prev",
    },

});

// SLIDER PRODUCT
var swiperProduct = new Swiper("#slider-product", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    initialSlide: 1,
    watchOverflow: true,

    navigation: {
        nextEl: "#slider-comment .swiper-button-next",
        prevEl: "#slider-comment .swiper-button-prev",
    },

});

// SLIDER RECENT VIEW
var swiperRecent = new Swiper("#slider-recent .swiper-container", {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 20,
    initialSlide: 1,
    watchOverflow: true,

    navigation: {
        nextEl: "#slider-recent .swiper-button-next",
        prevEl: "#slider-recent .swiper-button-prev",
    },
});

//slider str product -> photo product
var swiperThumb = new Swiper("#sliderThumb", {
    loop: false,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    spaceBetween: 20,
    initialSlide: 1,

    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 3,
        },
    },
});
var swiperBig = new Swiper("#sliderBig", {
    loop: false,
    slideToClickedSlide: true,
    thumbs: {
        swiper: swiperThumb,
    },
});

var swiperTwo = new Swiper(".one-block-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    initialSlide: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiperSmall1 = new Swiper(".block-slider-about", {
    loop: true,
    slidesPerView: 3,
    initialSlide: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiperSmall2 = new Swiper(".main-block-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});