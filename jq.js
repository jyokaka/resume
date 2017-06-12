$(function(){
var top=$("#top-nav").offset().top;
$(window).scroll(function () {
  if ($(window).scrollTop() >= top) {
    $("nav:first").addClass("main-nav-move");
  } else {
    $("nav:first").removeClass("main-nav-move");
  }
}).trigger("scroll");
});

//导航栏

$('#button').click(function() {
    $('body').toggleClass('open');
});

//页面跳转
$(function(){
    $('#nav').on('click','li',function(e){
            var target = e.target;
            var id = $(target).data("to");
            $('html,body').animate({scrollTop:$('#'+id).offset().top-40}, 800);
        });

    $('#sidebar').on('click','li',function(e){
            var target = e.target;
            var id = $(target).data("to");
            $('html,body').animate({scrollTop:$('#'+id).offset().top-80}, 800);
        });
    $('#mouse').click(function(){
            var id = $(this).data("to");
            $('html,body').animate({scrollTop:$('#'+id).offset().top-40}, 800);  
    });
})

//点击出现内容

$('#third-skills li').click(function(){
        if($(this).next().is(':visible')){
            $(this).next().slideUp(200);
        }else{
            $(this).siblings('li').next().slideUp(200);
            $(this).next().slideDown(200);
        }
    })



