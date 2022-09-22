let data = 10;
let fData = Number(data);
let nObj = new Number(data);
// 다른 방식
// Number.prototype.toString = function(){} = let nObj = new Number(data);

console.log(typeof data); // number
console.log(typeof fData); // number
console.log(typeof nObj); // object

// toString() : string으로 바꿔줌
console.log(typeof nObj.toString); // string 객체에서 사용하는 메소드는 함수로 뜬다.
console.log(typeof nObj.toString()); // string()를 붙여주면 string으로 변한다.
console.log(typeof data.toString()); // 원시데이터타입에 '.'을 붙이면 객체로 변한다.

console.log(data + fData); // 20
console.log(data + nObj); // 20
console.log(data.toString() + nObj); // 1010

// valueOf() : primitive로 바꿔줌
console.log(typeof nObj.valueOf()); // number로 바뀜
console.log(typeof new String('javascript')); // object
console.log(typeof new String('javascript').valueOf()); // string

console.log(parseInt('10')); // 10
// parseInt : 실수를 정수로 바꿔줌
// let val = '10';
// let val = '10.0';
// let val = '10.3';
// let val = 'A';
// let val = '10A';
let val = 'A10';
console.log(val + val); // 1010 / 10.010.0 / 10.310.3 / AA / 10A10A / A10A10

// Number(), parseInt()
console.log(Number(val) + Number(val)); // 20 / 20 / 20.6 / NaN / NaN / NaN
console.log(parseInt(val) + parseInt(val)); // 20 / 20 / 20 / NaN / 20 / NaN
console.log(parseFloat(val) + parseFloat(val)); // 20 / 20 / 20.6 / NaN / 20 / NaN

console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NaN); // NaN
