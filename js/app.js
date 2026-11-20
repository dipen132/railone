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

  // 3. Countdown Timer - Starts at 05:00 and continues decrementing every second
  let timeLeft = 300; // 5 minutes 00 seconds
  const timerElem = document.getElementById("countdown");

  function updateTimer() {
    if (!timerElem) return;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    timerElem.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      timeLeft = 300; // Reset to 05:00 and continue
    }
  }

  // Immediate initial render and clean 1-second interval
  updateTimer();
  setInterval(updateTimer, 1000);
});
