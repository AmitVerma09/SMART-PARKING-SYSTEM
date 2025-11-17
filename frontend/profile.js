// Back arrow button functionality

document.addEventListener("DOMContentLoaded", () => {
  const backArrow = document.querySelector(".material-symbols-outlined");

  if (backArrow) {
    backArrow.addEventListener("click", () => {

      // Option 1: Go to previous page

      window.history.back();
    });
  }
});
