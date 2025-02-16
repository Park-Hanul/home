
$(function(){
    let top = $(window).scrollTop();
    //header

    let gnb = '.gnb_wrap';
    let gnbLi = '.gnb > li';
    let mainNav = '.gnb .mainnav';
    let subNav = '.gnb .subnav';
    let center = [];
    let icon = '.header .icon';
    let panel = '.header .panelIcon';
    let right = '.header .header_right';
    let mNav = '.header .m_topNav';

    function save_center(){
        center = [];
        $(mainNav).each(function(){
            let off = $(this).offset().left;
            let w = $(this).width() / 2 + $(icon).width();
            center.push( off + w);
        });
    };
    save_center();

    function pcGnb(){

        $('.header').on({
            'mouseenter': function(){$(subNav).stop().slideDown('fast');},
            'mouseleave': function(){$(subNav).stop().slideUp('fast');}
        });

        $(gnbLi).on({
            'mouseenter': function(){
                let i = $(this).index();
                $(icon).css({left: center[i], opacity: 1,});
            },
            'mouseleave': function(){$(icon).css({ opacity: 0,});}
        });
        
        $(icon).on('mouseenter',function(){
            $(this).css({opacity: 1,});
        });
    }

    function mGnb(){
        $('.header').off('mouseenter mouseleave');
        $(mainNav).parent().off('mouseenter mouseleave');
        $(panel).off('click');
        $(mainNav).off('click');

        $(panel).on('click',function(e){
            e.preventDefault();

            let has = $(this).hasClass('active');

            if(!has){
                $(mainNav).removeClass('active');
                $(subNav).stop().slideUp(0);
            }

            $(this).toggleClass('active');
            $(gnb).toggleClass('active');
            $(right).toggleClass('active');
            $(mNav).toggleClass('active');
        });

        $(mainNav).on('click',function(e){
            e.preventDefault();

            let has = $(this).hasClass('active');

            if(has){
                $(this).removeClass('active');
                $(this).next().stop().slideUp('fast');
            }else{
                $(mainNav).removeClass('active');
                $(this).addClass('active');
                $(subNav).stop().slideUp('fast');
                $(this).next().stop().slideDown('fast');
            }
        });
    }

    //footer
    let familyBtn = 'footer .family_btn';

    $(familyBtn).on('click',function(){
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
        $(this).parent().toggleClass('active');
    });




    //aside
    let topBtn = 'aside .top_btn a';
    let quickBtn = 'aside .quick .quick_btn a';
    let quickBox = 'aside .quick .quick_box';
    let aside = '.aside';

    $(topBtn).on('click',function(e){
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: 0
        });
    });

    $(quickBtn).on('click',function(e){
        e.preventDefault();

        $(this).parent().toggleClass('active');
        $(quickBox).stop().fadeToggle('fast');
    });



    //scoll event
    $(window).scroll(function(){
        top = $(this).scrollTop();
        let poinHeight = $(document).height() - $('.footer').outerHeight() - $(window).height();

        if(top > 0){
            $('.header').addClass('active');
        }else if(top <= 0){
            $('.header').removeClass('active');
        }
        if(top > poinHeight){
            $(aside).addClass('active');
        }else if(top <= poinHeight){
            $(aside).removeClass('active');
        }
    });
    
    //resize event
    $(window).on('resize',function(){
        $(mainNav).removeClass('active');
        $(panel).removeClass('active');
        $(gnb).removeClass('active');
        $(right).removeClass('active');
        $(mNav).removeClass('active');
        $(subNav).stop().slideUp(0);

        let win_w = $(window).width();
        save_center();
        if(win_w > 1200){
            pcGnb();
            $(aside).stop().fadeIn(300);
        }else{
            mGnb();
            $(aside).stop().fadeOut(300);
        }
    });

    $(window).trigger('resize');
});