// const val = 5;
// console.log(`This is answer ${val === 5 ? true : false}`);

// const x = 0, y = 0;
// const obj = { x, y };

// console.log(obj);

// const quux = () => Math.random();

// let obj = {
//     foo: "bar",
//     [ `baz${quux()}` ]: 42,
//     square: (num) => num ** 2
// }

// console.log(obj.square(5));

// Destructuring Assignment

// var list = [ 1, 2, 3 ]
// var [ a, , b ] = list;

// console.log([ b, a ] = [ a, b ]);

// console.log(a,b);
//  const data = () => ({ op: 5, lhs: 1, rhs: 10 });
// var data = { op: 5, lhs: 1, rhs: 10 };

// var { op, lhs, rhs } = data();

// console.log(op, lhs, rhs);

// var obj = { a: 1, b: 5 }
// var list = [ 1, 5 ]
// var { a, b = 2 } = obj
// var [ x, y = 2 ] = list

// console.log(`a = ${a} b = ${b} x = ${x} y = ${y}`);

// function f ([ name, val ]) {
//     console.log(name, val)
// }
// function g ({ name: n, val: v }) {
//     console.log(n, v)
// }
// function h ({ name, val }) {
//     console.log(name, val)
// }
// f([ "bar", 42 ])
// g({ name: "foo", val:  7 })
// h({ name: "bar", val: 42 })
