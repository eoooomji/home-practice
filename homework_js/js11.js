let year = 2000;
let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
let yearData = leapYearCheck ? '윤년' : '평년';
if (leapYearCheck) {
  console.log(`${year}년도는 ${yearData}입니다.`);
}

console.log(`====================================================`);
console.log(`=====함수로 바꿔서 코드 작성=====`);

function isLeapYear(year) {
  let check;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    check = true;
  } else {
    check = false;
  }
  return check;
}

year = 2013;
let result = isLeapYear(year);
if (result) {
  console.log(`${year}은 윤년입니다.`);
} else {
  console.log(`${year}은 평년입니다.`);
}

function add(a, b) {
  //   console.log(`a=${a}, b=${b}`);
  return a + b;
}
function addt(a, b, c) {
  return a + b + c;
}
console.log(add(2, 3)); // 6
console.log(add(1)); // NaN
console.log(addt(2, 3, 4)); // 9
console.log(add(1, 'script')); // 1script
console.log(add(1, null)); // 1 (null은 의도적으로 값이 비어있다는 표시이므로 NaN이라고 뜨지 않는다.)
console.log(addt(1, 2, 3, 4, 5)); // 6

console.log(`====================================================`);

function hello(name) {
  console.log(`${name}님 환영합니다.`);
}
hello('홍길동');
console.log(hello('고수')); // undefined : return값이 없어서 undefined라고 뜸

console.log(`====================================================`);

let sum = function (a, b) {
  return a + b;
};
console.log(sum);
console.log(sum(10, 20)); // 30

let hap = function (a, b) {
  console.log(a + b);
};
console.log(hap);
console.log(hap(20, 30)); // undefined
hap(20, 30); // 50

console.log(`====================================================`);

let sub = (a, b) => {
  return a + b;
};
console.log(sub(2, 7)); // 9

let call = (a, b) => {
  console.log(a + b);
};
call(6, 10); // 16
console.log(call(6, 10)); // undefined

console.log(`====================================================`);

let call2 = (a) => a;
console.log(call2(3)); // 3
let call3 = (a) => console.log(a);
console.log(call3(56)); // undefined
call3(56); // 56

console.log(`====================================================`);

function outer(a, b) {
  let result = inner(a, b);
  function inner(a, b) {
    return a + b;
  }

  return result;
}
console.log(outer(10, 3));

console.log(`====================================================`);

function callback(a, b) {
  return a + b;
}

function getNumber(callFunc) {
  console.log(`== : ${callFunc}`);
  let result = callFunc(1, 6);
  return result;
}

console.log(getNumber(callback));

console.log(`====================================================`);

function outerFun() {
  let sum = 50;
  function innerFun(a) {
    return sum + a;
  }
  return innerFun;
}
console.log(outerFun());

let outerCall = outerFun();
console.log(outerCall);
console.log(outerCall()); //NaN
console.log(outerCall(4)); //54

console.log(`====================================================`);

function testA() {
  console.log(`testA before`);
  testB();
  console.log(`testA after`);
}
function testB() {
  console.log(`testB before`);
  testC();
  console.log(`testB after`);
}
function testC() {
  console.log(`testC`);
}
testA();

console.log(`====================================================`);

function display(a = 0, b = 0) {
  console.log(`a=${a}, b=${b}`);
}
display(1);

function dp(...args) {
  console.log(args);
  console.log(typeof args, args instanceof Array);
}
dp(1, 2);
dp(1, 2, 3, 4, 5);
dp();

function dpy(num, ...args) {
  console.log(num);
  console.log(args);
}
dpy(1, 2);
dpy('asd', 3);
dpy();

console.log(`====================================================`);

function dip() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(typeof arguments, arguments instanceof Array, arguments.callee);
    console.log(arguments[i]);
  }
}
dip(1);
dip('1');
dip();
// dip(1, 2, 3, 4, 5);
