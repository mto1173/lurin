/* ローディングからキャッチコピー表示まで */

const loadingAreaGrey = document.querySelector('#loading');

async function startLoadingAnimation() {
  const heroCopy = document.querySelector('.hero-copy__text');
  const loadingBg = document.querySelector('#loading-bg');

  const loadingText = loadingAreaGrey
    ? loadingAreaGrey.querySelector('p')
    : null;

  let copyText = '';

  // キャッチコピーを一旦隠す
  if (heroCopy) {
    copyText = heroCopy.textContent.trim();
    heroCopy.textContent = '';
    heroCopy.style.visibility = 'hidden';
  }

  // ローディング画面のアニメーション
  if (loadingAreaGrey) {
    await new Promise(resolve => setTimeout(resolve, 1200));

    const animations = [];

    // 青い背景を下から上へ動かして消す
    if (loadingBg) {
      const bgAnimation = loadingBg.animate(
        [
          {
            transform: 'translateY(0)',
            opacity: 1
          },
          {
            transform: 'translateY(-15%)',
            opacity: 0.85,
            offset: 0.45
          },
          {
            transform: 'translateY(-100%)',
            opacity: 0
          }
        ],
        {
          duration: 2400,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'forwards'
        }
      );

      animations.push(bgAnimation);
    }

    // ローディング中の文字をフェードアウト
    if (loadingText) {
      animations.push(
        loadingText.animate(
          [
            {
              opacity: 1,
              transform: 'translateY(0)'
            },
            {
              opacity: 0,
              transform: 'translateY(-8px)'
            }
          ],
          {
            duration: 700,
            delay: 200,
            easing: 'ease-out',
            fill: 'forwards'
          }
        )
      );
    }

    // アニメーションが終わるまで待つ
    await Promise.all(
      animations.map(animation => animation.finished)
    );

    loadingAreaGrey.style.visibility = 'hidden';
  }

  // キャッチコピーを1文字ずつ表示
  if (heroCopy) {
    [...copyText].forEach((char, index) => {
      const span = document.createElement('span');

      span.textContent = char === ' ' ? '\u00a0' : char;
      span.style.animationDelay = `${index * 0.11}s`;

      heroCopy.appendChild(span);
    });

    heroCopy.style.visibility = 'visible';
  }
}

// ページの読み込みが終わったら実行
if (document.readyState === 'complete') {
  startLoadingAnimation();
} else {
  window.addEventListener(
    'load',
    startLoadingAnimation,
    { once: true }
  );
}