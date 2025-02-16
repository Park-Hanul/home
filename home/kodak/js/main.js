//main
$(function(){
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    let swiper = new Swiper(".main .swiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: ".main .swiper-pagination",
        clickable: true
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        },

      }
    });
    var control = function () {
      var slide = swiper.slides[swiper.activeIndex];
      var video = slide.children[0];
      video.addEventListener("ended", function () {
      swiper.slideNext();
      });
      video.currentTime = 0;
      video.play;
  };
  swiper.on("slideChange", control);

});


//h2
$(function(){
  const titleEffect = 'section h2.titleEffect';
  const innovationTitle = '.innovation h2';

  $(window).scroll(function(){
    let top = $(this).scrollTop();
    $(titleEffect).each(function(){
      let h2Top = $(this).offset().top;

      if(top > h2Top - 400){
        $(this).addClass('active');
      }
    });
  });

  $(window).resize(function(){
    let win_w = window.innerWidth;

    if(win_w < 1024){
      $(innovationTitle).removeClass('titleEffect');
    }
  });
  $(window).trigger('resize');
});

//review
$(function(){
  var swiper = new Swiper(".review .swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      744: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".review .swiper-pagination",
      clickable: true,
    },
  });
});

