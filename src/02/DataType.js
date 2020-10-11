// 2-5
// 자료의 타입은 있지만, 변수에 저장되는 값의 타입은 바꿀 수 있는 언어 - 동적 타입 언어
let messsage = "string..";
message = 123456;

// alert(typeof message);

let num = 123;
num = 12.45;

// 어느 숫자든 0으로 나누면 Infinity
// alert(1 / 0);

// 직접 참조도 가능
// alert(Infinity);

// NaN - 계산 중 에러 발생, NaN에 어떤 연산을 해도 NaN
// alert("숫자 아니지롱!" / 0); // NaN

// bigint
const bigInt = 1234567890123456789012345678901234567890n;
// alert(typeof bigInt);

// 문자열은 "...", ',,', `..`
const text = 'Park';
const text2 = `my name is ${text}`;
// alert(text2);

// boolean - true, false

const isGreater = 4 > 1;
// alert(isGreater);

// null - 존재하지 않는 값 혹은 알수 없는 값
let age = null;
// alert(age);

// undefined - 값이 할당되지 않은 상태, 직접 할당하지 말고 초기값을 위해 남겨두며, 직접 할당하려면 null을 쓰자
age = 42;
age = undefined;
// alert(age);

// object - 한 가지만 표한 가능한 원시형과는 달리 복잡한 개체를 표현할 수 도있고, 특수한 자료형이다 후에..

// symbol - 고유한 식별자를 만들 때 사용, 후에..

// typeof - 인수의 자료형을 나타내는 문자열을 반환
// ex)
// alert(typeof 10n); // bigint
// alert(typeof Math); // object 내장객체
// alert(typeof alert); // function 함수형은 없고, 객체에 속하지만 호환성을 위해 남겨둠
// alert(typeof null); // object, 객체가 아니자만 호환성을 위해 이러한 오류로 남겨둠, 객체가 아님에 유의

// 숫자, 문자, bigint, boolean, null, undefined, object, symbol