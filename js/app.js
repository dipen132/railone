// Railone - Application Logic

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Dynamic QR Code Initialization
  const qrContainer = document.getElementById("qrcode");
  if (qrContainer && window.QRCode) {
    new QRCode(qrContainer, {
      text: "TICKET:X53JEHL010|USER:KAPADIA_OM_VIPULKUMAR|VALID:20261129",
      width: 170,
      height: 170,
      colorDark: "#111827",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
  }

  // 3. Dynamic Countdown Timer (5-minute window with rolling/ticker effect)
  let timeLeft = 295; // 04:55 to match the exact preview
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
      timeLeft = 300; // Reset loop for demo
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
});
