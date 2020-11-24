// let user = {
//     name: "John"
// };

// let admin = user;

// admin.name = 'park'

// // alert(user.name);

// let a = {};
// let b = a; // 참조에 의한 복사

// // alert( a == b ); // true, 두 변수는 같은 객체를 참조합니다.
// // alert( a === b ); // true

// let a1 = {};
// let b1 = {}; // 독립된 두 객체

// // alert( a == b ); // false

// let user1 = {
//     name: "John",
//     age: 30
// };

// let clone = {};
// for (let key in user1) {
//     clone[key] = user1[key];
// }

// clone.name = "Pete";

// // alert(user.name);

// // Object.assign 을 써봊
// let user2 = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// Object.assign(user2, permissions1, permissions2);

// console.log(user2);

let user = { name: "John" };

Object.assign(user, { name: "Pete" });

// alert(user.name); // user = { name: "Pete" }
// 이미 있는 프로퍼티면 덮어씌움


// deep cloning > lodash cloneDeep