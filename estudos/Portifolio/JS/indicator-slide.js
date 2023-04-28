const indicator = document.querySelector('#indicator');
const maxHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
   const percentage = (window.scrollY / maxHeight) * 100;

   indicator.style.width = `${percentage}%`;
});

// document.querySelector("#itens").addEventListener("wheel", event => {
//    if (event.deltaY > 0) {
//       event.target.scrollBy(600, 0)
//    } else {
//       event.target.scrollBy(-600, 0)
//    }
// })
