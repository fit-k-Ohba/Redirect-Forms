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
        if (id === '1') dest = 'https://forms.office.com/r/xh252QYDdm'; //オレンジ
        else if (id === '2') dest = 'https://forms.office.com/r/V4s7NNgZCC'; //多目的室
        else if (id === '3') dest = 'https://calendar.google.com/calendar/embed?ctz=Asia/Tokyo&showTabs=0&showPrint=0&showTz=0&showTitle=0&title=%E4%BA%88%E7%B4%84%E7%8A%B6%E6%B3%81&src=Y18xODg4ZjBkNGV1bGVnajd2Z3FhYmlnbzJqOGxxZ0ByZXNvdXJjZS5jYWxlbmRhci5nb29nbGUuY29t&src=Y18xODhibXBsYXFvdjIwaHZvbDdzNGRkOXF0dGdydUByZXNvdXJjZS5jYWxlbmRhci5nb29nbGUuY29t&color=%23f4511e&color=%238e24aa'; //予約状況

        if (dest) {
            // 履歴を残さないように replace を使用
            window.location.replace(dest);
            return;
        }
    }
});
