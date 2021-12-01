// 1)
// const panels = document.querySelectorAll('.panel');
// console.log(panels); // - > prints a node list
// console.log(panels[0]); // - > prints the first el

// panels.forEach(panel => {
//   panel.addEventListener('click', () => {
//     removeActiveClasses();
//     panel.classList.add('active');
//   });
// });

// function removeActiveClasses() {
//   panels.forEach(panel => {
//     panel.classList.remove('active');
//   });
// }

// 2)
// Another implementation:
// const container = document.querySelector('.container');

// container.addEventListener('click', e => {
//   // remove active class
//   [...e.target.parentNode.children].forEach(panel =>
//     panel.classList.remove('active')
//   );

//   // add active to clicked panel
//   e.target.classList.add('active');
// });

// 3)
const container = document.querySelector('.container');
container.addEventListener('click', e => {
  const panel = e.target.closest('.panel');
  if (!panel) return;

  container
    .querySelectorAll('.panel')
    .forEach(panel => panel.classList.remove('active'));

  panel.classList.add('active');
});
