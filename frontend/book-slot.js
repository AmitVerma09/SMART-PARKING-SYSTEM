const params = new URLSearchParams(window.location.search);
const slotName = params.get("slot");

// Show slot name

const slotBox = document.getElementById("slotBox");
if (slotBox) slotBox.textContent = slotName || "No Slot Selected";

// UPDATE PRICE BASED ON TIME

const timeRange = document.getElementById("timeRange");
const priceBox = document.querySelector(".price");

function updatePrice() {
  const m = parseInt(timeRange.value);
  const price = (m / 10) * 20; // 10 min = ₹20
  priceBox.textContent = `₹${price}`;
}
timeRange.addEventListener("input", updatePrice);
updatePrice();

// PAY BUTTON CLICK + VALIDATION

document.querySelector(".pay-btn").addEventListener("click", () => {

  // get input fields
  const userName = document.querySelectorAll("input")[0].value.trim();
  const mobile = document.querySelectorAll("input")[1].value.trim();
  const vehicleNo = document.querySelectorAll("input")[2].value.trim();

  // validation: if any empty → show message
  if (userName === "" || mobile === "" || vehicleNo === "") {
    alert("Please fill all details!");
    return;
  }

  // time & price
  const minutes = parseInt(timeRange.value);
  const price = (minutes / 10) * 20;

  // redirect to payment
  window.location.href = `payment.html?slot=${slotName}&amount=${price}&time=${minutes}`;
});
