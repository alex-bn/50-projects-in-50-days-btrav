const container = document.getElementById('container');
const colors = [
  '#ff5733',
  '#ffbd33',
  '#dbff33',
  '#75ff33',
  '#33ff57',
  '#33ffbd',
  '#3F00FF',
  '#FF10F0',
];

const squares = 500;

for (let i = 0; i < squares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  container.appendChild(square);

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
