/*
[문제1]
아래 배열에서 undefined을 제외한 합계와 평균을 계산하는 프로그램을 구현하세요.

[데이터]
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

[출력결과]
합계: 15
평균: 3

*/

let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];
let num = arr.filter((element) => element != undefined);
let sum = num.reduce((a, b) => a + b);
let ave = num.reduce((a, b) => a + b / num.length);

console.log(num);
console.log(`합계: ${sum}`);
console.log(`평균: ${Math.floor(ave)}`);

/*
 [문제2] 
  2차원 배열의 데이터를 이용해서 합계와 평균을 계산하는 프로그램을 구현하세요.
 [데이타]
 [['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75]];

  
 <출력결과]
 [[ '홍길동', 90, 85, 40, 215, 71.67 ],
  [ '이영희', 100, 35, 75, 210, 70.00 ]]
  최고점: 71.67
*/
let pn = [
  ['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75],
];
let a, b;
[a, b] = pn;
let n = a.forEach((element) => {
  if (element != Number) {
    console.log(element);
  }
});

console.log(a.length);
console.log();
