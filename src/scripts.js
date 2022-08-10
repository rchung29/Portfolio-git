const button = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#menu'); // Menu

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animatecss-fadeInUp');
    }
  });
});

const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animatecss-fadeInLeft');
    }
  });
});

const observer3 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animatecss-fadeInRight');
    }
  });
});


observer.observe(document.querySelector('#fadeInUp'));
observer.observe(document.querySelector('#fadeInUp2'));
observer2.observe(document.querySelector('#fadeInLeft'));
observer2.observe(document.querySelector('#fadeInLeft2'));
observer2.observe(document.querySelector('#fadeInLeft3'));
observer2.observe(document.querySelector('#fadeInLeft4'));
observer2.observe(document.querySelector('#fadeInLeft5'));
observer2.observe(document.querySelector('#fadeInLeft6'));
observer2.observe(document.querySelector('#fadeInLeft7'));
observer3.observe(document.querySelector('#fadeInRight'));
observer3.observe(document.querySelector('#fadeInRight2'));
observer3.observe(document.querySelector('#fadeInRight3'));