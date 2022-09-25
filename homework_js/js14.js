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
/*
0 string Sasb string
1 string Volvo string
2 string Bmw string
*/
let color = [];
console.log(color.length); // 0
color[0] = 'red';
console.log(color.length); // 1
color.push('green');
console.log(color.length); // 2
color.push(233);
console.log(color.length); // 3
color[8] = 'blue';
console.log(color.length); //8
console.log(color);
for (let idx in color) {
  console.log(idx, typeof idx, color[idx], typeof color[idx]);
}

let point = new Array(3);
console.log(point.length); // 3
let shape = new Array(10, 20);
console.log(shape.length); // 2
for (let idx in shape) {
  console.log(idx, typeof idx, shape[idx], typeof shape[idx]);
}
/*
0 string 10 number
1 string 20 number
*/
shape[2] = 50;
console.log(shape[1]); // 20
console.log(shape.length); // 3
console.log(shape); // [ 10, 20, 50 ]

shape.forEach(function (a, b) {
  console.log(b, a);
});
/*
0 10
1 20
2 50
*/
shape.forEach(function (a) {
  console.log(a);
});
/*
10
20
50
*/
shape.forEach((a, b) => console.log(b, a));
shape.forEach((a) => console.log(a));

const numbers = [4, 9, 16, 25];
const res = numbers.map(function (element, index) {
  return element * 2;
});
console.log(typeof numbers, numbers instanceof Object); // object true
console.log(typeof numbers, numbers instanceof Array); // object true
console.log(res, typeof res, res instanceof Array); // [ 8, 18, 32, 50 ] object true

const sqt = numbers.map(Math.sqrt);
console.log(sqt); // // [ 2, 3, 4, 5 ]

function getSum(a, b) {
  console.log(`${a}, ${b}, ${a + b}`);
  return a + b;
}
const sum = numbers.reduce(getSum);
console.log(sum); // 54

const ages = [32, 33, 16, 40];
const per = ages.filter(function (element, index) {
  return element >= 20;
});
console.log(per); // [32, 33, 40]

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
let data = fruits.toString();
console.log(data, typeof data); // Banana,Orange,Apple,Mango string

console.log(typeof fruits.join());
console.log(fruits.join()); // Banana,Orange,Apple,Mango
console.log(fruits.join('*')); // Banana*Orange*Apple*Mango
console.log(fruits.join('_')); // Banana_Orange_Apple_Mango

fruits[4] = 'Kiwi';
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
console.log(fruits.push('Melon')); // 6
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Melon' ]

console.log(fruits.pop()); // Melon
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(fruits.unshift('Melon')); // 6
console.log(fruits); // [ 'Melon', 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(fruits.shift()); // Melon
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

delete fruits[3];
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', <1 empty item>, 'Kiwi' ]
console.log(fruits[3]); // undefined

fruits[3] = 'Mango';
console.log(fruits); //
console.log(fruits); //

console.log(fruits.slice(1, 3)); // [ 'Orange', 'Apple' ]
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(fruits.slice(-4, -2)); // [ 'Orange', 'Apple' ]
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(fruits.slice(1)); // [ 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]
console.log(fruits); // [ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]

let point1 = [40, 100, 1, 5, 10];
console.log(point1.sort()); // [ 1, 10, 100, 40, 5 ]
console.log(point1.sort().reverse()); // [ 5, 40, 100, 10, 1 ]

console.log(
  point.sort(function (a, b) {
    console.log(`${a}, ${b}, ${a - b}`);
    return a - b;
  })
); // [ 1, 5, 10, 40, 100 ]

console.log(
  point.sort(function (a, b) {
    console.log(`${a}, ${b}, ${a - b}`);
    return b - a;
  })
); // [ 100, 40, 10, 5, 1 ]

let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData, [7, 8, 9]);
console.log(zData.length);
9;
console.log(zData); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr = [1, 3, [[[4, 5]], 6, [[7, 8]], [[9, 10]], 11]];
console.log(arr.flat()); // [ 1, 3, [ [ 4, 5 ] ], 6, [ [ 7, 8 ] ], [ [ 9, 10 ] ], 11 ]
console.log(arr); // [ 1, 3, [ [ [Array] ], 6, [ [Array] ], [ [Array] ], 11 ] ]
console.log(arr.flat(0)); // [ 1, 3, [ [ [Array] ], 6, [ [Array] ], [ [Array] ], 11 ] ]
console.log(arr.flat(1)); // [ 1, 3, [ [ 4, 5 ] ], 6, [ [ 7, 8 ] ], [ [ 9, 10 ] ], 11 ]
console.log(arr.flat(2)); // [ 1, 3, [ 4, 5 ], 6, [ 7, 8 ], [ 9, 10 ], 11 ]
console.log(arr.flat(3)); // [ 1, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(arr.flat(Infinity)); // [ 1, 3, 4, 5, 6, 7, 8, 9, 10, 11]
