import Swiper from 'swiper';

import 'swiper/swiper-bundle.css';

//slider str product -> photo product
if ($('.slider-product-small')) {
    var swiperSmall = new Swiper(".slider-product-small", {
        loop: true,
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
    var swiperBig = new Swiper(".slider-product-big", {
        loop: true,
        slideToClickedSlide: true,

        thumbs: {
            swiper: swiperSmall,
        },
    });
}


if ($('#slider-comment')) {
    var swiperSmall = new Swiper("#slider-comment", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 1,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}



if ($('.slider-product-str')) {
    var swiperSmall = new Swiper(".slider-product-str", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 1,

        navigation: {
            nextEl: ".swiper-button-next-two",
            prevEl: ".swiper-button-prev-two",
        },
    });
}



if ($('.one-block-slider')) {
    var swiperSmall = new Swiper(".one-block-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 1,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}


if ($('.block-slider-about')) {
    var swiperSmall = new Swiper(".block-slider-about", {
        loop: true,
        slidesPerView: 3,
        initialSlide: 1,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}


if ($('.main-block-slider')) {
    var swiperSmall = new Swiper(".main-block-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 1,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}
