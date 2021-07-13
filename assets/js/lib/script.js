// ローディング
window.onload = function() {
  const spinner = document.getElementById('loading');
  window.setTimeout(function() {spinner.classList.add('loaded');
}, 2500);
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

// ローディング
$(function () {
var bar = new ProgressBar.Line(container, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#5ABAE0',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#5ABAE0'},
  to: {color: '#2E89BC'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
    bar.path.setAttribute('stroke', state.color);
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0
});
