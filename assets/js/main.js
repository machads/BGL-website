document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const splashLogo = document.getElementById('splash-logo'); // ロゴ要素を取得
    const body = document.body;
    const hasVisited = sessionStorage.getItem('hasVisited');

    // スプラッシュスクリーンとロゴが存在し、かつ未訪問の場合
    if (splashScreen && splashLogo && !hasVisited) {
        body.classList.add('loading');
        sessionStorage.setItem('hasVisited', 'true');

        // ロゴのアニメーション完了を待つ
        splashLogo.addEventListener('animationend', () => {
            // スクリーンのフェードアウトを開始
            splashScreen.classList.add('hidden');
            
            // この時点でスクロールを有効にする
            body.classList.remove('loading');

            // フェードアウトのトランジション完了を待つ
            splashScreen.addEventListener('transitionend', () => {
                // 要素を完全に非表示にして、操作をブロックしないようにする
                splashScreen.style.display = 'none';
            }, { once: true });

        }, { once: true });

    } else if (splashScreen && hasVisited) {
        // 訪問済みの場合は、即座に非表示
        splashScreen.style.display = 'none';
        body.classList.remove('loading');
    } else {
        // スプラッシュがないページでは、常に操作可能
        body.classList.remove('loading');
    }
});