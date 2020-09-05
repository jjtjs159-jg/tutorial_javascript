// alert('javascript..!');

let value = true;

// boolean
// alert(typeof value);

value = String(value);
// string - true
// alert(value);

// 숫자형으로 자동 변환 후 연산
// alert("6" / "3"); // 2;

let str = "123";
// string
// alert(typeof str);

const num = Number(str);
// number
// alert(typeof num);

const age = Number('temp string 123');
// NaN
// alert(age);

const value1 = undefined;
// NaN
// alert(Number(value1));

// 0
// alert(Number(null));

// 1
// alert(Number(true));

// 0
// alert(Number(false));

// NaN
// alert(Number(' blank string 123   '));

// 0
// alert(Number('  '));

// true
// alert( Boolean(1) );

// false
// alert( Boolean(0) );

// true, 존재하는지를 판단 - 있다
// alert( Boolean("hello") );

// false, 존재하는지를 판단 - 없다
// alert( Boolean("") );

// true
// alert( Boolean("0") );

// true
// alert( Boolean(" "));