// ===== コピー用テキスト =====
const PAGE_URL = "https://ryoya9595.github.io/abe-insta-kit/";
const GUIDE_URL = PAGE_URL + "setup.md";

const INSTALL_PROMPT = `「あべインスタ台本キット（my-abeinsta）」を今開いている作業フォルダに入れるのを手伝ってください。

【手順書】
${GUIDE_URL}

【進め方】
1. 手順書を curl（Windows は curl.exe）で取得して、全文を読んでください。
   ※ 要約して読むツールではなく、原文をそのまま読んでください。
   ※ 手順書のファイルは、このフォルダには保存しないでください（画面に出すか、一時フォルダへ）。
2. 手順書に書いてある順番で、1〜3手順ずつ、私に確認しながら進めてください。
3. 私はパソコンに詳しくないので、やさしい言葉で、短く説明してください。`;

const TEXTS = {
  pageUrl: PAGE_URL,
  installPrompt: INSTALL_PROMPT,
};

Object.entries(TEXTS).forEach(([id, text]) => {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
});

// ===== コピー処理 =====
async function copyText(text, target) {
  let ok = false;
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      ok = true;
    }
  } catch { ok = false; }
  if (!ok && target) {
    const range = document.createRange();
    range.selectNodeContents(target);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    sel.removeAllRanges();
  }
  return ok;
}

function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.dataset.target;
    const target = document.getElementById(targetId);
    const text = TEXTS[targetId] || (target ? target.textContent : "");
    const ok = await copyText(text, target);
    const original = button.textContent;
    button.textContent = ok ? "コピーしました" : "手動でコピー";
    button.classList.toggle("done", ok);
    showToast(ok ? "📋 コピーしました" : "コピーできませんでした");
    setTimeout(() => {
      button.textContent = original;
      button.classList.remove("done");
    }, 2000);
  });
});

// ===== ナビ現在地ハイライト =====
const navLinks = Array.from(document.querySelectorAll(".topnav a[href^='#']"));
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);
if ("IntersectionObserver" in window && sections.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const id = "#" + e.target.id;
        navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => obs.observe(s));
}
