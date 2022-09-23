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
