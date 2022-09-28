console.log(this); // window

// 익명함수
let member = {
  name: '홍길동',
  show: function () {
    console.log(this);
  },
};
member.show();
// {name: '홍길동', show: ƒ}
// member는 객체.객체 안에서 사용된 this는 member객체를 가르킨다.

// Arrow 함수
let member2 = {
  name: '홍길동',
  show: () => {
    console.log(this);
  },
};
member2.show(); // window

function showThisName() {
  console.log(this);
}
showThisName(); // window
let showThisName2 = () => {
  console.log(this);
};
showThisName2(); // window

// 결론 : 객체 안의 익명 함수는 this는 객체를 가르키고, Arrow함수와 객체를 지정하지 않은 함수는 window를 카르킨다.

let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
  console.log(this, this == btn); // <button id="btn">commit</button> true
});
let btn2 = document.querySelector('#btn');
btn.addEventListener('click', () => {
  console.log(this, this == btn2); // window false
});

///////////////////////////////

const park = { name: '박보검' };
const jung = { name: '정해인' };

showThisName.call(park); // {name: '박보검'}
showThisName.call(jung); // {name: '정해인'}

showThisName2.call(park); // window
showThisName2.call(jung); // window

function update(birthYear, job) {
  this.birthYear = birthYear;
  this.job = job;
  console.log(this);
}
update(2012, 'IT'); // window
update.call(park, 1993, '탤런트'); // {name: '박보검', birthYear: 1993, job: '탤런트'}
update.call(jung, 1988, '탤런트'); // {name: '정해인', birthYear: 1988, job: '탤런트'}

update.apply(jung, [1988, '탤런트']); // {name: '정해인', birthYear: 1988, job: '탤런트'}
update.apply(jung, [1988, '탤런트']); // {name: '정해인', birthYear: 1988, job: '탤런트'}

let parkUpdate = update.bind(park, 1993, '탤런트');
parkUpdate(); // {name: '박보검', birthYear: 1993, job: '탤런트'}

let jungUpdate = update.bind(jung, 1988, '탤런트');
jungUpdate(); // {name: '정해인', birthYear: 1988, job: '탤런트'}
