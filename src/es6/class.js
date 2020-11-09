class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

let jgSuperCar = new Car('Audi', 2019);
// alert(jgSuperCar.name);
let jgSuperCar2 = new Car('Ford', 2014);
// alert(jgSuperCar2.year);

// let jgPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('jg park');
//     }, 3000);
// });

// jgPromise.then((value) => {
//     // alert(value);
// });

// ???
// const person = {
//     firstName: 'park',
//     lastName: 'jong',
//     age: 50,
//     eyeColor: 'black',
// };

// const id = Symbol('id');
// person.id = 2012125012;
// alert(person.id);

// const func = (x, y = 10) => {
//     return x + y;
// };

// alert(func(5));

// 번외
let obj = {
    a: 1,
    b: 3,
    c: 6,
};

// for (let prop in obj) {
//     alert(obj[prop]); // 1 3 6
// }

// const iterable = [10, 40, 80];
// for (let value of iterable) {
//     alert(value);
// }

// 번외종료
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// alert(x);