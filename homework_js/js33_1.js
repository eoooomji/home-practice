// Async

/*
// setTimeout 비동기

function display() {
  for (let i = 0; i <= 5; i++) {
    console.log(`${i}`);
  }
}
console.log('start');
setTimeout(display, 2000);
console.log('end');
*/

/*
// addEventListener

let btn = document.querySelector('button');

console.log('start');
btn.addEventListener(
  'click',
  function () {
    console.log('addEventListener');
  },
  false
);
console.log('end');
*/

// XMLHttpRequest

function process() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
  // open : 새로 생성된 요청을 초기화하거나 기존 요청을 다시 초기화한다.
  xhttp.send();
  // send : 요청을 서버로 보낸다.
  // onload : 요청이 성공한다는 전제하에 실행되는 이벤트 핸들러
  // readstatechange이벤트 대신 => onload 이벤트를 사용해도 됨
  // parse : 문자열을 JSON으로서 구문 분석하고, 선택적으로 분석 결과의 값과 속성을 변환해 반환합니다.
  xhttp.onload = () => {
    if (xhttp.status == 200) {
      let data = JSON.parse(xhttp.response);
      console.log(data);
      // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
    }
  };
}
console.log('start');
process();
console.log('end');
