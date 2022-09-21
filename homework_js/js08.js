for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let i, sum;
for (i = 1, sum = 0; ; i++) {
  sum += i;
  if (sum >= 30) break;
}
console.log(`i=${i}, sum=${sum}`);

let odd = 0;
let even = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    odd += i;
  } else {
    even += i;
  }
}
console.log(`짝수의 합 = ${even}`);
console.log(`홀수의 합 = ${odd}`);

for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    continue;
  }
  console.log(i);
}
console.log(`=====================`);

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
console.log(`=====================`);

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    process.stderr.write(`i=${i} j=${j},`);
  }
  process.stderr.write(`\n`);
}

console.log(`=====================`);

move: for (let i = 1; i <= 5; i++) {
  for (let j = 10; j <= 13; j++) {
    for (let k = 1; k <= 3; k++) {
      console.log(`i=${i} j=${j} k=${k}`);
      if (k == 2) break move;
    }
  }
}
