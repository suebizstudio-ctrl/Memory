const CORRECT_PASSWORD = "1234";   // 🔒 ตั้งรหัสตรงนี้

const input = document.getElementById("password");
const nums = document.querySelectorAll(".num");
const del = document.querySelector(".delete");
const enter = document.querySelector(".enter");

let value = "";

/* กดตัวเลข */
nums.forEach(btn => {
  btn.addEventListener("click", () => {
    if (value.length < 6) {
      value += btn.textContent;
      input.value = "•".repeat(value.length);
    }
  });
});

/* ลบ */
del.addEventListener("click", () => {
  value = value.slice(0, -1);
  input.value = "•".repeat(value.length);
});

/* ยืนยัน */
enter.addEventListener("click", () => {
  if (value === CORRECT_PASSWORD) {

    // เอฟเฟคผ่าน
    document.querySelector(".lock-card").classList.add("success");

    setTimeout(() => {
      window.location.href = "page2.html"; // 👉 หน้าถัดไป
    }, 900);

  } else {

    // เอฟเฟคผิด
    document.querySelector(".lock-card").classList.add("error");

    setTimeout(() => {
      document.querySelector(".lock-card").classList.remove("error");
      value = "";
      input.value = "";
    }, 600);

  }
});
