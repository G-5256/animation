const closedFace= document.querySelector('.closed');
//for id s use # class . to select by const 
const openFace=document.querySelector('.open');

//AddEvent Listner

closedFace.addEventListener('click',()=> {
    if(openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});
openFace.addEventListener('click',()=> {
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
});

const circle = document.querySelector('#circle');

circle.addEventListener('mouseenter', () => {
  if (!circle.classList.contains('hover')) {
    circle.classList.add('hover');
  }
});

circle.addEventListener('mouseleave', () => {
  if (circle.classList.contains('hover')) {
    circle.classList.remove('hover');
  }
});
// const closedFace = document.querySelector('.closed');
// const openFace = document.querySelector('.open');

// // Add event listener
// closedFace.addEventListener('click', () => {
//   if (openFace.classList.contains('open')) {
//     openFace.classList.add('active');
//     closedFace.classList.remove('active');
//   }
// });

// openFace.addEventListener('click', () => {
//   if (closedFace.classList.contains('closed')) {
//     closedFace.classList.add('active');
//     openFace.classList.remove('active');
//   }
// });