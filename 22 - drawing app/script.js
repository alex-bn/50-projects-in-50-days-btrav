const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10; // default circle radius
let isPressed = false;
let color = 'black';
let x;
let y;

// when pressing the mouse click
canvas.addEventListener('mousedown', eventObject => {
  isPressed = true;

  x = eventObject.offsetX;
  y = eventObject.offsetY;

  // // test
  // console.log(x, y, isPressed);
});

// when releasing the mouse click
canvas.addEventListener('mouseup', eventObject => {
  isPressed = false;

  x = undefined;
  y = undefined;

  // // test
  // console.log(x, y, isPressed);
});

canvas.addEventListener('mousemove', eventObject => {
  if (isPressed) {
    const x2 = eventObject.offsetX;
    const y2 = eventObject.offsetY;

    // // test
    // console.log(x2, y2);

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    // to fix the strange effect
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);

  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2; // multiply by 2 to have a complete line/circle when drawing fast
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

increaseBtn.addEventListener('click', () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

colorEl.addEventListener('change', eventObj => {
  color = eventObj.target.value;
});

clearEl.addEventListener('click', () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);

// // test functions
// drawCircle(100, 200);
// drawLine(300, 300, 300, 500);
