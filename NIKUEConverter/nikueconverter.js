function niku(n) {
  let cs = n.childNodes;
  for (let i = 0; i < cs.length; i++) {
    let c = cs[i];
    if (c.nodeType == Node.TEXT_NODE) {
      c.textContent = c.textContent.replace(/MIKUEC/g, "NIKUEC").replace(/mikuec/g, "nikuec").replace(/みくえっく/g, "にくえっく").replace(/ライブ/g, "焼き肉").replace(/ステージ/g, "プレート").replace(/曲目/g, "皿目").replace(/楽曲/g, "お肉").replace(/曲/g, "肉");
    }
    else {
      niku(c);
    }
  }
}

niku(document.body);