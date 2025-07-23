export function startTypewriter(texts, style) {
  const el = document.getElementById("typewriter");

  let current = 0;

  function typeText({ text, font }, onComplete) {
    if (!el) return;
    el.className = `${style} ${font}`;
    el.textContent = "";
    const chars = text.split("");

    let i = 0;
    const typing = setInterval(() => {
      if (!el) return;
      el.textContent += chars[i];
      i++;
      if (i >= chars.length) {
        clearInterval(typing);
        setTimeout(onComplete, 1200);
      }
    }, 100);
  }

  function deleteText(onComplete) {
    if (!el) return;
    const chars = el.textContent.split("");

    let i = chars.length;
    const deleting = setInterval(() => {
      if (!el) return;
      el.textContent = chars.slice(0, i).join("");
      i--;
      if (i < 0) {
        clearInterval(deleting);
        onComplete();
      }
    }, 50);
  }

  function loop() {
    typeText(texts[current], () => {
      deleteText(() => {
        current = (current + 1) % texts.length;
        loop();
      });
    });
  }

  loop();
}
