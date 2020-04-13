// #2.3 Default Values
// 기본값! >> 시간을 줄여줌

// 1
// function sayHi(aName){
//     return "Hello " + aName;
// }

// console.log(sayHi("nico"));


// 2
// function sayHi(aName){
//     // return "Hello " + aName;    // undefined 출력
//     return "Hello " + (aName || 'anon');    // aName 값이 비었으면 anon 출력
// }

// console.log(sayHi()); 


// 3
// function sayHi(aName = 'anonymous'){
//     return "Hello " + aName;
// }

// console.log(sayHi()); 
// // 함수 인자 내에 디폴트값을 선언시켜줌


// 4 화살표함수 적용!
const DEFAULT =  'lalalal';

// const sayHi = (aName = 'AAA') => 'hello ' + aName;
// 디폴트값을 AAA로 설정
const sayHi = (aName = DEFAULT) => 'hello ' + aName;
// 디폴트값을 뭘 쓸지 따로 쓰게 되면 그게 디폴트로 나옴

console.log(sayHi());



