//mobile
$(function(){
  var mobile_keys = new Array('iPhone','iPad','Android','BlackBerry','Windows Phone', 'Windows CE','LG','MOT','SAMSUNG','SonyEricsson','Nokia');

  if(document.URL.match('move_pc')){
    mobile_keys = null;
  }

  for(var i in mobile_keys){
    if(navigator.userAgent.match(mobile_keys[i]) != null){
      location.assign('http://mezen05.dothome.co.kr');
    }
  }
});

//popup
$(function(){
  function setCookie(name,value,expire){
    var today = new Date();
    
    today.setDate(today.getDate() + expire);
    
    document.cookie = name + '=' + value + '; path=/; expires=' + today.toGMTString() + ';';
  }
  
  var popup = '.popup';
  var chk = '#chk_box';

  $(popup).find('a').click(function(e){
    e.preventDefault();
    
    var chkValue = $(chk).prop('checked');
    
    if(chkValue){
      setCookie('exCookie','yes',1);
    }
    $(popup).stop().fadeOut(0);
    $('body').css('overflow','visible');
  });
  
  var cookieData = document.cookie;
  
  if(cookieData.indexOf('exCookie=yes') < 0){
    $(popup).fadeIn(0);
    $('body').css('overflow','hidden');
  }else{
    $(popup).fadeOut(0);
    $('body').css('overflow','visible');
  }

});



//main_slider
$(function(){
  var swiper = new Swiper("main .swiper", {
    autoplay:{
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: "main .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "main .swiper-button-next",
      prevEl: "main .swiper-button-prev",
    },
  });
});

//brand_story_video
$(function(){
  var stroyVideo = $('.story_video video').get(0);
  
  $(window).scroll(function(){
    var windowTop = $(this).scrollTop();
    
    var videoTop = $('.story_video').offset().top;
    
    if(windowTop > videoTop - 600){
      stroyVideo.play();
    }
  });
});

//best_product
$(function(){
  var tab = '.best_product .btn a';
  
  $(tab).click(function(e){
    e.preventDefault(); 
    
    $(tab).removeClass('active');
    $(this).addClass('active');
  });
});

//best_product_slider
$(function(){
  var btn = '.best_product .tab_box .btn a';
  var content = '.best_product .contents_wrap > div';
  
  $(btn).first().addClass('active');
  $(content).first().fadeIn(0);
  
  var swiper = new Swiper(".bread .swiper", {
    slidesPerView: 5,
    centeredSlides: true,
    navigation: {
        nextEl: ".bread .swiper-button-next",
        prevEl: ".bread .swiper-button-prev",
    },
    loop: true,
    allowTouchMove: false,
    autoplay:{
      delay: 5000,
      disableOnInteraction: false,
    },
  });
  
  $(btn).click(function(e){
    e.preventDefault();
    
    $(btn).removeClass('active');
    $(this).addClass('active');
    
    var index = $(this).parent().index();
    
    $(content).stop().fadeOut(0);
    $(content).eq(index).stop().fadeIn(0);
    
    swiper.destroy(); 
    
    if(index == 0){
      swiper = new Swiper(".bread .swiper", {
        slidesPerView: 5,
        centeredSlides: true,
        navigation: {
            nextEl: ".bread .swiper-button-next",
            prevEl: ".bread .swiper-button-prev",
        },
        loop: true,
        allowTouchMove: false,
        autoplay:{
          delay: 5000,
          disableOnInteraction: false,
        },
      });
    }else if(index == 1){
      swiper = new Swiper(".cake .swiper", {
        slidesPerView: 5,
        centeredSlides: true,
        navigation: {
            nextEl: ".cake .swiper-button-next",
            prevEl: ".cake .swiper-button-prev",
        },
        loop: true,
        allowTouchMove: false,
        autoplay:{
          delay: 5000,
          disableOnInteraction: false,
        },
      });
    }else if(index == 2){
      swiper = new Swiper(".simply .swiper", {
        slidesPerView: 5,
        centeredSlides: true,
        navigation: {
            nextEl: ".simply .swiper-button-next",
            prevEl: ".simply .swiper-button-prev",
        },
        loop: true,
        allowTouchMove: false,
        autoplay:{
          delay: 5000,
          disableOnInteraction: false,
        },
      });
    }else if(index == 3){
      swiper = new Swiper(".gift .swiper", {
        slidesPerView: 5,
        centeredSlides: true,
        navigation: {
            nextEl: ".gift .swiper-button-next",
            prevEl: ".gift .swiper-button-prev",
        },
        loop: true,
        allowTouchMove: false,
        autoplay:{
          delay: 5000,
          disableOnInteraction: false,
        },
      });
    }else if(index == 4){
      swiper = new Swiper(".dessert .swiper", {
        slidesPerView: 5,
        centeredSlides: true,
        navigation: {
            nextEl: ".dessert .swiper-button-next",
            prevEl: ".dessert .swiper-button-prev",
        },
        loop: true,
        allowTouchMove: false,
        autoplay:{
          delay: 5000,
          disableOnInteraction: false,
        },
      });
    }else if(index == 5){
      swiper = new Swiper(".drink .swiper", {
        slidesPerView: 5,
        centeredSlides: true,
        navigation: {
            nextEl: ".drink .swiper-button-next",
            prevEl: ".drink .swiper-button-prev",
        },
        loop: true,
        allowTouchMove: false,
        autoplay:{
          delay: 5000,
          disableOnInteraction: false,
        },
      });
    }
  });
});

//new_product_video
$(function(){
  window.onYouTubeIframeAPIReady = function(){
    player = new YT.Player('new_product_video',{});
  };
  $(window).scroll(function(){
    var windowTop = $(this).scrollTop();
    
    var videoTop = $('.new_video').offset().top;
    
    if(windowTop > videoTop - 600){
      player.playVideo();
    }
  });
});

//new_product_slider
$(function(){
  var swiper = new Swiper(".new_product .swiper_parent", {
    slidesPerView: 3,
    direction: "vertical",
    navigation: {
      nextEl: ".new_product .swiper-button-next",
      prevEl: ".new_product .swiper-button-prev",
    },
    allowTouchMove: false,
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
        navigation: {
          nextEl: ".benefit_banner .swiper-button-next",
          prevEl: ".benefit_banner .swiper-button-prev",
        },
        loop: true,
        allowTouchMove: false,
        speed: 600,
    });
});