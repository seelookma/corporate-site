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
    if (window.matchMedia( "(min-width: 767px)" ).matches) {
    $(function() {
  var $win = $(window),
      $main = $('main'),
      $header = $('header'),
      headerHeight = $header.outerHeight(),
      headerPos = $header.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > headerPos ) {
      $header.addClass(fixedClass);
      $main.css('margin-top', headerHeight);
    } else {
      $header.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});
    }
    //ボタンがクリックされたらTOPから0pxの位置までスクロールする
    //スクロールの速さは500ミリ秒
