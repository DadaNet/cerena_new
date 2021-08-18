import $ from "jquery";
window.jQuery = $;
window.$ = $;

import './swiper-sliders.js';

import './zoomove.js';

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