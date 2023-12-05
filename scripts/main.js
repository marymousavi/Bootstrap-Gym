$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    })
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 200){
        $('.nav-menu').addClass('custom-navbar')
    }else{
        $('.nav-menu').removeClass('custom-navbar')
    }
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 700){
        $('.award-text').addClass('fromright')
        $('.award-img').addClass('fromleft')
    }else{
        $('.award-text').removeClass('fromright')
        $('.award-img').removeClass('fromleft')
    }
})

$('.gallery-list-item').click(function(){
    let value = $(this).attr('data-filter');
    $(this).addClass('active-item').siblings().removeClass('active-item')
    if(value === 'all'){
        $('.filter').show(300)
    }else{
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);
    }
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 4800){
        $('.card-1').addClass('moveFromRight')
        $('.card-2').addClass('moveFromBottom')
        $('.card-3').addClass('moveFromLeft')
    }else{
        $('.card-1').removeClass('moveFromRight')
        $('.card-2').removeClass('moveFromBottom')
        $('.card-3').removeClass('moveFromLeft')
    }
})