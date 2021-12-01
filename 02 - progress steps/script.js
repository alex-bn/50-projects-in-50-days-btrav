// bring elements from the DOM
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// Set the index of the current active el
let currentActive = 1;

// Setup event listeners
// Next button
next.addEventListener('click', () => {
  currentActive++;

  // set the boundaries
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

// Previous button
prev.addEventListener('click', () => {
  currentActive--;

  // set the boundaries
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

// Update DOM function
function update() {
  // set active/inactive
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // update the progress bar
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  // enable/disable buttons
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
