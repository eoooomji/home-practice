// js23.js

document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    alert('약관에 동의해야 합니다.');
    return false;
  }
};

// 전체 선택
document.frm.allCheck.onclick = function () {
  // console.log(this); // 전체선택 태그문
  let checkgroup = document.querySelectorAll('.checkgroup');
  let myThis = this;
  console.log(myThis); // <input type="checkbox" name="allCheck" id="allCheck" />
  //   console.log(checkgroup.length);
  //   console.log(typeof checkgroup, checkgroup instanceof Array);

  //   // Arrow Function
  //   checkgroup.forEach((element) => {
  //     // console.log(this);
  //     // <input type="checkbox" name="allCheck" id="allCheck" />
  //     element.checked = this.checked;
  //   });

  //   // Anonymous Function(Callback Function)
  //   checkgroup.forEach(function (element) {
  //     console.log(this); // window
  //     element.checked = myThis.checked;
  //   });

  //   // Array.from()
  //   let myArray = Array.from(checkgroup);
  //   myArray.map(function (element) {
  //     //console.log(this); // window
  //     element.checked = myThis.checked;
  //   });

  let iArray = [...checkgroup];
  iArray.map(function (element) {
    element.checked = myThis.checked;
  });
};
