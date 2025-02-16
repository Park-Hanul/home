$(function(){
    let win_w = window.innerWidth;
    //main
    let mainSwiper = new Swiper(".main .swiper", {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".main .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".main .swiper-button-next",
          prevEl: ".main .swiper-button-prev",
        },
      });

    //promotion
    const proBtn = '.promotion .tab_btn .btn_item';
    const panel = '.promotion .tab_panel > div';
    
    $(proBtn).first().addClass('active');
    $(panel).stop().fadeOut(0);
    $(panel).first().fadeIn(0);

    let proSwiper = new Swiper(".special .swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".special .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
          },
        },
      });


    $(proBtn).on('click',function(e){
        e.preventDefault();

        $(proBtn).removeClass('active');
        $(this).addClass('active');
       
        let index = $(this).parent().index();
        $(panel).stop().fadeOut(0);
        $(panel).eq(index).stop().fadeIn(0);
        proSwiper.destroy();

        if(index == 0){
          proSwiper = new Swiper(".special .swiper", {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                  el: ".special .swiper-pagination",
                  clickable: true,
                },
                breakpoints: {
                  480: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 30,
                  },
                  1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 30,
                  },
                },
            });
        }else if(index == 1){
          proSwiper = new Swiper(".card .swiper", {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                  el: ".card .swiper-pagination",
                  clickable: true,
                },
                breakpoints: {
                  480: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 30,
                  },
                  1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 30,
                  },
                },
              });
        }else if(index == 2){
          proSwiper = new Swiper(".membership .swiper", {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                  el: ".membership .swiper-pagination",
                  clickable: true,
                },
                breakpoints: {
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                },
              });
        }    
    });

    //play
    const box = '.play .box';

    $(box).first().addClass('active');
    $(box).on('mouseenter',function(){
        $(box).removeClass('active');
        $(this).addClass('active');
    }); 
    $(box).on('mouseleave',function(){
        $(this).addClass('active');
    });

    //today
    const todayDate = document.querySelector('.today .date');
    let today = new Date();

    let date = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
    let week = ['일','월','화','수','목','금','토'];
    let day = today.getDay();

    for(let i=0;i<date.length;i++){
        if(date[i] < 10){
            date[i] = '0' + date[i];
        }
    }
    todayDate.innerHTML = date[0] + '.' + date[1] + '.' + date[2] + '(' + week[day] + ')';

    const toBtn = '.today .tab_btn a';
    let item = '.today .swiper-wrapper > div';

    
    function pcItem(){
      $(toBtn).first().addClass('active');
      $(item).stop().fadeOut(0);
      $(item).first().stop().fadeIn(0);
      $(toBtn).on('click',function(e){
          e.preventDefault();
  
          $(toBtn).removeClass('active');
          $(this).addClass('active');
         
          let index = $(this).parent().index();
          $(item).stop().fadeOut(0);
          $(item).eq(index).stop().fadeIn(0);
      });
      let moBtn = '.today .box > a';
      $(moBtn).on('click',function(e){
          if(win_w > 1200){
              e.preventDefault();
          }
      })
    }
    function moItem(){
        $(item).stop().fadeIn(0);
      $(toBtn).removeClass('active');

      $(item).each(function(){
          let none = $(this).hasClass('none');

          if(none){
              $(this).stop().fadeOut(0);
          }
      }); 
    }
    if(win_w > 960){
      pcItem();
    }else{
      moItem();
      let todaySwiper = new Swiper(".today .swiper", {
        slidesPerView: 'auto',
        scrollbar: {
          el: ".today .swiper-scrollbar",
        },
        breakpoints: {
          960: {
            slidesPerView: 'auto',
            scrollbar: {
              el: ".today .swiper-scrollbar",
            },
          },
        },
      });
    }


    //event
    let eventSwiper = new Swiper(".event .swiper", {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true, 
        breakpoints: {
          960: {
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true, 
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            allowTouchMove: false,
          },
        },
    });
    


    //notice
    let slider = '.notice .slider_wrap';
    let moSlide = '.notice .mo_block';
    let pagePrevBtn = '.notice .prev';
    let pageNextBtn = '.notice .next';

    $(pagePrevBtn).on('click',function(){
      if(win_w > 960){
        $(slider).css('top',-100);
        $(slider).stop().animate({
            top: '+=' + 100
        },500,function(){
            $(this).find('.slide').last().prependTo(slider);
            $(this).css('top',-100);
        });
      }else{
        $(moSlide).css('top',-100);
        $(moSlide).stop().animate({
            top: '+=' + 100
        },500,function(){
            $(this).find('> li').last().prependTo(moSlide);
            $(this).css('top',-100);
        });
      }
    });

    $(pageNextBtn).on('click',function(){
      if(win_w > 960){
        $(slider).stop().animate({
            top: '-=' + 100
        },500,function(){
            $(this).find('.slide').first().appendTo(slider);
            $(this).css('top',-100);
        });
      }else{
        $(moSlide).stop().animate({
            top: '-=' + 100
        },500,function(){
            $(this).find('> li').first().appendTo(moSlide);
            $(this).css('top',-100);
        });
      }
    });
    $(pagePrevBtn).trigger('click');


    $(window).on('resize',function(){
        win_w = window.innerWidth;
        if(win_w > 960){
            let eventBtn = '.event .box > a';
            $(eventBtn).on('click',function(e){
                e.preventDefault();
            });
            pcItem();
        }else{
          moItem();
        }; 
      });

    $(window).trigger('resize');
});
