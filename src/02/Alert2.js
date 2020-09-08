// "use strict";

// alert("...?");

// 2-2
// alert 다음에 ;이 없어서 이후 forEach 문의 alert는 발생하지 않음
// alert("에러가 발생합니다.")

// [1, 2].forEach(alert)

// ;으로 정상 동작
// alert("제대로 동작합니다.");

// [1, 2].forEach(alert)

// /**
//  * /**
//  *     중첩 주석 에러
//  *  */
//  */

// 2-4
// variable: 데이터를 저장하는 이름 붙은 저장소
// let

// let message;
// message = "Hi, Javascript";

let message = 'Hi, Javascript';
// alert(message);

// 가능하지만 보기 좋은 코드는 아니다!
// let user = 'Park', age = 27, title = 'frontend';

let user = 'Park';
let age = 28;
let title = 'frontend';

// var ? - old code
var text = 'hello';

// Identifier 'message' has already been declared : SyntaxError 30 line의 alert가 나오지 않고, devtools에서 에러. 
// let message = 'error';


// 변수는 문자, 숫자, $, _만 가능하며 첫 글자가 숫자는 불가능, 대소문자를 구분
let userName;
let test1234;

let $;
let _;

// 예약어도 사용 불가
// let is disallowed as a lexically bound name : SyntaxError
// let let = 5; // return 등 예약어

const testText = '3.14';


// error const로 선언한 변수는 재할당 불가
// testText = '3.333';

const COLOR_RED = '#FF0000';

let color = COLOR_RED;
// alert(color);