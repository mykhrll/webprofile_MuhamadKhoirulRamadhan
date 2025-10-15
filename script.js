// === Dark Mode ===
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// === Page Navigation ===
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-section');
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

// === Music ===
const music = document.getElementById('background-music');
const playBtn = document.getElementById('play-pause');
let isPlaying = false;

playBtn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    playBtn.textContent = '⏸';
  } else {
    music.pause();
    playBtn.textContent = '🎵';
  }
  isPlaying = !isPlaying;
});

// === Typing Effect ===
const typingText = document.getElementById('typing-text');
const textToType = "Hai, Saya Muhamad Khoirul Ramadhan";
let index = 0;
function typeEffect() {
  if (index < textToType.length) {
    typingText.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
typeEffect();

// === Form ===
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Pesan berhasil dikirim! Terima kasih.');
  form.reset();
});