// js25.js

document.querySelector('.red').onclick = (e) => {
  alert('red');
};
document.querySelector('.green').onclick = (e) => {
  alert('green');
  e.stopPropagation();
};
document.querySelector('.blue').onclick = (e) => {
  alert('blue');
  e.stopPropagation();
};

document.querySelector('a').onclick = (e) => {
  alert('안녕하세요');
  //   e.preventDefault();
  //   return false;
};
