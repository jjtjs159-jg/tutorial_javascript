// 나머지 1
// alert(5 % 2);

// 거듭제곱
// alert(2 ** 3)

// 숫자 2로 변환 후 계산
// alert(6 - '2');

// 숫자형이 아닌 피연산자는 숫자형으로 변환 1
// alert(+true);

// 0
// alert(+ "")

let apples = "2";
let oranges = "3";

// 23
// alert( apples + oranges );

let a, b, c;

a = b = c = 2 + 2;

// alert( a ); // 4
// alert( b ); // 4
// alert( c ); // 4

let n = 2;

// 우측이 먼저 실행
// n *= 3 + 5;
// alert(n);

// n = n * 8;
// alert(n);

let counter = 1;
let ac = ++counter; // (*)

// alert(a); // 2

let counter1 = 1;
let ab = counter1++; // (*) ++counter를 counter++로 바꿈

// alert(a); // 1

let aa = (1 + 2, 3 + 4);

// alert( aa ); // 7 (3 + 4의 결과)

// 한 줄에서 세 개의 연산이 수행됨, 가독성에는 별로
// for (a9 = 1, b9 = 3, c9 = a9 * b9; a9 < 10; a9++) {
//     alert(a9);
// }