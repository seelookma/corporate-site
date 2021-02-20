$(function(){
    $('.nav_toggle').on('click', function () {
        $('.nav_toggle, .sp_globalNav').toggleClass('show');
        $('.nav_toggle').toggleClass('white')
    });
    });


    if (window.matchMedia( "(max-width: 768px)" ).matches) {
    $(function() {
        var height=$(".header").height();
        $("body").css("margin-top", height + 30);//10pxだけ余裕をもたせる
      });
    }
      $(function () {
        var pagetop = $('.toTop');
    
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
          return false;
      });
    });
    
    //ボタンがクリックされたらTOPから0pxの位置までスクロールする
    //スクロールの速さは500ミリ秒
