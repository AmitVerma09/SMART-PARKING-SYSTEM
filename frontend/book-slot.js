const params = new URLSearchParams(window.location.search);
const slotName = params.get('slot');
const slotBox = document.getElementById('slotBox');
if (slotBox) slotBox.textContent = slotName || "No Slot Selected";

const timeRange = document.getElementById('timeRange');
const priceBox = document.querySelector('.price');

function updatePrice() {
  const m = parseInt(timeRange.value);
  const price = (m / 10) * 20; // 10 min = ₹20
  priceBox.textContent = `₹${price}`;
}
timeRange.addEventListener('input', updatePrice);
updatePrice();

document.querySelector('.pay-btn').addEventListener('click', () => {
  const minutes = parseInt(timeRange.value);
  const price = (minutes / 10) * 20;

  const bookedSlots = JSON.parse(localStorage.getItem("bookedSlots")) || {};
  bookedSlots[slotName] = { price, time: minutes };
  localStorage.setItem("bookedSlots", JSON.stringify(bookedSlots));

  alert(`✅ Slot ${slotName} booked for ₹${price}`);
  window.location.href = "index.html";
});
