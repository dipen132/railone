// Railone - Application Logic
// Production-grade implementation for Indian Railways UTS Season Ticket

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Vector Icons
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

  // 3. Smooth Downward Rolling Countdown Timer (Strictly 1 Tick Per Second)
  let timeLeft = 300; // 05:00
  const minElem = document.getElementById("timer-min");
  const track = document.getElementById("ticker-track");
  const currDigit = document.getElementById("digit-curr");
  const nextDigit = document.getElementById("digit-next");

  let isRolling = false;

  // Initialize display state
  if (minElem && currDigit && nextDigit && track) {
    const initM = Math.floor(timeLeft / 60);
    const initS = timeLeft % 60;
    minElem.textContent = String(initM).padStart(2, '0');
    currDigit.textContent = String(initS).padStart(2, '0');
    nextDigit.textContent = String((initS + 59) % 60).padStart(2, '0');
    track.style.transition = 'none';
    track.style.transform = 'translateY(-50px)';
  }

  function tick() {
    if (!minElem || !track || !currDigit || !nextDigit) return;
    if (isRolling) return;

    // Calculate current and upcoming time
    const currentM = Math.floor(timeLeft / 60);
    const currentS = timeLeft % 60;

    timeLeft = timeLeft > 0 ? timeLeft - 1 : 300;

    const nextM = Math.floor(timeLeft / 60);
    const nextS = timeLeft % 60;

    // Prepare next digit above in track
    nextDigit.textContent = String(nextS).padStart(2, '0');
    currDigit.textContent = String(currentS).padStart(2, '0');
    track.style.transition = 'none';
    track.style.transform = 'translateY(-50px)';

    // Force browser reflow to register reset position
    void track.offsetHeight;

    // Trigger smooth downward roll into view (280ms duration)
    isRolling = true;
    track.style.transition = 'transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1)';
    track.style.transform = 'translateY(0)';

    // Update minutes synchronously when seconds wrap
    if (currentS === 0) {
      minElem.textContent = String(nextM).padStart(2, '0');
    }

    // Reset after transition finishes
    setTimeout(() => {
      track.style.transition = 'none';
      currDigit.textContent = String(nextS).padStart(2, '0');
      track.style.transform = 'translateY(-50px)';
      isRolling = false;
    }, 290);
  }

  // Tick strictly once every 1000ms
  setInterval(tick, 1000);
});
