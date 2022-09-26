// js18.js

let myNode = document.getElementById('p2');
console.log(`${myNode}, ${myNode.innerText}`);

let ptNode = myNode.parentNode;
console.log(ptNode);

console.log(ptNode);
ptNode.style.color = 'blue';

let prevNode = myNode.previousSibling;
console.log(`${prevNode}`); // [object Text] 줄바꿈으로 인한 공백이 Text로 인식된다.

prevNode = prevNode.previousSibling;
console.log(`${prevNode}, ${prevNode.innerText}`);
// [object HTMLParagraphElement], content1

let nextNode = myNode.nextSibling;
console.log(`${nextNode}`); // [object Text]

nextNode = nextNode.nextSibling;
console.log(`${nextNode}, ${nextNode.innerText}`);
// [object HTMLParagraphElement], content3

let prevEleNode = myNode.previousElementSibling;
console.log(`${prevEleNode}, ${prevEleNode.innerText}`);
// [object HTMLParagraphElement], content1

let nextEleNode = myNode.nextElementSibling;
console.log(`${nextEleNode}, ${nextEleNode.innerText}`);
// [object HTMLParagraphElement], content3

let divNode = document.getElementById('wrap');
console.log(`${divNode}`);
// [object HTMLDivElement]

let divChildesNode = divNode.childNodes;
console.log(`${divChildesNode}`);
// [object NodeList]
console.log(divChildesNode, typeof divChildesNode);
// NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]

let divChildren = divNode.children;
console.log(`${divChildren}`);
console.log(divChildren);
console.log(divChildren[0]); // <p id="p1">content1</p>
console.log(divChildren.item(0)); // <p id="p1">content1</p>
console.log(divChildren.namedItem('p1')); // <p id="p1">content1</p>

let pNode = document.getElementById('p4');
let aNode = pNode.firstChild;
console.log(pNode);
console.log(aNode); // #text
aNode = pNode.firstElementChild;
console.log(aNode); // <img src="images/gosu.jpg" alt="영화배우 고수" />

let aAttrNode = aNode.getAttribute('src');
console.log(aAttrNode); // img/gosu.jpg
aAttrNode = aNode.src;
console.log(aAttrNode); // http://127.0.0.1:5501/img/gosu.jpg
aNode.setAttribute('title', '스타배우');
console.log(aNode.getAttribute('title')); // 스타배우
aNode.id = 'imGosu';
console.log(aNode.id); // imGosu
