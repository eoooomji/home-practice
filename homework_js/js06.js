let X = 3;
let Y = 4;
let sum = X + Y;
let A = 10;
let B = 4;
console.log(`sum=${sum}`); // 7
console.log(X - Y); // -1
console.log(X * Y); // 12
console.log(X / Y); // 0.75
console.log(X % Y); // 3
console.log(A / B); // 2.5
console.log(A % B); // 2
console.log(parseInt(A / B)); // 2
console.log(++X); // 4
console.log(X++); // 4
console.log(X); // 5
console.log(Y ** 2); // 16

console.log(`=================================`);

let left = true;
let right = false;

console.log(left && right);
console.log(left && left);
console.log(!left);
console.log(!right);

let a = 3;
let b = 5;
let c = 9;
// let count = b > a && ++c > 4;
// console.log(count, c);

// let count = b < a && ++c > 4;
// console.log(count, c);

// let count = b < a || ++c > 4;
// console.log(count, c);

// let count = b > a || ++c > 4;
// console.log(count, c);

console.log(`=================================`);

let numX = 5;
let numY = 5;
console.log(numX == numY);
console.log(numX === numY);

let objX = new Number(numX);
let objY = new Number(numY);
console.log(objX == objY);
console.log(objX === objY);

let dataX = 3;
let dataY = '3';
console.log(dataX == dataY);
console.log(dataX === dataY);

console.log(`=================================`);

let member = true;
let grade = 'VIP';
let count = 1000;
let res = member ? (grade == 'VIP' ? 0.3 : 0.2) : 0;
console.log(res * count);

console.log(`=================================`);

let z = 3;
let y = 4;
let summ = 0;
summ = z + y;
console.log(summ);
console.log(`${summ}`);

let data = 0;
data = data + z;
data += z;
console.log(`${data}`);

let result = z > y ? z++ : y++;
console.log(result, z, y);
