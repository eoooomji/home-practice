let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

for (let i = 3; i <= 1; i++) {
  console.log(i);
}

let input = 'N';
do {
  console.log(`고객님 주문하시겠습니까?(Y/N)`);
  input = prompt(`입력`);
} while (input == 'N');
