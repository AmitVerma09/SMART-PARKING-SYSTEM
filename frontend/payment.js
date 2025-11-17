
const p = new URLSearchParams(window.location.search);
const slot = p.get("slot");
const amount = p.get("amount");

document.querySelector("h2").textContent = `Pay ₹${amount} for Slot ${slot}`;

function processPayment() {
    const card = document.getElementById("cardNumber").value.trim();
    const name = document.getElementById("name").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const upi = document.getElementById("upi").value.trim();

    if (!card || !name || !expiry || !cvv || !upi) {
        alert("Please fill all payment details!");
        return;
    }

    // Hide form, show loader
    document.getElementById("loader").style.display = "block";
    document.querySelector("button").disabled = true;

    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("successMsg").style.display = "block";

        // Simulate OTP step
        setTimeout(() => {
            let otp = prompt("Enter 4-digit OTP (Demo)");
            if (otp === "1234") {
                window.location.href = `qr.html?slot=${slot}&amount=${amount}`;

            } else {
                alert("Wrong OTP. Payment failed!");
                document.querySelector("button").disabled = false;
                document.getElementById("successMsg").style.display = "none";
            }
        }, 1000);
    }, 1500);
}