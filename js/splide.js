
/* 写真スライダー（Splide）の設定 */

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.splide');

  // スライダーがないページでは何もしない
  if (!slider) return;

  // Splideを初期化
  new Splide(slider, {
    type: 'loop',       // 写真をループさせる
    autoplay: true,     // 自動再生
    interval: 4000,     // 4秒ごとに切り替え
    speed: 1000,        // 切り替えのアニメーション時間
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,      // 左右の矢印を表示しない
    pagination: false,  // ページ番号を表示しない
    drag: true          // スワイプ操作を有効にする
  }).mount();
});