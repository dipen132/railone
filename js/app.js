// Railone - Application Logic

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. High-Density Dynamic QR Code Generator
  const qrContainer = document.getElementById("qrcode");
  if (qrContainer && window.QRCode) {
    new QRCode(qrContainer, {
      text: "UTS:X53JEHL010|Kapadia Om Vipulkuma|ANKLESHWAR JN.-SURAT|270.00|30/10/2026-29/11/2026|MNBPK7746M",
      width: 175,
      height: 175,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
  }

  // 3. Dynamic Countdown Timer (Matches 04:55 starting counter)
  let timeLeft = 295; // 4 minutes 55 seconds
  const timerElem = document.getElementById("countdown");

  function updateCountdown() {
    if (!timerElem) return;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    timerElem.textContent = formatted;

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      timeLeft = 295; // Reset loop for demo
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
});
