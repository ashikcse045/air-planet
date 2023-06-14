$(document).ready(function () {
  $("#menuBar").click(function () {
    $(".menu").slideToggle();
    const btnText = $(this).text();
    if(btnText === 'close') {
      $(this).text("menu")
    } else {
      $(this).text("close");
    }
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    // center: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
