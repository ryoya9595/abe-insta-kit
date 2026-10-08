# Claude Code 向け：「あべインスタ台本キット」のインストール手順

> 🤖 **Claude Code へ**：受講生がこのURLだけを貼って送ってきたら、これが今回の手順書です。curl（Windows は curl.exe）で全文を取得して、要約せず原文のまま読み、上から順に、1〜3手順ずつ受講生に確認しながら進めてください。受講生はパソコン初心者なので、やさしい言葉で短く話してください。手順書そのものは作業フォルダに保存しないでください。

> RISE「AI自動化講座」09回目の配布物。受講生はこのURLを Claude Code に貼って送るだけ。
> Claude Code は、下の「入れるファイル」21個を、作業フォルダの `.claude/skills/my-abeinsta/` の中に、同じフォルダ構成のまま保存する。
> ※ `~/.claude/skills`（パソコン全体）ではなく、**作業フォルダの中の `.claude/skills/`** に置くこと（スマホ・自動実行でも使えるようにするため）。
> 配布URL：https://ryoya9595.github.io/abe-insta-kit/setup.md

---

## このキットについて（受講生に一言で伝える）

> AI活用ジャンルの発信者・あべむつきさんの「リール台本の作り方」をまとめたスキルです。ネタを1つ渡すだけで、あべさんの型でリール台本のお手本を1本作ってくれます。
> ⚠️ できた台本は**お手本**です。そのまま自分の投稿に使うのはNGです（あべさんの実績を自分のものとして発信することになります）。参考にするのは型・構成・作り方の流れだけにしてください。

## 手順

### 1. 入れてよいか確認する
「作業フォルダの `.claude/skills/my-abeinsta/` に、あべインスタ台本キット（ファイル21個）を入れますね」と伝えて、OKをもらう。
すでに `.claude/skills/my-abeinsta/` があれば、上書きしてよいか先に聞く。

### 2. ファイルを入れる
作業フォルダで、下のコマンドを実行する（Mac・Windows どちらも Claude Code のコマンド実行でそのまま動く。Windows で curl が見つからないときは `curl` を `curl.exe` にする）。

```bash
B=https://ryoya9595.github.io/abe-insta-kit/kit
D=.claude/skills/my-abeinsta
for f in README.md SKILL.md data/01_profile/profile.md data/02_knowledge/_README.md data/02_knowledge/_example-rakuten-room.md data/04_post-samples/_README.md data/04_post-samples/_sample-claude-canva.md rules/01_writing-rules/writing-rules.md rules/02_ng-rules/ng-rules.md rules/03_post-patterns/ab-review.md rules/03_post-patterns/case-study.md rules/03_post-patterns/dialogue.md rules/03_post-patterns/honne-shucho.md rules/03_post-patterns/how-to.md rules/03_post-patterns/index.md rules/03_post-patterns/list.md rules/03_post-patterns/new-tool.md rules/03_post-patterns/qa.md rules/03_post-patterns/ranking.md rules/03_post-patterns/single-prompt.md rules/04_hooks/hooks.md; do mkdir -p "$D/$(dirname "$f")" && curl -fsSL "$B/$f" -o "$D/$f" || echo "失敗: $f"; done
```

### 3. 入ったか確かめる
- `.claude/skills/my-abeinsta/` の中のファイルが **21個** あること
- `.claude/skills/my-abeinsta/SKILL.md` の1行目が `---` で、`name: my-abeinsta` が入っていること
- 「失敗:」と出たファイルがあれば、そのファイルだけもう一度ダウンロードする

### 4. 受講生に伝える
- 「入りました！ **新しいスキルは、Claude Code を一度開き直す（またはこの作業フォルダで新しいセッションを開く）と「/」の一覧に出てきます**」
- 「開き直したら、入力欄に『/my』と打って `my-abeinsta` を選び、見てみたいネタを1つ送ってください（例：『朝の10分でできる時短家事』）」
- 「できた台本は**お手本**なので、そのまま投稿に使わないでくださいね。自分用の台本スキルは、第8回のスキル作成スキル（/my-skill-create）で作れます」
- 最後に「GitHubに上げて」と言ってもらうと、スマホや自動実行でも使えるようになる、と伝える

## やらないこと
- キットの中身（`data/`・`rules/`）を書き換えない
- 作業フォルダの `CLAUDE.md` には何も足さない（このキットは入れるだけで動く）
