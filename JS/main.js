/* ===========================
   뭐먹지 - 메인 스크립트
   =========================== */

$(document).ready(function () {
    // 이미지 슬라이더 초기화
    $(".slick").slick({
        arrow: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: "",
        nextArrow: "",
        slidesToShow: 1,
        fade: true,
        cssEase: "ease-in-out",
        speed: 600,
    });
});
