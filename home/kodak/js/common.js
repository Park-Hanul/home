$(function(){
    const header = '.header';
    const panel = '.header .panelIcon';
    const gnb = '.header .gnb';
    const mainNav = '.header .gnb .mainNav';
    const subNav = '.header .gnb .subNav';
    const right = '.header .rightMenu';
    const searchBtn = '.header fieldset button';
    let speed = 300;

    //header
    function pcGnb(){
        $(window).scroll(function(){
            let top = $(this).scrollTop();
            if(top > 0){
                $(header).addClass('active');
            }else{
                $(header).removeClass('active');
            }
        });
        
        //gnb
        $(mainNav).mouseenter(function(){
            $(this).next().stop().slideDown(speed);
    
            $(this).parent().mouseleave(function(){
                $(subNav).stop().slideUp(speed);
            });
        });
        $(mainNav).focus(function(){
            $(mainNav).removeClass('active');
            $(this).addClass('active');
    
            $(subNav).stop().slideUp(speed);
            $(this).next().stop().slideDown(speed);
        });
        $(mainNav).keydown(function(e){
            if(e.keyCode == 9){
                if(e.shiftKey){
                    $(mainNav).removeClass('active');
                    $(subNav).stop().slideUp(speed);
                }
            }
        });
        $(subNav).last().find('li:last a').keydown(function(e){
            if(e.keyCode == 9){
                if(!e.shiftKey){
                    $(mainNav).removeClass('active');
                    $(subNav).stop().slideUp(speed);
                }
            }
        });
        
        //search
        $(searchBtn).click(function(){
            $(this).parent().addClass('active');
        });
    };

    function mGnb(){
        $(mainNav).off('mouseenter click focus');
        $(mainNav).parent().off('mouseleave');
        $(panel).off('click');

        $(window).scroll(function(){
            let top = $(this).scrollTop();
            if(top > 0){
                $(header).addClass('active');
            }else{
                $(header).removeClass('active');
            }
        });

        //panel
        $(panel).click(function(e){
            e.preventDefault();

            let has = $(this).hasClass('active');

            if(!has){
                $(mainNav).removeClass('active');
                $(subNav).stop().slideUp(0);
            }

            $(this).toggleClass('active');
            $(header).toggleClass('active');
            $(gnb).toggleClass('active');
            $(right).toggleClass('active');
        });

        $(mainNav).click(function(){

            let has = $(this).hasClass('active');

            if(has){
                $(this).removeClass('active');
                $(this).next().stop().slideUp(speed);
            }else{
                $(mainNav).removeClass('active');
                $(this).addClass('active');
                $(subNav).stop().slideUp(speed);
                $(this).next().stop().slideDown(speed);
            }

        });
    };

    
    $(window).resize(function(){
        $(mainNav).removeClass('active');
        $(panel).removeClass('active');
        $(gnb).removeClass('active');
        $(right).removeClass('active');
        $(subNav).stop().slideUp(0);
        

        let w = window.innerWidth;

        if(w >= 1024){
            pcGnb();
        }else{
            mGnb();
        }

    });

    //5. resize이벤트 초기실행도 발생
    $(window).trigger('resize');


    const necessity = '.header .necessity';
    $(necessity).click(function(){
        alert('로그인이 필요한 서비스입니다.');
    });
});
