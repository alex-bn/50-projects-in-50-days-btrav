const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

//
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  // effectively we are saying that triggerBottom is 80% of window.innerHeight

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
