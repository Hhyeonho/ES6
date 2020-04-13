// # 1.1 Temporal Dead Zone
// *hoisting : 자바스크립트가 프로그램을 실행하기 전에 이것들을 어딘가로 이동시키는 것!


// // 1 데드존이 없을 경우의 예
// var myName = 'nico';
// console.log(myName);
// >> nico 출력

// // 1-1 데드존이 없을 경우의 예
// console.log(myName);
// var myName = 'nico';
// // >> undifined 발생

// => 자바스크립트는 위에서부터 아래로 코드를 실행( hoisting의 경우 예외)
// 자바 스크립트에서 hoisting이 발생

// // // 1-2 hoisting 예
// var myName;
// console.log(myName);
// myName="nico";
// // >> 여전히 undefined 출력 >> hoisting을 통해 var을 맨 위로 끌어올림


// 1-3 var 대신 let 사용!
console.log(myName);
let myName = 'nico';
// let 을 쓰게 되면 hoisting이 발생하게 않게 되므로(myName 변수 선언이 위로 가지 않게 됌)
// var과 달리 오류가 발생하게 됌
// >> 언어가 사용자의 멍청한 짓을 안하게 막아줌