// js17.js

// 1번
// let hNode = document.getElementById('selector');
// console.log(hNode);

// 2번
// window.onload = function () {
//   let hNode = document.getElementById('selector');
//   console.log(hNode);
// };

let hNode = document.getElementById('selector');
console.log(hNode, typeof hNode); // object

// let hId = document.querySelector('#selector');
// console.log(hId, typeof hId);

// let hClass = document.querySelector('.choice');
// console.log(hClass, typeof hClass);

let pNode = document.getElementsByTagName('p');
console.log(pNode, typeof pNode); // HTMLCollection(4) [p, p, p, p] 'object'
console.log(pNode.length); // 4
console.log(pNode[0], pNode.item(0)); // pNode[] = pNode.item()
console.log(pNode[0].innerText); // content1

pNode[0].style.backgroundColor = 'blue';

function process() {
  alert('dd');
  let fname = document.frm.fname;
  console.log(`fname:`, fname);
  console.log(fname.value);
  console.log(fname.defaultValue);
  return false;
}
