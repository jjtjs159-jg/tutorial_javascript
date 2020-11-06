// let sum = (a, b) => a + b;

// let sum = function(a, b) {
//     return a + b;
// };

// let double = n => n * 2;

// alert( double(3) ); // 6

// let sayHi = () => alert("안녕하세요!");

// sayHi();

const ask = (question, yes, no) => {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

ask(
    "동의하십니까?",
    function () { alert("동의하셨습니다."); },
    function () { alert("취소 버튼을 누르셨습니다."); }
);