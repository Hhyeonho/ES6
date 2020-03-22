// # 1.2 Block Scope
// 이 버블이 variable 들이 접근가능한지 아닌지 검사


// // 1-blockscope 예
// if(true){
//     const hello = 'hi';
// }
// console.log(hello)
// // undefined >> 콘솔에 hello를 찾지 못함 >> const let 둘다 동일
// // hello가 if안에 있기 때문 (지역변수와 비슷한 개념)


// // 2-blockscope 예
// if(true){
//     var hello = 'hi';
// }
// console.log(hello)
// // >> hi 가 제대로 출력
// // var은 blockscope를 갖지 않고 functionScope를 갖게 됌
// // var로 선언한 변수는 function 안에서 접근할 수 있게 됌을 의미 


// // 3-blockscope 예
// function a(){
//     var hello = 'hi';
// }
// console.log(hello)
// function 단위의 접근이므로 
// function 안에서 선언하면 그 외부에서는 hello 변수를 찾지 못함


// // 4-blockscope 예
// function a(){
//     let hello = 'hi';
// }
// let hello = "bye";
// console.log(hello);
// >> 결과로 bye 가 출력
// 같은 변수 hello를 쓴 것은 바람직하지 않지만
// 내가 a 함수안에 가지고 있는 hello가 보호를 받게 됌


// // 5-blockscope 예
// let hello = 'hi';
// function a(){
//     console.log(hello)
// }
// console.log(hello)
// 외부에서 내부의 것을 사용이 불가능한 것과 달리
// 내부에서는 외부의 hello 변수를 사용이 가능함!


// // 6-blockscope 예
// let hello;
// if(true){
//     hello = 'llalalaal';
// }
// console.log(hello);
// >> hello 가 lla~ 로 출력
// hello는 {} 밖에서 먼저 선언된 것이므로 내부에서 hello값 수정 후
// 외부에서 사용했을 경우에 수정되어져서 출력이되어진다


// // 6-blockscope 예
// let hello;
// if(true){
//     const a
//     if(true){
//         const b
//     }
// }
// console.log(hello);
// b의 버블에서 a가 있는 버블로의 접근이 가능함(안에서 외부로는 가능!)
// 외부의 a 버블에서 그 안의 버블 b로는 접근 불가(외부에서 안으로는 불가능!)




