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

const btn = document.querySelector('.menu')
const btnIcon = document.querySelector('.menu i')
const menuSus = document.querySelector('.menu-suspenso')

   btn.onclick = function () {
      menuSus.classList.toggle('aberto')
      const estaAberto = menuSus.classList.contains('aberto')

      btnIcon.classList = estaAberto
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
      }