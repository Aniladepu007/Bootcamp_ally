// ---------------- Image Slider -------
document.addEventListener("DOMContentLoaded", function () {
  $("#banner").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  });

  const dots = document.querySelectorAll(".slick-dots");
  //   console.log("test", dots);
  for (dot of dots) dot.style.fontSize = "large";
});
