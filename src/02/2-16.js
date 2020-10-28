// let sayHi = function() {
//     alert('hello');
// };

// alert(sayHi) // 함수코드
// ask(
//     "동의하십니까?",
//     function () { alert("동의하셨습니다."); },
//     function () { alert("취소 버튼을 누르셨습니다."); }
// );

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

let age = prompt("나이를 알려주세요.", 18);

let welcome;

if (age < 18) {

    welcome = function () {
        alert("안녕!");
    };

} else {

    welcome = function () {
        alert("안녕하세요!");
    };

}

welcome(); // OK