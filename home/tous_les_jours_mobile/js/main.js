//popup
$(function(){
  function setCookie(name,value,expiredays){
    var today = new Date();
    today.setDate(today.getDate() + expiredays);

    document.cookie = name + '=' + value + '; path=/; expires' + today.toGMTString() + ';';
  }


  var popup = '.popup';
  var closeBtn = '.close_btn';
  var todayBtn = '.today_btn';
  
  $(closeBtn).click(function(){
    $(popup).stop().fadeOut(0);
    $('body').css('overflow','visible');
  });
  
  $(todayBtn).click(function(){
    setCookie('exCookie','yes',1);
    $(closeBtn).trigger('click');
  });

  var cookieDate = document.cookie;

  if(cookieDate.indexOf('exCookie=yes') < 0){
    $(popup).stop().fadeIn(0);
    $('body').css('overflow','hidden');
  }else{
    $(closeBtn).trigger('click');
  }

});

//main
$(function(){
    var swiper = new Swiper("main .swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: "main .swiper-pagination",
          clickable: true,
        },
        loop: true,
      });
});

//best_product
$(function(){
  var swiper = new Swiper(".best_product .swiper", {
    slidesPerView: 'auto',
  });
});

//new_product
$(function(){
  var swiper = new Swiper(".new_product .swiper", {
    slidesPerView: 'auto',
    scrollbar: {
      el: ".new_product .swiper-scrollbar",
    },
  });
});

//event
$(function(){
  var swiper = new Swiper(".event .swiper", {
    effect: "flip",
    grabCursor: true,
    navigation: {
      nextEl: ".event .swiper-button-next",
      prevEl: ".event .swiper-button-prev",
    },
    loop: true,
  });

});

//benefit_banner_slider
$(function(){
  var swiper = new Swiper(".benefit_banner .swiper", {
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
      pagination: {
        el: ".benefit_banner .swiper-pagination",
        type: "fraction",
      },
      loop: true,
      speed: 600,
  });
});

//notice
$(function(){
  var swiper = new Swiper(".board .swiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
    direction: "vertical",
    loop: true,
  });
});