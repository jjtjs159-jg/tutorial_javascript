// == 는 서로 비교할 수 있는 형태로 변환시킨 뒤, 비교한다
// console.log(1 == '1'); // true;

// console.log(1 === '1'); // false;

// 유니코드 순
// console.log('Z' < 'B'); // false;
// console.log('Bee' > 'Be'); // true;

// console.log(0 == false); // true;

// console.log('' == false); // true;

// console.log(undefined === null); // false;

// console.log(undefined == null) // true;

// alert( null > 0 );  // (1) false - null이 0으로 변환
// alert( null == 0 ); // (2) false - null이거나 undefined인 경우 형변환을 하지 않는다.
// alert( null >= 0 ); // (3) true - null이 0으로 변환

// alert( undefined > 0 ); // false (1) - undefined가 NaN으로 변환 NaN이 피연산자인 경우 항상 false를 반환
// alert( undefined < 0 ); // false (2) - undefined가 NaN으로 변환 NaN이 피연산자인 경우 항상 false를 반환
// undefined는 null이나 undefined와 같고, 그 이외의 값과는 같지 않기 때문에 (3)은 false를 반환합니다.
// alert( undefined == 0 ); // false (3)