/*
[출력결과]
홍길동님은 회원입니다.
3000포인트가 적립되었습니다.
*/

function process(name, chk) {
  if (chk) {
    console.log(`${name}님은 회원입니다.`);
  } else {
    console.log(`${name}님은 비회원입니다.`);
  }
}
function pointPlus(point) {
  console.log(`${point}포인트가 적립되었습니다.`);
}
process('홍길동', true);
pointPlus(3000);

console.log(`====================================================`);

/*
[출력결과]
요소의 길이 : 4
2인덱스 요소값 가져오기 : v
대문자 갯수 가져오기 : A
*/

function length(data) {
  return data.length;
}
function charAt(data, index) {
  return data[index];
}
function upperCnt(data) {
  let cnt = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i] >= 'A' && data[i] <= 'Z') {
      cnt++;
    }
  }
  return cnt;
}
let arr = ['j', 'a', 'v', 'A'];
console.log(`요소의 길이 : ${length(arr)}`);
console.log(`2인덱스의 요소 값 : ${charAt(arr, 2)}`);
console.log(`대문자 갯수 가져오기 : ${upperCnt(arr)}`);
