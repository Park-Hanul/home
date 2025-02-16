/* header scroll */
$(function(){
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        
        if(top > 0){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });
});

/* top_search */
$(function(){
    var btn = '.h_top_search';
    var bg = '.top_search';
    var back = '.top_search .inner_wrap > button'
    $(btn).click(function(){
        $(bg).stop().slideToggle('fast');
    });
    
    $(back).click(function(){
        $(bg).stop().slideUp('fast');
    });
    
});


/* gnb */
$(function(){
    var gnb = '.gnb';
    var main = '.main_nav';
    var sub = '.sub_nav';
    var bg = '.gnb_bg';
    var speed = 'fast';
    
    $(gnb).hover(function(){
        $(sub).add(bg).stop().slideDown(speed);
    },function(){
        $(sub).add(bg).stop().slideUp(speed);
        $(main).removeClass('active');
    });
    
    $(main).first().focus(function(){
        $(gnb).trigger('mouseenter');
        $(this).addClass('active');
    });
    
    $(main).focus(function(){
        $(main).removeClass('active');
        $(this).addClass('active');
    });
    
    $(sub).last().find('a:last').keydown(function(e){
        if(e.keyCode == 9){
            if(!e.shiftKey){
                $(gnb).trigger('mouseleave');
            }
        }
    });
    
    $(main).first().keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){
                $(gnb).trigger('mouseleave');
            }
        }
    });
    
    $(sub).find('li:last a').focus(function(){
        $(main).removeClass('active');
        $(this).parent(sub).prev().addClass('active');
    });
});





/* family_site button.active */
$(function(){
    var dropDown = '.family_site';
    var speed = 'fast';
    
    $(dropDown).find('button').click(function(){
        $(this).toggleClass('active');
        $(this).next().stop().slideToggle(speed);
    });
    
    $(dropDown).mouseleave(function(){
        $(this).find('button').removeClass('active');
        $(this).find('ul').stop().slideUp(speed);
    });
    
    $(dropDown).find('a:last').keydown(function(e){
        if(e.keyCode == 9){
            if(!e.shiftKey){
                $(dropDown).trigger('mouseleave');
            }
        }
    });
});

/* aside scroll */
$(function(){
    var sideMenu = '.side_menu';
    var topBtn = '.top_btn a';
    var speed = 0;
    var easing = 'easeOutQuart';
    var minWidth = 1180;
    var sideWidth = 100;
    var fadeOutWidth = minWidth + (sideWidth * 2);

    $(window).scroll(function(){
        var top = $(window).scrollTop();
        
        if(top > 200){
            $(sideMenu).parent().stop().fadeIn(300);
        }else{
            $(sideMenu).parent().stop().fadeOut(300);
        }
        speed = top / 3;

        $(topBtn).click(function(e){
            e.preventDefault();
    
            $('html, body').stop().animate({
                scrollTop: 0
            },speed,easing);
        });

        var pointHeight = $(document).height() - $('.f_bottom').outerHeight() - $(window).height();

        if(top > pointHeight){
            $(sideMenu).parent().addClass('active');
        }else{
            $(sideMenu).parent().removeClass('active');
        }

    });
    
    $(window).resize(function(){
        var windowWidth = $(window).width();

        if(windowWidth < fadeOutWidth){
            $(sideMenu).stop().fadeOut(300);
        }else{
            $(sideMenu).stop().fadeIn(300);
        }
    });
    

});