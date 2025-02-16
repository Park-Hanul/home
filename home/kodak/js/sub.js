$(function(){
    const mainBtn = '.subMain .mainList > button';
    const mainList = '.subMain .mainList > ul';
    const subBtn = '.subMain .subList > button';
    const subList = '.subMain .subList > ul';

    $(mainBtn).click(function(){
        $(this).toggleClass('active');

        $(mainList).stop().slideToggle();
    });
    $(subBtn).click(function(){
        $(this).toggleClass('active');

        $(subList).stop().slideToggle();
    });
});