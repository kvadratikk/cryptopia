const dropParent = document.querySelector('.drop-down-blocks');

dropParent.addEventListener('click', (e) => {
  const post = e.target.closest('.post');
  const question = post.querySelector('.question');
  const answer = post.querySelector('.answer');

  if (post.classList.contains('open')) {
    post.style.maxHeight = 0;
    post.classList.remove('open');
  } else {
    post.classList.add('open');
    post.style.maxHeight = `${
      post.offsetHeight + answer.offsetHeight + question.offsetHeight - 26
    }px`;
  }
});