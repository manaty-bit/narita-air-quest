# NARITA AIR QUEST（デモ版）

2026年度 成田空港宿泊研修向け・4択クイズアプリ。

**重要：いま入っているのは動作確認のためのデモ問題6問です。正式な問題・解答は未収録です。**

## 1. まず手元で動かす

1. ダウンロードした ZIP を展開します（右クリック → すべて展開）。
2. フォルダー内の `index.html` をダブルクリックします。
3. ブラウザで動くことを確認します。インストールは不要です。

## 2. GitHub Pages で公開する（初めての方向け）

1. [GitHub](https://github.com/) にログインします（アカウントがなければ新規登録）。
2. 右上の `+` → `New repository` からリポジトリを作ります。名前は例として `narita-air-quest`。無料プランなら `Public` を選択し、`Create repository` を押します。
3. 作成したリポジトリ画面で `Add file` → `Upload files` を選びます。`index.html`, `style.css`, `app.js`, `questions.js`, `README.md` の**ファイルそのもの**をすべてアップロードします（ZIPのままアップロードしないでください）。
4. `Commit changes` を押します。
5. リポジトリの `Settings` → `Pages` を開きます。
6. `Build and deployment` → `Source` を `Deploy from a branch` にします。`Branch` を `main`、フォルダーを `/(root)` にし、`Save` を押します。
7. 公開されたリンクを開きます。通常は `https://ユーザー名.github.io/narita-air-quest/` になります。反映まで数分かかることがあります。

公開方法の公式説明: https://docs.github.com/ja/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 3. 問題の追加方法

`questions.js` だけを差し替えればOKです。今後、提供いただく問題・正解・解説からこちらで正式版を作成できます。

```js
{
  id: "q001",
  category: "飛行機の雑学",
  question: "問題文を入力",
  choices: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
  answer: 1, // 正解が B の場合（A:0, B:1, C:2, D:3）
  explanation: "なぜこの答えなのか、簡単な解説",
  source: "調査した資料"
}
```

GitHub上で更新する場合は `questions.js` を開き、右上の鉛筆マークから編集して `Commit changes` を押します。

## 4. アプリの仕様

- スマホ／Chromebook／PC対応
- 問題を重複なしでランダム出題
- ジャンル選択可能
- 4択・1問間違えたら終了
- 選択後に正解と解説を表示
- 連続正解数と自己ベスト記録（ブラウザの `localStorage`）
- 端末単位の記録だけで、オンラインランキングはありません
- キーボードの 1 / 2 / 3 / 4 キーで回答可能
- APIキー、サーバー、利用登録、外部ライブラリ不要

## 5. 安全に公開するための注意

- **GitHub Pages は通常、URLを知っている人だけではなくインターネットに公開されます。**
- 学生のフルネーム、クラス名＋出席番号、顔写真、メールアドレス、個人の成績データは公開しないでください。
- クイズデータ（問題・正解・解説）はWebブラウザから確認できます。テストのように答えを秘密にする用途には向きません。
- 教員の許可なく作問者名をWeb上に表示しない設計がおすすめです。
- 全校・班対抗ランキングは、個人情報と不正スコア対策を考えた別の仕組みが必要です。

## ファイル説明

- `index.html` : 画面の骨組み
- `style.css` : 見た目とスマホ対応
- `app.js` : クイズの動作とスコア処理
- `questions.js` : 問題・正解・解説のデータ（あとで差し替え）
