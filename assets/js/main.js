//Slider
const DoctorResourceCheck = document.querySelectorAll(".values__slider");
if (DoctorResourceCheck.length > 0) {
  const ResourceSlider = new Swiper(".values__slider", {
    breakpoints: {
      576: {
        slidesPerView: 1.3,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 39,
      },
    },
  });
}

//Mobile menu
$(document).ready(function () {
  /* Плавная прокрутка меню */
  $('nav a[href^="#"]').click(function () {
    let target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      500
    );
    $('nav a[href^="#"]').parent().removeClass("active");
    $(this).parent().addClass("active");
    $(".menu__mobile .menu").toggle(500);
    $(".menu__burger").toggleClass("close");
    return false;
  });
  /* Мобильное меню */
  $(".menu__burger").click(function () {
    $(".menu__mobile .menu").toggle(500);
    $(this).toggleClass("close");
  });
});
