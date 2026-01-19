// Confetti animation
function createConfetti() {
  const confettiContainer = document.querySelector('.confetti-container');
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#ff69b4'];
  
  // Clear existing confetti to prevent DOM bloat
  confettiContainer.innerHTML = '';
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
    confettiContainer.appendChild(confetti);
  }
}

// Create confetti on page load
let confettiInterval;
window.addEventListener('load', () => {
  createConfetti();
  
  // Recreate confetti every 5 seconds
  confettiInterval = setInterval(createConfetti, 5000);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (confettiInterval) {
    clearInterval(confettiInterval);
  }
});

// Add click effect to links using event delegation
document.querySelector('.links').addEventListener('click', function(e) {
  const link = e.target.closest('.link');
  if (!link) return;
  
  // Create a ripple effect
  const ripple = document.createElement('span');
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = 'rgba(255, 255, 255, 0.6)';
  ripple.style.width = '20px';
  ripple.style.height = '20px';
  ripple.style.left = e.clientX - link.getBoundingClientRect().left - 10 + 'px';
  ripple.style.top = e.clientY - link.getBoundingClientRect().top - 10 + 'px';
  ripple.style.animation = 'ripple 0.6s ease-out';
  ripple.style.pointerEvents = 'none';
  
  link.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
  
  console.log(`Navigating to: ${link.href}`);
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
