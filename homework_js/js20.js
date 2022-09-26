// js20.js

let chk = true;
let btn = document.getElementsByTagName('button')[0];
btn.onclick = process;
console.log(btn);

function process() {
  let divNode = document.getElementsByTagName('div')[0];
  if (chk) {
    divNode.style.backgroundColor = 'blue';
    chk = false;
  } else {
    divNode.style.backgroundColor = 'red';
    chk = true;
  }
}
