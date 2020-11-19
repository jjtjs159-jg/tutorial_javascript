// // // let user = new Object();
// // let user = {
// //     name: 'zz'
// // }; 

// // // alert( user.name );

// // user.isAdmin = true;

// // // alert( user.isAdmin );

// // delete user.isAdmin;
// // console.log(user);

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // 복수의 단어는 따옴표로 묶어야 합니다.
// };

// const user = {
//     name: "John"
// };

// user.name = "Pete"; // (*)

// alert(user.name); // Pete

// alert(user["likes birds"]); // true

// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }


// let obj = {
//     0: "test" // "0": "test"와 동일합니다.
// };

// // 숫자 0은 문자열 "0"으로 변환되기 때문에 두 얼럿 창은 같은 프로퍼티에 접근합니다,
// alert(obj["0"]); // test
// alert(obj[0]); // test (동일한 프로퍼티)

// let user = { name: "John", age: 30 };

// alert( "age" in user ); // true

// let user = { age: 30 };

// let key = "age";
// alert( key in user ); // true

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // 키
    alert(key);  // name, age, isAdmin
    // 키에 해당하는 값
    alert(user[key]); // John, 30, true
}