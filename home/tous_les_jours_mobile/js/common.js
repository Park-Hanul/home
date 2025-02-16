//panel
$(function(){
    var panel = '.panel';
    var main = '.main_nav';
    var sub = '.sub_nav';
    var bg = '.black_bg';
    var btn = '.panel_btn';
    var speed = 300;

    $(btn).click(function(e){
        e.preventDefault();
        
        $(panel).addClass('active');
        $(bg).stop().fadeIn(speed);
        $('body').css('overflow','hidden');
    });

    $(bg).click(function(){
        $(panel).removeClass('active');
        $(this).stop().fadeOut(speed);
        $('body').css('overflow','auto');

        setTimeout(function(){
            $(sub).stop().slideUp(speed);
            $(main).removeClass('active');
        },600);
    });

    $(main).click(function(){
        $(sub).stop().slideUp(speed);
        $(this).next().stop().slideToggle(speed);

        var has = $(this).hasClass('active');

        if(has){
            $(this).removeClass('active');
        }else{
            $(main).removeClass('active');
            $(this).addClass('active');
        }

    });
});

//seach_box
$(function(){
    var btn = '.search_btn';
    var search = 'header form';
    var speed = 300;

    $(btn).click(function(e){
        e.preventDefault();

        var is = $(search).is(':hidden');

        if(is){
            $(search).stop().slideDown(speed);
            $(this).find('img').attr('src','images/common/close_btn.png');
        }else{
            $(search).stop().slideUp(speed);
            $(this).find('img').attr('src','images/common/header_search_icon.png');
        }
    });
});

/* aside top_btn */
$(function(){
    var topBtn = '.top_btn a';
    var easing = 'easeOutQuart';
    var speed = 'slow';

    $(topBtn).click(function(e){
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: 0
        },speed,easing);
    });
    
});