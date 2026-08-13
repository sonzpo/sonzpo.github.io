# szpL2E 松鼠坡學以致富 — 工程文件網站（繁體中文／English 雙語）

靜態網站，彙整 szpL2E（Sonzpo Learn-to-Earn）四份內部工程文件，提供繁體中文與英文兩種語言版本。

## 頁面結構

繁體中文（根目錄）：
- `index.html` — 總覽首頁
- `technical.html` — 技術架構規劃書 v1.1
- `wbs.html` — 任務拆解與魚骨圖規劃書 v2.0
- `roadmap.html` — 一鍵啟動階段化實踐計畫 v2.0
- `investor.html` — 投資人簡報書 v1.0

English（`en/` 資料夾，逐頁對應）：
- `en/index.html`
- `en/technical.html`
- `en/wbs.html`
- `en/roadmap.html`
- `en/investor.html`

每頁右上角皆有「中／EN」語言切換鈕，會導向對應語言的同一份文件（非首頁），方便閱讀到一半切換語言。

無建置流程，純 HTML／CSS／JS，可直接以 GitHub Pages 發佈。

## 發佈到 GitHub Pages

1. 將本資料夾（`css/`、`js/`、`en/`、五個中文 `.html`、`.nojekyll`）推送至 repo `sonzpo/szpL2E` 的 `main` 分支根目錄。
2. GitHub repo → **Settings → Pages** → Source 選擇 `main` 分支 `/ (root)`。
3. 儲存後，網站會發佈於：
   - 中文版：`https://sonzpo.github.io/szpL2E`
   - 英文版：`https://sonzpo.github.io/szpL2E/en/`

## 本機預覽

```bash
python3 -m http.server 8080
# 中文：http://localhost:8080
# 英文：http://localhost:8080/en/
```

## 技術說明

- 純靜態頁面，無框架、無建置步驟。
- 雙語採「獨立頁面」模式（非 JS 動態切換），對 SEO 與可維護性較友善；`en/` 內頁面透過相對路徑 `../css/main.css`、`../js/main.js` 共用同一套樣式與腳本。
- 字型：Google Fonts（Noto Serif TC／Noto Sans TC／JetBrains Mono），透過 CDN 載入。
- 十個頁面共用 `css/main.css`（設計系統）與 `js/main.js`（行動版選單、側欄捲動追蹤）。
- 語言切換鈕（`.lang-switch`）以相對路徑對應到同一份文件的另一語言版本，例如 `investor.html` ↔ `en/investor.html`。

## 更新內容時的注意事項

若之後更新中文內容，記得同步更新 `en/` 對應頁面的英文譯文，以及兩邊頁面中互相參照的錨點 ID（`id="market"`、`id="valuation"` 等）需保持一致，語言切換鈕與頁尾章節錨點連結才不會失效。

