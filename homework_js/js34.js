function leftPad(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}

function setText(selector, text) {
  let targetElement = document.querySelector(selector);
  targetElement.innerText = text;
}
let watchTime = () => {
  const present = new Date();
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];

  const hour = leftPad(present.getHours());
  const minute = leftPad(present.getMinutes());
  const seconds = leftPad(present.getSeconds());

  setText('#hours', hour);
  setText('#minutes', minute);
  setText('#seconds', seconds);

  const year = present.getFullYear();
  const month = leftPad(present.getMonth() + 1);
  const date = leftPad(present.getDate());
  const day = present.getDay();
  //   console.log(day);

  setText('#year', year);
  setText('#month', month);
  setText('#date', date);
  setText('#day', `${dayList[day]}요일`);
};
watchTime();

let clockInterval = setInterval(watchTime, 1000);
