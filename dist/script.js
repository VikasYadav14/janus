document.addEventListener('DOMContentLoaded', function() {
  const testimonialCards = Array.from(document.querySelectorAll('.testimonial-card'));
  const testimonialBtns = document.querySelectorAll('.testimonial-btn');
  let numVisibleCards;

  function updateNumVisibleCards() {
    if (window.innerWidth < 768) {
      numVisibleCards = 1; // For mobile view, show 1 card at a time
    } else {
      numVisibleCards = isPortfolioPage() ? 3 : 2;
    }
  }

  function showCards() {
    testimonialCards.forEach((card, index) => {
      if (index < numVisibleCards) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function showNextCards() {
    testimonialCards.push(...testimonialCards.splice(0, numVisibleCards));
    showCards();
  }

  function showPreviousCards() {
    testimonialCards.unshift(...testimonialCards.splice(-numVisibleCards));
    showCards();
  }

  function isPortfolioPage() {
    return window.location.href.includes("portfolio");
  }

  testimonialBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('previous')) {
        showPreviousCards();
      } else if (target.classList.contains('next')) {
        showNextCards();
      }
    });
  });

  // Update number of visible cards on window resize
  window.addEventListener('resize', updateNumVisibleCards);

  // Show initial cards
  updateNumVisibleCards();
  showCards();
});


// navbar script

// Burger menus
document.addEventListener('DOMContentLoaded', function () {
  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');

  if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
          burger[i].addEventListener('click', function () {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  // close
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (close.length) {
      for (var i = 0; i < close.length; i++) {
          close[i].addEventListener('click', function () {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener('click', function () {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }
});

const dynamicText = document.getElementById('dynamic-text');
const keywords = ['Web Development', 'Artificial Intelligence','Business Intelligence','App Development'];
let currentIndex = 0;

function changeText() {
  dynamicText.innerText =`${keywords[currentIndex]}`;
  currentIndex++;
  if (currentIndex >= keywords.length) {
    currentIndex = 0;
  }
}

setInterval(changeText, 2000);
