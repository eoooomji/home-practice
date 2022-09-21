let data = 0;
if (data == 0) {
  console.log(`end`);
}

if (10) {
  console.log(`10`);
}

if (0) {
  console.log(`5`);
}

if (null) {
  console.log(`3`);
}

if (undefined) {
  console.log(`1`);
}

if ('') {
  console.log('9');
}

if (false) {
  console.log('21');
}

// ----------------------------

let num = 8;
if (num % 2 == 0) {
  console.log(`${num}의 값은 짝수입니다.`);
} else {
  console.log(`${num}의 값은 홀수입니다.`);
}

if (num % 2 == 1) {
  console.log(`${num}의 값은 홀수입니다.`);
} else {
  console.log(`${num}의 값은 짝수입니다.`);
}

// ------------------------------

let jumsu = 79;
if (jumsu >= 90) {
  console.log(`A`);
} else if (jumsu >= 80) {
  console.log(`B`);
} else if (jumsu >= 70) {
  console.log(`C`);
} else if (jumsu >= 60) {
  console.log(`D`);
} else {
  console.log(`F`);
}

let x = 'A';
let y = 'a';
if (x >= 'A' && x <= 'Z') {
  console.log(`${x}는 대문자입니다.`);
} else if (x >= 'a' && x <= 'z') {
  console.log(`${x}는 소문자입니다.`);
}
if (y >= 'A' && y <= 'Z') {
  console.log(`${y}는 대문자입니다.`);
} else if (y >= 'a' && y <= 'z') {
  console.log(`${y}는 소문자입니다.`);
}

console.log(`==================================`);

let number = 51;
switch (parseInt(number / 10)) {
  case 10:
    console.log('A');
    break;
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
}

let code = 'c300';
switch (code) {
  case 'a100':
    console.log(`채소류`);
    break;
  case 'b200':
    console.log(`육류`);
    break;
  case 'c300':
    console.log(`생선류`);
    break;
}

let year = 2000;
let animal = '';
switch (parseInt(year % 12)) {
  case 0:
    animal = '원숭이';
    break;
  case 1:
    animal = '닭';
    break;
  case 2:
    aniaml = '개';
    break;
  case 3:
    animal = '돼지';
    break;
  case 4:
    animal = '쥐';
    break;
  case 5:
    animal = '소';
    break;
  case 6:
    animal = '호랑이';
    break;
  case 7:
    animal = '토끼';
    break;
  case 8:
    animal = '용';
    break;
  case 9:
    animal = '뱀';
    break;
  case 10:
    animal = '말';
    break;
  case 11:
    animal = '양';
    break;
}
console.log(`${year}년도의 태생은 ${animal}띠입니다.`);
