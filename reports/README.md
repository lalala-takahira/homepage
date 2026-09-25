# 活動報告ページの更新方法

活動ごとに `YYYY-MM-DD.html` という個別ページを置いています。新しい活動を追加する場合は、近い時期の記事をコピーし、日付、タイトル、本文、写真、Instagramへのリンク、前後の記事へのリンクを更新してください。ページの見た目は `../css/report-article.css` で共通管理しています。

各記事の `<base href="../">` により、写真や共通のヘッダー・フッターはホームページのルートから参照できます。写真ファイルは `../img/` に保存し、記事内では `src="img/写真名.jpg"` と書いてください。

写真を増やすときは、記事の `.report-article__gallery` の中に `<figure>` を追加します。最初の写真が大きく表示され、2枚目以降はその下に並びます。写真ごとに内容が伝わる代替テキストを付けてください。

```html
<figure>
    <img src="img/写真名.jpg" alt="写真の内容" loading="lazy">
    <figcaption>任意の説明文</figcaption>
</figure>
```

記事を追加したら、`../reports.html` の該当年の `.reports-grid` に一覧カードを追加し、トップページなどから記事を紹介するリンクも更新してください。一覧のメイン写真を変える場合は `../css/reports.css` の `.reports-index__hero::after` も更新します。一覧には昔の `reports.html#report...` リンクを引き継ぐため、既存カードに旧IDを残しています。
