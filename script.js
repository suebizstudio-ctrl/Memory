/* ===== ELEMENTS ===== */
const passwordInput = document.getElementById("password");
const buttons = document.querySelectorAll(".num");
const delBtn = document.querySelector(".delete");
const enterBtn = document.querySelector(".enter");
const card = document.querySelector(".lock-card");

/* ===== STATE ===== */
let value = "";
const CORRECT_PASSWORD = "1234"; // 🔐 เปลี่ยนรหัสตรงนี้

/* ===== INPUT NUMBER ===== */
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (value.length < 6) {
      value += btn.textContent;
      passwordInput.value = "•".repeat(value.length);
    }
  });
});

/* ===== DELETE ===== */
delBtn.addEventListener("click", () => {
  value = value.slice(0, -1);
  passwordInput.value = "•".repeat(value.length);
});

/* ===== ENTER ===== */
enterBtn.addEventListener("click", () => {
  if (value === CORRECT_PASSWORD) {
    // ✅ ถูก → แตกแสง
    card.classList.add("success");

    setTimeout(() => {
      window.location.href = "page2.html";
    }, 900);

  } else {
    // ❌ ผิด → สั่น
    card.classList.add("shake");

    setTimeout(() => {
      card.classList.remove("shake");
    }, 500);

    value = "";
    passwordInput.value = "";
  }
});
