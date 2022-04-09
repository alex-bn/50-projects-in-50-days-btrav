// event bubbling & event propagation

const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', event => {
  // console.log('click');
  // console.log(event.target.innerText);

  if (event.target.parentNode.classList.contains('rating')) {
    // console.log(event.target);
    removeActive();
    event.target.parentNode.classList.add('active');
    if (event.target.nextElementSibling) {
      selectedRating = event.target.nextElementSibling.innerHTML;
      console.log(selectedRating);
    } else {
      selectedRating = event.target.innerHTML;
      console.log(selectedRating);
    }
  }
});

sendBtn.addEventListener('click', e => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}
