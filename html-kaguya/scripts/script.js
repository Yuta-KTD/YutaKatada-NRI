// ページ読み込みのフェードイン・フェードアウト
// 各ページが読み込まれた時にはfadeoutクラスを削除
//フェードイン動作はjQueryで実装
$(window).on("load", () => {
  $("body").removeClass("fadeout").hide().fadeIn(100);
});
//フェードアウト動作をCSSのtransitionを用いて実装
$(() => {
  $(".page-transition").on("click", (e) => {
    // preventDefaultでデフォルト動作をキャンセル
    e.preventDefault();
    // 遷移先のURLを取得
    const url = $(e.currentTarget).attr("href");
    if (url !== undefined) {
      //bodyにclass="fadeout"を挿入
      $("body").addClass("fadeout");
      setTimeout(() => {
        window.location = url;
      }, 100);
    }
    return false;
  });
});

$(() => {
  $(".nav-toggle").on("click", () => {
    $(".nav-toggle, .header-nav").toggleClass("show");
  });
});

// const stock_slideToggle = $(".news1::before,.news2::before,.news3::before,");
// const stock_fadeToggle = $(".news1 p,.news2 p,.news3 p");
// //pickup-news(入荷情報画像)スライドアニメーション
// $(".pickup-news li").on(
//   {
//     mouseover: () => {
//       stock_fadeToggle.fadeIn();
//       stock_slideToggle.slideUp();
//     },
//   },
//   {
//     mouseout: () => {
//       stock_fadeToggle.fadeOut();
//       stock_slideToggle.slideDown();
//     },
//   }
// );

// ハンバーガーメニューのオンオフをactiveクラスの有無で判断する
$(function () {
  $(".navToggle").on("click", (e) => {
    const target = $(e.currentTarget);
    target.toggleClass("active");

    if (target.hasClass("active")) {
      $(".header-container nav").addClass("active");
    } else {
      $(".header-container nav").removeClass("active");
    }
  });
});
