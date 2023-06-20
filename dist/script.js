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

const words = ['  App Development     ', '  Artificial Intelligence     ','  Business Intelligence     '];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();