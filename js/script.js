// モバイルメニュー
$(".hmenu").click(function () {
  // Aパターン
  // $("nav").slideToggle(500);
  $(this).toggleClass("close");
  return false;
});

// Bパターン
$(".container").click(function () {
  $(".hmenu").removeClass("close");
});
// ～～～～～～～～～～～～～～～～

$(".slider").slick({
  // 自動再生
  autoplay: true,
  // ３秒で次の画像へ
  autoplaySpeed: 3000,
  // ページャーをつける
  dots: true,
  // フェードさせる
  fade: true,
  // ２秒かけて切り替わる
  speed: 2000,
});

// ページトップ表示のパターン
// ある程度スクロールしたらフェード表示する
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  // 検証→コンソール表示でどこをスクロールしてる（数値）かわかる
  // console.log(sc);
  // scが7００を超えたら表示
  if (sc > 700) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});
