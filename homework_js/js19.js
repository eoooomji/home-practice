// js19.js

let pNode = document.getElementById('wrap');
console.log(`${pNode.nodeType}, ${pNode.nodeName}, ${pNode.nodeValue}`);
// 1, P, null

let pAttr = pNode.attributes;
console.log(pAttr, typeof pAttr);
// NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}

console.log(pAttr[0]); // id="wrap"
console.log(pAttr.id); // id="wrap"
console.log(pAttr.length); // 2
console.log(
  `${pAttr[0].nodeType}, ${pAttr[0].nodeName}, ${pAttr[0].nodeValue}`
); // 2, id, wrap
console.log(
  `${pAttr[1].nodeType}, ${pAttr[1].nodeName}, ${pAttr[1].nodeValue}`
); // 2, class, chk

let pIdAttr = pNode.getAttribute('id');
console.log(pIdAttr); // wrap

let textNode = pNode.firstChild;
console.log(textNode); // "content"

console.log(
  `${textNode.nodeType}, ${textNode.nodeName}, ${textNode.nodeValue}`
); // 3, #text, content

let bodyName = document.getElementsByTagName('body')[0];
console.log(bodyName.innerText); // content
console.log(bodyName.innerHTML); // 모든걸 가져온다.

let fname = document.querySelector('#fname');
console.log(fname.value); // 홍길동

let fname1 = document.querySelector('.fname');
console.log(fname.value);
// js19.js:39 Uncaught TypeError: Cannot read properties of null (reading 'value')
