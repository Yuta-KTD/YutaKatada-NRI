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

// 商品ニュース画像ホバー時の動作
$(".pickup-news li").on({
  mouseenter: (e) => {
    $(e.currentTarget).children("p").fadeIn(100).css("display", "content");
    $(e.currentTarget).children("div").slideDown(100);
  },
  mouseleave: (e) => {
    $(e.currentTarget).children("p").fadeOut(100);
    $(e.currentTarget).children("div").slideUp(100);
  },
});

// ==ハンバーガーメニュー== //
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
// メニューの表示、アイコン切り替え
$(".nav-toggle").on("click", () => {
  $(".nav-toggle, .header-nav").toggleClass("show");
});

// ==CONTACTフォーム== //
//sendボタン操作後、transmission completedボタンに変更

$(".submit").on("click", () => {
  $(".submit")
    .animate({ width: "320px" }, 200)
    .attr("value", "TRANSMISSION COMPLETED")
    .addClass("active");
});
