// js26.js

let btn = document.querySelector('button');

// btn.onclick = () => {
//   alert('click1');
// };

// btn.onclick = () => {
//   alert('click2');
// };

function click1() {
  alert('click1');
}
function click2() {
  alert('click2');
}

btn.addEventListener('click', click1, false);
btn.addEventListener('click', click2, false);
