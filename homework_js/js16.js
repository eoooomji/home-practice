let level = [5, 10];
let a, b;
a = level[0];
b = level[1];
console.log(a, b); // 5, 10

let c, d;
[c, d] = [5, 10];
console.log(c, d); // 5, 10

let m, n;
[n, m] = [c, d];
console.log(n, m); // 5, 10

let k, p, next;
[k, p, next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(k); // 1
console.log(p); // 2
console.log(next); // 3

[k, p, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(k); // 1
console.log(p); // 2
console.log(next); // [3, 4, 5, 6, 7, 8]

[k, , p, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(k); // 1
console.log(p); // 3
console.log(next); // [ 4, 5, 6, 7, 8]

[k, _, p, _, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(k); // 1
console.log(p); // 3
console.log(next); // [ 5, 6, 7, 8]

let u, t, w;
[u, t, w] = [1, 2];
console.log(u, t, w); // 1 2 undefined

[u, t, w = 3] = [1, 2];
console.log(u, t, w); // 1 2 3

[u, t = 4, w = 5] = [1, 2];
console.log(u, t, w); // 1 2 5

const customer = { fullname: '고수', job: '연기자' };

let fullname = customer.fullname;
let job = customer.job;
console.log(fullname, job); // 고수, 연기자

let { fullname: fn, job: jb } = customer;
console.log(fn, jb); // 고수, 연기자

let { job: work, fullname: fname } = customer;
console.log(work, fname); // 연기자, 고수

let { fullname: name, job: jbn, loc = '서울' } = customer;
console.log(name, jbn, loc); // 고수, 연기자, 서울

let s, r;
({ s, r } = { s: 1, r: 2 });
console.log(s, r); // 1 2

let habits = [
  { id: 1, content: '수영', completed: false },
  { id: 2, content: '걷기', completed: true },
  { id: 3, content: '명상', completed: true },
  { id: 4, content: '독서', completed: false },
];
let listHabit = [];
for (let idx in habits) {
  if (habits[idx].completed) {
    listHabit.push(habits[idx]);
  }
}

console.log(listHabit);

let completedHabit = habits.filter((element) => {
  return element.completed;
});
console.log(completedHabit);

let member = { hname: '고수', address: { zipCode: '526-143', city: '서울' } };

let { hname, address } = member;
let { city } = address;
console.log(`${hname}고객님은 ${city}에 거주합니다.`);
({
  hname,
  address: { city },
} = member);
console.log(`${hname}고객님은 ${city}에 거주합니다.`);

let na = member.hname;
let ci;
for (let idx in member) {
  idx = member[idx];
  ci = idx.city;
}
console.log(`${na}고객님은 ${ci}에 거주합니다.`);

console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.abs(-10)); // 10
console.log(Math.round(25.54333)); // 16
console.log(Math.ceil(23.345)); // 24
console.log(Math.floor(23.56)); // 23
console.log(Math.random());
console.log((25.5236576).toFixed(3)); // 25.524
console.log((25.5231235).toFixed(2)); // 25.52
console.log((25.526734).toFixed(3)); // 25.527
console.log((25.526455).toFixed(1)); // 25.5

///////////////////////////////////////////////

// 20220926일 기준
let date = new Date();
console.log(date); // 2022-09-26T12:58:36.753Z
console.log(date.getFullYear()); // 2022
console.log(date.getMonth()); // 8
console.log(date.getMonth() + 1); // 9
console.log(date.getDate()); // 26
console.log(date.getDay()); // 1
