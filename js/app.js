// Railone - Application Logic

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. High-Density Dynamic QR Code Generator (200px)
  const qrContainer = document.getElementById("qrcode");
  if (qrContainer && window.QRCode) {
    new QRCode(qrContainer, {
      text: "UTS:X53JEHL010|Kapadia Om Vipulkuma|ANKLESHWAR JN.-SURAT|270.00|30/10/2026-29/11/2026|MNBPK7746M",
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
  }

  // 3. Clean Countdown Timer - 1 Tick Per Second
  let timeLeft = 295; // Exactly 04:55
  const timerElem = document.getElementById("countdown");

  function updateTimer() {
    if (!timerElem) return;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    // Updates once every second cleanly
    timerElem.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      timeLeft = 295; // Loop for demo
    }
  }

  setInterval(updateTimer, 1000);
});
