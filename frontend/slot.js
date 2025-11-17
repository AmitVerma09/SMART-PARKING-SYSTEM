// All BOOK buttons
const buttons = document.querySelectorAll(".book-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {

    // Slot name get karo (example: A-1)
    const slotID = btn.parentElement.querySelector(".slot-id").innerText;

    // Redirect to booking page
    window.location.href = `book-slot.html?slot=${slotID}`;
  });
});
