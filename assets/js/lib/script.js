// ローディング
window.onload = function() {
  const spinner = document.getElementById('loading');
  window.setTimeout(function() {spinner.classList.add('loaded');
}, 1000);
}

$(function(){
    const $slider = $(".mv__slick");
 
// 左右の透過の2周目ががたつく対応
$slider.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
  $slider.find(".slick-slide").each((index, el) => {
    const $this = $(el),
      slickindex = $this.attr("data-slick-index");
    if (nextSlide == slick.slideCount - 1 && currentSlide == 0) {
      // 現在のスライドが最初のスライドでそこから最後のスライドに戻る場合
      if (slickindex == "-1") {
        // 最後のスライドに対してクラスを付与
        $this.addClass("is-active-next");
      } else {
        // それ以外は削除
        $this.removeClass("is-active-next");
      }
    } else if (nextSlide == 0) {
      // 次のスライドが最初のスライドの場合
      if (slickindex == slick.slideCount) {
        // 最初のスライドに対してクラスを付与
        $this.addClass("is-active-next");
      } else {
        // それ以外は削除
        $this.removeClass("is-active-next");
      }
    } else {
      // それ以外は削除
      $this.removeClass("is-active-next");
    }
  });
});
if(window.matchMedia("(max-width: 768px)").matches){
	$('.mv__slick').slick({
    dots: true,
    speed: 1000,
    slidesToShow: 1
});
	$('.slider-info').slick({
    dots: true,
    centerMode: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 1
});
}else{ 
$('.mv__slick').slick({
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    speed: 1000,
    slidesToShow: 1
});
}
var timer = false;
$(window).resize(function() {
if (timer !== false) {
clearTimeout(timer);
}
timer = setTimeout(function() {
//リロードする
location.reload();
}, 200);
});
});

$(function () {
  $('.js-btn').on('click', function () { // js-btnクラスをクリックすると、
    $('.menu , .btn , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  });
});


// スクロールで変わるheader
jQuery(window).on('scroll', function () {
  if(window.matchMedia("(min-width: 769px)").matches){
  if (150 < jQuery(this).scrollTop()) {
      jQuery('.header,.mv').addClass('is-fixed');
  } else {
      jQuery('.header,.mv').removeClass('is-fixed');
  }
}
});
