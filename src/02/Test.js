// alert('hello');

// 모달 창은 떠 있는 동안 스크립스 실행이 일시 중단되며, 사용자가 창을 닫기 전까지 다른 페이지와 상호작용 X

// 제목, 초기값을 가진 입력필드
// prompt('title', 'initial');

// let age = prompt('your age..', 100);

// alert(`my age - ${age}`);

// confirm - true, cancel - false
// let isBoss = confirm('text...');

// alert(isBoss);

// alert( null || 0 || 1 ); // 1
// alert(undefined || null || 0); // 0

let firstName = "";
let lastName = "";
let nickName = "asdasd";

// alert( firstName || lastName || nickName || "익명"); // asdasd

// truthy를 만나고 나머지는 건드리지않음
// true || alert("not printed"); // 실행 X
// false || alert("printed"); // 실행 O

if (1 && 0) {
  alert("if 문 안에 falsy가 들어가 있으므로 alert창은 실행되지 않습니다.");
}

// 첫 피연산자가 truthy면 and는 두번째 피연산자를 반환
// 첫 피연산자가 falsy면 and는 첫번째 피연산자를 반환, 두번째는 무시
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5
// alert( null && 5 ); // null

// alert( 1 && 2 && null && 3 ); // null

// 모두 truthy므로 마지막 3이 반환
//alert( 1 && 2 && 3 ); // 마지막 값, 3

// alert( !0 ); // true

alert( !!"non-empty string" ); // true