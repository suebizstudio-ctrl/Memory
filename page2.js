window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none";
      document.getElementById("content").classList.remove("hidden");
    }, 1200);
  }, 2000);
});


// ===== LOVE LETTER =====
const envelope = document.getElementById("openLetter");
const modal = document.getElementById("letterModal");

if (envelope && modal) {
  envelope.addEventListener("click", () => {
    modal.style.display = "flex";
  });
}

function closeLetter() {
  modal.style.display = "none";
}
