const foo = { id: 1, height: "200px", width: "100px" };
const bar = { id: 2, height: "300px", width: "400px" };

// with {}, the console.log will print the name of variables.
console.log(foo, bar);
// result
// { id: 1, height: '200px', width: '100px' } { id: 2, height: '300px', width: '400px' }
console.log({ foo, bar });
// result
/* {
foo: { id: 1, height: '200px', width: '100px' },
bar: { id: 2, height: '300px', width: '400px' }
}
*/
console.table({ foo, bar });
