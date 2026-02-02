/**
 * Smart Parking Payment Logic
 * Handles section switching, URL parameter initialization, and payment simulation.
 */

// -----------------------------------------------------------
// 1. Payment Method Toggling Logic
// -----------------------------------------------------------

function showPayment(method) {
    // Get all relevant elements
    const cardSection = document.getElementById('card-section');
    const upiSection = document.getElementById('upi-section');
    const cardTab = document.querySelector('.tab-button[onclick*="card"]');
    const upiTab = document.querySelector('.tab-button[onclick*="upi"]');

    if (method === 'card') {
        // Activate Card Section and Tab
        cardSection.classList.add('active-section');
        upiSection.classList.remove('active-section');
        cardTab.classList.add('active');
        upiTab.classList.remove('active');
    } else if (method === 'upi') {
        // Activate UPI Section and Tab
        cardSection.classList.remove('active-section');
        upiSection.classList.add('active-section');
        upiTab.classList.add('active');
        cardTab.classList.remove('active');
    }
}

// -----------------------------------------------------------
// 2. Initial Setup (URL Params & DOM Update)
// -----------------------------------------------------------

const p = new URLSearchParams(window.location.search);
const slot = p.get("slot") || "N/A";     // Default slot
const amount = p.get("amount") || "0.00"; // Default amount

// Update the main heading and the amount display on the button
document.querySelector("h2").textContent = `Confirm Payment`;
document.getElementById("amount-display").textContent = `₹${amount}`;

// Set default payment method on page load
document.addEventListener('DOMContentLoaded', () => {
    showPayment('card'); // Default to Card Payment
});

// -----------------------------------------------------------
// 3. Main Payment Processing Function
// -----------------------------------------------------------

function processPayment() {
    const payButton = document.querySelector('.pay-button');
    const loader = document.getElementById('loader');
    const successMsg = document.getElementById('successMsg');
    const activeSection = document.querySelector('.payment-section.active-section');

    // Reset UI state
    successMsg.style.display = 'none';
    payButton.disabled = true; // Disable button immediately
    payButton.style.opacity = '0.7';

    // --- Validation Logic based on Active Section ---
    let isValid = false;
    let paymentMethod = 'Unknown';
    let errorMessage = '';

    if (activeSection.id === 'card-section') {
        const card = document.getElementById("cardNumber").value.trim();
        const name = document.getElementById("name").value.trim();
        const expiry = document.getElementById("expiry").value.trim();
        const cvv = document.getElementById("cvv").value.trim();
        paymentMethod = 'Card';

        // Stricter Card Validation
        if (!card || card.replace(/\s/g, '').length !== 16) {
            errorMessage = "Please enter a valid 16-digit Card Number.";
        } else if (!name) {
            errorMessage = "Please enter Cardholder Name.";
        } else if (!expiry || !/^\d{2}\/\d{2}$/.test(expiry)) {
            errorMessage = "Please enter a valid Expiry Date (MM/YY).";
        } else if (!cvv || cvv.length !== 3 || isNaN(cvv)) {
            errorMessage = "Please enter a valid 3-digit CVV.";
        } else {
            isValid = true;
        }

    } else if (activeSection.id === 'upi-section') {
        const upi = document.getElementById("upi").value.trim();
        paymentMethod = 'UPI';

        // Stricter UPI Validation (must contain '@' and be at least 6 characters)
        if (!upi || upi.length < 6 || !upi.includes('@') || upi.startsWith('@') || upi.endsWith('@')) {
            errorMessage = "Please enter a valid UPI ID (e.g., username@bank).";
        } else {
            isValid = true;
        }
    }

    if (!isValid) {
        alert(errorMessage || `Please fill all required ${paymentMethod} details correctly.`);

        // Re-enable button immediately on validation failure
        payButton.disabled = false;
        payButton.style.opacity = '1';
        return;
    }

    // --- Start Processing Simulation ---
    loader.style.display = 'block';

    // 1. Simulate server processing time (2 seconds)
    setTimeout(() => {
        loader.style.display = 'none';
        successMsg.style.display = 'flex'; // Show "Payment Successful" message

        // 2. Simulate OTP/Authorization step (after 1.2 seconds)
        setTimeout(() => {
            let promptText = `Enter 4-digit OTP sent to your registered number for ${paymentMethod} payment (Demo: 1234)`;
            let otp = prompt(promptText);

            if (otp === "1234") {
                // Successful transaction: Redirect to QR page
                window.location.href = `qr.html?slot=${slot}&amount=${amount}`;

            } else {
                // Payment failed (Wrong OTP)
                alert("Wrong OTP entered. Payment failed! Please try again.");

                // Reset state for retry
                payButton.disabled = false;
                payButton.style.opacity = '1';
                successMsg.style.display = 'none';
            }
        }, 1200);
    }, 2000);
}