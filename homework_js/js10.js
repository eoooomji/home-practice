let color = ['red', 'green', 'blue'];
console.log(color[0]); // = red
console.log(color[1]); // = green
console.log(color[2]); // = blur
console.log(color[3]); // = undefined
console.log(color.length); // 배열 안의 요소 개수 값 = 3
for (let index = 0; index <= 2; index++) {
  console.log(color[index]); // red green blue
}
/* index = 0 > red / index = 1 > green / index = 2 > blue */
color[3] = 'black';
console.log(color.length);
/* 4 이유 : color[3]으로 4번째 배열의 값에 black을 주어서 요소 개수가 4개로 늘어남. */
for (let index = 0; index < color.length; index++) {
  console.log(color[index]); // red green blue black
}

console.log(`=====================`);

let city = ['서울', '부산', '대전'];
for (let idx in city) {
  console.log(city[idx]);
}

let obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
  console.log(prop, obj[prop]);
}

console.log(`=====================`);

let color2 = ['red', 'green', 'blue'];
for (let element of color2) {
  console.log(element);
}
let subject = 'script';
for (let idx in subject) {
  console.log(idx);
}
for (let element of subject) {
  console.log(element);
}

let t = { a: 1, b: 2, c: 3 };
for (let value of t) {
  console.log(value);
}
