let scores = [100, 90, 100];
console.log(scores);

console.log(scores[0]);
console.log(scores[1]);
console.log(scores[2]);
console.log(scores[3]);
console.log(scores.length);

let person = ['John', 'Doe', 26, true];
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}

let student = ['홍길동', [100, 90, 20]];
for (let idx in student) {
  console.log(student[idx], typeof student[idx]);
  console.log(idx);
}
for (let element of student) {
  console.log(element);
}
console.log(student);

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

shape.forEach(function (element, index) {
  console.log(index, element);
});
