// #3.0 Sexy Strings

// 1
const sayHi = (aName = 'AAA') => `hello  ${aName} lovely to have you`;
// 디폴트값을 AAA로 설정

console.log(sayHi());


// 2
console.log(`hello how are you ${()=> (102 * 30303)}`);

// 3
const add = (a, b) => a + b;
console.log(`hello how are you ${add(3, 5)}`);