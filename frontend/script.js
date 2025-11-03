document.addEventListener("DOMContentLoaded", () => {

  //  Profile Popup Toggle

  const profileBtn = document.getElementById('profileBtn');
  const profilePopup = document.getElementById('profilePopup');
  const closePopup = document.getElementById('closePopup');

  if (profileBtn && profilePopup && closePopup) {
    profileBtn.addEventListener('click', () => {
      profilePopup.classList.toggle('active');
    });

    closePopup.addEventListener('click', () => {
      profilePopup.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
      if (!profilePopup.contains(e.target) && e.target !== profileBtn) {
        profilePopup.classList.remove('active');
      }
    });
  }

 
  // Slot Booking Logic
  
  const bookedSlots = JSON.parse(localStorage.getItem("bookedSlots")) || {};

  document.querySelectorAll(".slot").forEach(slot => {
    const slotId = slot.querySelector(".slot-id").textContent.trim();
    const bookBtn = slot.querySelector(".book-btn");

    // If slot already booked → show car image + price

    if (bookedSlots[slotId]) {
      slot.classList.add("booked");

      // Car image element

      const carImg = document.createElement("img");
      carImg.src = "../images/car.png"; 
      carImg.classList.add("car-img");
      carImg.alt = "car";

      // Price element

      const priceTag = document.createElement("span");
      priceTag.classList.add("price");
      priceTag.textContent = `₹${bookedSlots[slotId].price}`;

      // Append image + price

      slot.appendChild(carImg);
      slot.appendChild(priceTag);

      // Disable button

      bookBtn.textContent = "BOOKED";
      bookBtn.disabled = true;
    }

    // BOOK button → go to booking page
    
    bookBtn.addEventListener("click", () => {
      window.location.href = `book-slot.html?slot=${slotId}`;
    });
  });
});


