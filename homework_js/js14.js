let scores = [100, 90, 100];
console.log(scores);

console.log(scores[0]); // 100
console.log(scores[1]); // 90
console.log(scores[2]); // 100
console.log(scores[3]); // undefined
console.log(scores.length); // 3

let person = ['John', 'Doe', 26, true];
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}
/* result : 
John string
Doe string
26 number
true boolean
*/

let student = ['홍길동', [100, 90, 20]];
for (let idx in student) {
  console.log(idx);
  console.log(student[idx], typeof student[idx]);
}
/*
0
홍길동 string
1
[100, 90, 20] object
홍길동
*/
for (let element of student) {
  console.log(element);
}
console.log(student);
/*
홍길동
[100, 90, 20]
[ '홍길동', '100, 90, 20']
*/

let cars = new Array();
let Cars = new Array('Sasb', 'Volvo', 'Bmw');
for (let idx in Cars) {
  console.log(idx, typeof idx, Cars[idx], typeof Cars[idx]);
}

let color = [];
console.log(color.length);
color[0] = 'red';
console.log(color.length);
color.push('green');
console.log(color.length);
color.push(233);
console.log(color.length);
color[8] = 'blue';
console.log(color.length);
console.log(color);
for (let idx in color) {
  console.log(idx, typeof idx, color[idx], typeof color[idx]);
}

let point = new Array(3);
console.log(point.length);
let shape = new Array(10, 20);
console.log(shape.length);
for (let idx in shape) {
  console.log(idx, typeof idx, shape[idx], typeof shape[idx]);
}
shape[2] = 50;
console.log(shape[1]);
console.log(shape.length);
console.log(shape);

shape.forEach(function (a, b) {
  console.log(b, a);
});
shape.forEach(function (a) {
  console.log(a);
});
shape.forEach((a, b) => console.log(b, a));
shape.forEach((a) => console.log(a));

const numbers = [4, 9, 16, 26];
const res = numbers.map(function (element, index) {
  return element * 2;
});
console.log(typeof numbers, numbers instanceof Object);
console.log(typeof numbers, numbers instanceof Array);
console.log(res, typeof res, res instanceof Array);
