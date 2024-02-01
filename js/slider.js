const blocks = document.querySelector('.slider');
const arrows = blocks.querySelectorAll('.arrow');
const arrowLeft = arrows[0];
const arrowRight = arrows[1];
const slides = blocks.querySelectorAll('.group');

(() => {
  let startPoint;
  let moved = false;
  let currentSlideIdx = 0;

  const moveRight = () => {
    slides[currentSlideIdx++].classList.add('hidden');

    if (currentSlideIdx === slides.length) currentSlideIdx = 0;

    slides[currentSlideIdx].classList.remove('hidden');
  };

  const moveLeft = () => {
    slides[currentSlideIdx--].classList.add('hidden');

    if (currentSlideIdx === -1) currentSlideIdx = slides.length - 1;

    slides[currentSlideIdx].classList.remove('hidden');
  };

  arrowRight.addEventListener('click', () => moveRight());
  arrowLeft.addEventListener('click', () => moveLeft());

  blocks.addEventListener('touchmove', (e) => {
    if (moved) return;

    if (e.changedTouches[0].pageX > startPoint + blocks.offsetWidth / 4) {
      moved = true;
      moveLeft();
    }

    if (e.changedTouches[0].pageX < startPoint - blocks.offsetWidth / 4) {
      moved = true;
      moveRight();
    }
  });

  blocks.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startPoint = e.changedTouches[0].pageX;
  });

  blocks.addEventListener('touchend', () => {
    moved = false;
  });
})();