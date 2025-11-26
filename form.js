// クエリパラメータをオブジェクトで返す
function getQueryParams() {
    return Object.fromEntries(new URLSearchParams(window.location.search).entries());
}

// 個別のパラメータを取得（存在しなければdefaultValue）
function getQueryParam(name, defaultValue = null) {
    const p = new URLSearchParams(window.location.search);
    return p.has(name) ? p.get(name) : defaultValue;
}

document.addEventListener('DOMContentLoaded', function () {
    const urlSpan = document.getElementById('urlparam');
    const paramsPre = document.getElementById('params');
    urlSpan.textContent = window.location.href;
    const params = getQueryParams();
    paramsPre.textContent = JSON.stringify(params, null, 2);

    // id によるリダイレクト処理
    const id = getQueryParam('id');
    if (id !== null) {
        let dest = null;
        if (id === '1') dest = 'https://www.google.com';
        else if (id === '2') dest = 'https://www.youtube.com';

        if (dest) {
            // 履歴を残さないように replace を使用
            window.location.replace(dest);
            return;
        }
    }
});