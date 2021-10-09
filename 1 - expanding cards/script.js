const panels = document.querySelectorAll('.panel');
console.log(panels); // - > prints a node list
console.log(panels[0]); // - > prints the first el

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}
