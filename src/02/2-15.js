let userName = 'John'; 
function showMessage(name = "no text given") {
    const message = ' 경고';
    // const userName = 'test';
    alert(name + message);
}

// alert(userName); // John
showMessage('steve');
// alert(userName); // John
// showMessage(message); // message not defined Error
// 파라미터로 받을 경우 복사된 값을 사용

function doNothing() {
    // return // 자동으로 ;
    return (
        'tttt'
    );
}

alert(doNothing()); // undefined