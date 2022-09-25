let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr1); // [ 1, 2, 3]
console.log(arr2); // [ 1, 2, 3]

arr2.push(4);
console.log(arr1); // [ 1, 2, 3, 4]
console.log(arr2); // [ 1, 2, 3, 4]

let arr3 = [1, 2, 3];
let arr4 = [...arr3];
console.log(arr3); // [ 1, 2, 3 ]
console.log(arr4); // [ 1, 2, 3 ]

arr4.push(4);
console.log(arr3); // [ 1, 2, 3 ]
console.log(arr4); // [ 1, 2, 3, 4 ]

let arr5 = [10, 20, ...arr3, 40, 50];
console.log(arr5); // [ 10, 20, 1, 2, 3, 40, 50]

let arr6 = [5, 6, [7, 8]];
let arr7 = [1, ...arr6];
console.log(arr7); // [ 1, 5, 6, [ 7, 8 ] ]

let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];
let arr10 = [7, 8, 9];
let arr11 = [...arr8, ...arr9, ...arr10];
console.log(arr11); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr12 = [arr8, arr9, arr10];
console.log(arr12); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

arr10[4] = 15;
console.log(arr10); // [ 7, 8, 9, <1 empty item>, 15 ]
console.log(arr12); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9, <1 empty item>, 15 ] ]

//////////////////////////////////////////////////////////

function display(...params) {
  return params.reduce((sum, a) => sum + a);
}
console.log(display(1, 2)); // 3
console.log(display(1, 2, 3, 4, 5)); // 15

let arr13 = [10, 20, 30, 40, 50];
console.log(arr13); // [ 10, 20, 30, 40, 50 ]
console.log(typeof arr13); // object
console.log(arr13.toString()); // 10,20,30,40,50
console.log(typeof arr13); // object
console.log(Math.max(arr13)); // NaN
console.log(Math.max(...arr13)); // 50

////////////////////////////////////////////////////////

let prevState = { name: '고수', age: 30 };
let currentState = { ...prevState }; // 복사
console.log(currentState); // { name: '고수', age: 30 }

currentState = { ...prevState, loc: '서울' };
console.log(currentState); // { name: '고수', age: 30, loc: '서울' }

let prevState2 = { name: '고수', age: 30 };
//prevState2.name = '여진구';
//console.log(prevState2); // { name: '여진구', age: 30 }

//prevState2 = { ...prevState2, name: '여진구' };
//console.log(prevState2); // { name: '여진구', age: 30 }

prevState2 = { name: '여진구', ...prevState2 };
console.log(prevState2); // { name: '고수', age: 30 }
