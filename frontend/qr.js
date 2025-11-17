// --- GET Slot & Amount From URL ---

const params = new URLSearchParams(window.location.search);
const slot = params.get("slot");
const amount = params.get("amount");

// SHOW SLOT & AMOUNT
document.getElementById("slot-show").innerText = slot ? slot : "N/A";
document.getElementById("amount-show").innerText = amount ? "₹" + amount : "₹0";

// --- RANDOM PASS ID ---
function generatePassID() {
    return "PASS-" + Math.floor(100000 + Math.random() * 900000);
}

let passID = generatePassID();
document.getElementById("pass-number").innerText = "Pass No: " + passID;

// --- GENERATE QR ---
new QRCode(document.getElementById("qrcode"), {
    text: passID,
    width: 400,
    height: 400,
    colorDark: "#000",
    colorLight: "#fff",
});

// --- TRANSFER BUTTON (WHATSAPP SHARE) ---
document.querySelector(".transfer-btn").addEventListener("click", () => {

    const slot = document.getElementById("slot-show").innerText;
    const amount = document.getElementById("amount-show").innerText.replace("₹", "");

    let message = `Smart Parking Pass Transfer\n\nPass ID: ${passID}\nSlot: ${slot}\nAmount: ₹${amount}\n\nPlease use this pass at Entry/Exit gates.`;

    // Phone number with country code
    let phoneNumber = "919179926262";

    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappURL;
});



