let data = 'It`s alright';
console.log(data);

console.log(data.length);

data = 'Apple, Banana, Kiwi';
console.log(data.substring(7, 13));
console.log(data.substr(7, 6));
console.log(data.substr(-12, 6));
console.log(data.slice(7, 13));
console.log(data.slice(-12, -6));

console.log(data.replace('Banana', 'Grape'));
console.log(data);
let y = data.replace('Banana', 'Grape');
console.log(y);

data = 'Mr Blue has a blue house and a blue car';
console.log(data.replace(/blue/, 'red'));
console.log(data.replace(/blue/i, 'red'));
console.log(data.replace(/blue/g, 'red'));
console.log(data.replace(/blue/gi, 'red'));

data = 'Hello Word';
console.log(data.toUpperCase());
console.log(data.toLowerCase());

let data2 = 'javascript';
console.log(data2.concat(data));
console.log(data2.concat('_', data));
console.log(data2.concat(' ', data));

data = 'a,b,c,d,e';
let arr = data.split(',');
for (let i of arr) console.log(i);

data = 'Mr Blue has a blue house and a blue car';
console.log(typeof data);
let res = data.match(/blue/g);
console.log(`${res} ${typeof res} ${res instanceof Array}`);
res = data.match(/red/g);
console.log(`${res} ${typeof res} ${res instanceof Array}`);

res = data.search(/blue/g);
console.log(`${res}`);
res = data.search(/red/g);
console.log(`${res}`);

data = 'Mr Blue has a blue house and a blue car';
console.log(data.indexOf('M'));

let position = data.indexOf('blue');
console.log(data.indexOf('blue', position + 1));

data = 'Mr Blue has a blue house and a blue car';
let pos = -1;
do {
  pos = pos + 1;
  pos = data.indexOf('blue', pos);
  if (pos != -1) console.log(pos);
} while (pos != -1);

for (let i = 0; i < data.length; i += 1) {
  i = data.indexOf('blue', i);
  if (i == -1) break;
  console.log(i);
}

let text = 'korea';
console.log(text.repeat(10));

let text2 = '  korea   ';
console.log(text2.trim().length);
let text3 = '  korea  dream     ';
console.log(text3.trim().length);
