// js24.js

let totalCar = document.getElementById('total');

let chbCnt = document.querySelectorAll('tbody input[type="checkbox"]'); // NodeList

let myChb = [...chbCnt]; // NodeList를 Array로 변환
// console.log(myChb);

myChb.map((elelment) => {
  elelment.onclick = carCount;
});

function carCount() {
  //   console.log(this);
  //   console.log(this.id);
  let basicCar = Number(totalCar.defaultValue);
  //   console.log(basicCar);
  myChb.map((element) => {
    if (element.checked) basicCar += Number(element.value);
  });
  totalCar.value = basicCar;
}
