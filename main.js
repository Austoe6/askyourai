document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.parentElement.querySelector("p").textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    const previous = button.textContent;
    button.textContent = "Copied";
    button.classList.add("done");
    setTimeout(() => {
      button.textContent = previous;
      button.classList.remove("done");
    }, 1400);
  });
});
