$(function(){
  if($(window).width() >= 450){
    hsize = $(window).height();
    $('.header').css('height',hsize + 'px');
    $(window).resize(function(){
      hsize = $(window).height();
      $('.header').css('height',hsize + 'px');
    });
  }

  if($(window).width() >= 820){
    hsize = $(window).height();
    $('.abouts').css('height',hsize + 'px');
    $(window).resize(function(){
      hsize = $(window).height();
      $('.abouts').css('height',hsize + 'px');
    });
  }

});
