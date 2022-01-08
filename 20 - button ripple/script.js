const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);

    const buttonLeft = e.target.offsetLeft; // x axis
    const buttonTop = e.target.offsetTop; // y axis
    // console.log(buttonTop, buttonLeft);

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    // console.log(xInside, yInside);

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);

    // cleanup the DOM
    setTimeout(() => circle.remove(), 500);
  });
});
