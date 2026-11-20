// Railone - Application Logic

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. High-Density Dynamic QR Code Generator (200px size)
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

  // 3. Dynamic Rolling Slot-Machine Countdown Timer
  let timeLeft = 295; // 04:55
  const minElem = document.getElementById("timer-min");
  const reelElem = document.getElementById("ticker-reel");
  const currentSecElem = document.getElementById("current-sec");
  const nextSecElem = document.getElementById("next-sec");

  function tick() {
    if (!minElem || !reelElem || !currentSecElem || !nextSecElem) return;

    const currentMinutes = Math.floor(timeLeft / 60);
    const currentSeconds = timeLeft % 60;
    
    // Decrement for next state
    timeLeft = timeLeft > 0 ? timeLeft - 1 : 295;
    const nextMinutes = Math.floor(timeLeft / 60);
    const nextSeconds = timeLeft % 60;

    minElem.textContent = String(currentMinutes).padStart(2, '0');
    currentSecElem.textContent = String(currentSeconds).padStart(2, '0');
    nextSecElem.textContent = String(nextSeconds).padStart(2, '0');

    // Trigger vertical rolling transition
    reelElem.style.transition = 'none';
    reelElem.style.transform = 'translateY(0px)';

    // Force reflow
    void reelElem.offsetHeight;

    reelElem.style.transition = 'transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1)';
    reelElem.style.transform = 'translateY(-40px)';
  }

  // Run tick every second
  setInterval(tick, 1000);
});
