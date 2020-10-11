// let i = 0;
// while (i < 3) {
//     alert(i);
//     i++;
// }

// 조건에 관련없이 최소한 한번 실행
// do {
//     alert(i);
//     i++;
// } while(i > 1);

// for (let i = 0; i < 3; i++) {
//     alert(i);
// }

// alert(i) // error

let i = 0;

// for (i = 0; i < 3; i++) {
//     alert(i)
// }

// for (; i < 3; i++) {
//     alert(i)
// }

// for (; i < 3; ) {
//     alert(i++);
// }

// infinite loop
// for (;;) {

// }

// let sum = 0;

// while (true) {
//   let value = +prompt("숫자를 입력하세요.", "");

//   if (!value) break; // (*)

//   sum += value;
// }
// alert("합계: " + sum);

// for (let i = 0; i < 10; i++) {
//   // 조건이 참이라면 남아있는 본문은 실행되지 않습니다.
//   if (i % 2 == 0) continue;

//   alert(i); // 1, 3, 5, 7, 9가 차례대로 출력됨
// }

// 삼항연산자 ? 우측에는 break, continue x

// 레이블 - 점프하는것은 아님 break, continue 는 반복문안에서만 가능하고, 레이블은 반드시 break나 continue 위에있어야한다.
outer:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`(${i},${j})의 값`, "");

    // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
    if (!input) break outer; // (*)

    // 입력받은 값을 가지고 무언가를 함
  }
}
// break outer2; // 불가능

outer2:
for (let i = 0; i < 2; i++) {
    alert('악')
}
