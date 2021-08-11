if ($(".like")) {
    $(".like").click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    })
}

if ($(".like-product-str")) {
    $(".like-product-str").click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    })
}

if ($(".like-bottom")) {
    $(".like-bottom").click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    })
}

if ($(".block-img-video")) {
    $(function() {
        $(".block-img-video").on("click", ".link-play", function(e) {
            e.preventDefault();
            $(this).toggleClass("active");
            $(".img-item", e.delegateTarget).toggleClass('active');
            $(".video-item", e.delegateTarget).toggleClass('active');
        })
    });
}

//slider str product -> photo product
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


var swiperSmall = new Swiper(".slider-comment", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    initialSlide: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

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
var swiperSmall = new Swiper(".block-slider-about", {
    loop: true,
    slidesPerView: 3,
    initialSlide: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
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