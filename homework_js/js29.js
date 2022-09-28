// 6개의 난수와 중복 체크

let lotto = [];
for (let i = 0; i <= 5; i++) {
  let ran = Math.random() * 45;
  ran = Math.floor(ran) + 1;
  lotto.push(ran);
  console.log(lotto);
  for (j = 0; j < i; j++) {
    if (lotto[j] == lotto[i]) {
      i--;
      break; // i값이 1개 줄어들고 for문을 빠져나와 위의 for문으로 돌아간다.
    }
  }
}

// 정렬

lotto.sort((a, b) => {
  return a - b;
});

// 출력

let divList = document.querySelectorAll('div.wrap div');
divList.forEach((e, idx) => {
  e.innerText = lotto[idx];
});
