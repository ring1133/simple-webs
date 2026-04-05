/* script.js */
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const gameContainer = document.getElementById('game-container');
const apologyContainer = document.getElementById('apology-container');
let noClickCount = 0;
let noBtnSize = 1;

noBtn.addEventListener('click', () => {
    noClickCount++;
    noBtnSize += 0.2; // Increase size by 20% each click
    noBtn.style.transform = `scale(${noBtnSize})`;

    // Add bounce animation
    noBtn.classList.add('bounce');
    setTimeout(() => {
        noBtn.classList.remove('bounce');
    }, 300);

    if (noClickCount === 5) {
        noBtn.classList.add('hidden'); // Disappear after 5 clicks
    }
});

yesBtn.addEventListener('click', () => {
    // Add bounce animation
    yesBtn.classList.add('bounce');
    setTimeout(() => {
        yesBtn.classList.remove('bounce');
    }, 300);

    // Smooth transition to apology message
    gameContainer.classList.add('hidden');
    setTimeout(() => {
        apologyContainer.classList.remove('hidden');
    }, 500); // Wait for the fade-out transition to complete
});

// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration between 2 and 5 seconds
    document.querySelector('.heart-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove heart after 5 seconds
}

setInterval(createHeart, 300); // Create a new heart every 300 milliseconds