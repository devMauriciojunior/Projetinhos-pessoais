const indicator = document.querySelector('#indicator');
const maxHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
   const percentage = (window.scrollY / maxHeight) * 100;
   indicator.style.width = `${percentage}%`;
});

const stop = document.querySelector('.Stop');
stop.addEventListener('click', () => {
   window.scrollTo(0, 0);
});