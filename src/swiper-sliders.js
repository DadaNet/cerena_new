import Swiper, { Navigation, Thumbs, Pagination } from 'swiper';

Swiper.use([Navigation,Thumbs,Pagination]);

import 'swiper/swiper.min.css';

// SLIDER Product
var swiperProduct = new Swiper("#slider-product .swiper-container", {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 20,
    initialSlide: 1,
    watchOverflow: true,

    navigation: {
        nextEl: "#slider-product .swiper-button-next",
        prevEl: "#slider-product .swiper-button-prev",
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


// Slider on main page
var swiperMain = new Swiper("#main-slider .swiper-container", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    initialSlide: 1,

    navigation: {
        nextEl: "#main-slider .swiper-button-next",
        prevEl: "#main-slider .swiper-button-prev",
    },
});
var swiperMainBottom = new Swiper("#main-bottom-slider .swiper-container", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        el: '#main-bottom-slider .swiper-pagination',
        clickable: true,
    },
});


// SLIDER COMMENTS
var swiperComment = new Swiper("#slider-comment .swiper-container", {
    loop: true,
    slidesPerView: 3,
    initialSlide: 1,
    watchOverflow: true,

    navigation: {
        nextEl: "#slider-comment .swiper-button-next",
        prevEl: "#slider-comment .swiper-button-prev",
    },

});

// SLIDER JEWELRY
var swiperComment = new Swiper("#slider-comment-jewelry-one .swiper-container", {
    loop: true,
    slidesPerView: 3,
    initialSlide: 1,
    watchOverflow: true,

    navigation: {
        nextEl: "#slider-comment-jewelry-one .swiper-button-next",
        prevEl: "#slider-comment-jewelry-one .swiper-button-prev",
    },

});

var swiperComment = new Swiper("#slider-comment-jewelry-two .swiper-container", {
    loop: true,
    slidesPerView: 3,
    initialSlide: 1,
    watchOverflow: true,

    navigation: {
        nextEl: "#slider-comment-jewelry-two .swiper-button-next",
        prevEl: "#slider-comment-jewelry-two .swiper-button-prev",
    },

});

var swiperComment = new Swiper("#slider-comment-jewelry-three .swiper-container", {
    loop: true,
    slidesPerView: 3,
    initialSlide: 1,
    watchOverflow: true,

    navigation: {
        nextEl: "#slider-comment-jewelry-three .swiper-button-next",
        prevEl: "#slider-comment-jewelry-three .swiper-button-prev",
    },

});