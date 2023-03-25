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
if ($(".slider")[0]) {
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
}

// ページトップ表示のパターン
// ある程度スクロールしたらフェード表示する
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  // 検証→コンソール表示でどこをスクロールしてる（数値）かわかる
  // console.log(sc);
  // scがブラウザの1/3を超えたら表示
  if (sc > $(window).height() / 3) {
    $(" p.pagetop").fadeIn(500);
  } else {
    $(" p.pagetop").fadeOut(500);
  }
});

// クリック時の裏に出る薄い文字を消す
if ($("[data-lightbox]")[0]) {
  lightbox.option({
    showImageNumberLabel: false,
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
function fadeAnime() {
  $(".fadeLeftTrigger").each(function () {
    //fadeLeftTriggerというクラス名が
    var elemPos = $(this).offset().top + 250; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeLeft"); // 画面内に入ったらfadeLeftというクラス名を追記
    } else {
      $(this).removeClass("fadeLeft"); // 画面外に出たらfadeLeftというクラス名を外す
    }
  });
}
