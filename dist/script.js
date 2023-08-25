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

document.addEventListener('DOMContentLoaded', () => {
  let prevScrollPos = window.scrollY;
  const navbar = document.getElementById('navbar');
  const navService = document.getElementById('nav_service');
  window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
      navbar.classList.remove('hidden');
    } else {
      navbar.classList.add('hidden');
    }

    if (currentScrollPos === 0) {
      navbar.classList.remove('shadow', 'fixed', 'w-full', 'z-40');
      navService.classList.remove('hidden');
    } else {
      navbar.classList.add('shadow-xl', 'fixed', 'w-full', 'z-40', 'ease-in-out', 'duration-300');
      navService.classList.add('hidden');
    }

    prevScrollPos = currentScrollPos;
  });
})

// cards slider for testimonial and related articles
document.addEventListener('DOMContentLoaded', function () {
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
// Function to check if it's the home page
function isHomePage() {
  return window.location.pathname === '/dist/' || window.location.pathname === '/';
}
// Home page word dissolving effect
// var word = ['Software Integration', 'Artificial Inteligence', 'Custom Software Solution'];
// var currentIndex = 0;

// function displayWord() {
//   var wordDisplay = document.getElementById("word-display");
// function displayWord() {
//   var wordDisplay = document.getElementById("word-display");

//   // Apply dissolve effect to hide the current word
//   wordDisplay.classList.remove("appear");
//   wordDisplay.classList.add("dissolve");
//   // Apply dissolve effect to hide the current word
//   wordDisplay.classList.remove("appear");
//   wordDisplay.classList.add("dissolve");

//   setTimeout(function () {
//     // Update the content with the new word
//     wordDisplay.textContent = word[currentIndex];
//   setTimeout(function () {
//     // Update the content with the new word
//     wordDisplay.textContent = word[currentIndex];

//     // Apply appear effect to show the new word
//     wordDisplay.classList.remove("dissolve");
//     wordDisplay.classList.add("appear");
//     // Apply appear effect to show the new word
//     wordDisplay.classList.remove("dissolve");
//     wordDisplay.classList.add("appear");

//     currentIndex++;
//     currentIndex++;

//     if (currentIndex >= word.length) {
//       currentIndex = 0;
//     }

//     setTimeout(displayWord, 3000);
//   }, 2000);
// }

// if (isHomePage()) {
//   displayWord();
// }

// Home page worder changer with typewriter effect
const words = ['  App Development  ', '  Artificial Intelligence  ', '  Business Intelligence  '];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 200);
}

type();

// google reCAPTCHA
grecaptcha.ready(function () {
  grecaptcha.execute("6LdlG8YmAAAAAHn7IaOetjvTqulE42vgHzpoJWOG")
    .then(function (token) {
      document.getElementById('captchaResponse').value = token;
    });
});

function displayFileName(fileInputId, fileNameId) {
  var fileInput = document.getElementById(fileInputId);
  var fileNameLabel = document.getElementById(fileNameId);
  fileNameLabel.textContent = fileInput.files[0].name;
}
