//初期化処理
// ページ読み込みのフェードイン・フェードアウト
// 各ページが読み込まれた時にはfadeoutクラスを削除
// フェードイン動作はjQueryで実装
// スマホサイズ時の送信ボタンの内容を変更
$(window).on("load", () => {
  $("body").removeClass("fadeout").hide().fadeIn(100);
  if (window.matchMedia("(max-width: 375px)").matches) {
    $(".submit").attr("value", "Send");
  }
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

// const stock_slideToggle = $(".news1::before,.news2::before,.news3::before,");
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

//

$(".nav-toggle").on("click", () => {
  $(".nav-toggle, .header-nav").toggleClass("show");
});

// 商品ニュース内の文字の表示
$(".pickup-news li").on({
  mouseenter: (e) => {
    console.log(e);
    $(e.target).children("p").fadeIn(100);
  },
  mouseout: (e) => {
    $(e.target).children("p").fadeOut(100);
  },
});

// ハンバーガーメニューのオンオフをactiveクラスの有無で判断する

$(".navToggle").on("click", (e) => {
  const target = $(e.currentTarget);
  target.toggleClass("active");

  if (target.hasClass("active")) {
    $(".header-container nav").addClass("active");
  } else {
    $(".header-container nav").removeClass("active");
  }
});

//sendボタン操作後、transmission completedボタンに変更

$(".submit").on("click", () => {
  $(".submit")
    .animate({ width: "320px" }, 200)
    .attr("value", "TRANSMISSION COMPLETED")
    .addClass("active");
});
