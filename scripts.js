var btn = $(".submit-btn");

btn.click(function(){
  alert("Your Form has been Submitted.");
});

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    responsive: [
      {
        breakpoint: 768, // breakpoint for tablets and mobile devices
        settings: {
          arrows: false
        }
      }
    ]
  });
});
