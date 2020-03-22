// #2.0 Arrow Functions
// Arrow Function은 기존 함수를 보기 좋게 개선한 것
// '=>' 를 arrow라고 함

// 1 - 예1
// const hello = function(arg){

// }


// 2 - 예2
// const names = ['nico', 'lynn', 'flynn'];
// const hearts = names.map(function(item){
//     return item + 'heart';
// });
// console.log(hearts);
// map은 각각의 아이템마다 함수를 호출하는 일을 함
// map으로 배열값을 받아오고 리턴할 때 요소마다 heart 라는 문자를 붙임


// // 3 - 예3
// const names = ['nico', 'lynn', 'flynn'];

// function addHeart(item){
//     // return item + 'heart';
//     return 0;
// }
// const hearts = names.map(addHeart);
// console.log(hearts);

// addHeart를 함수로 만들어도 제대로 작동
// 각 item을 map을 통해 각각 항목들을 넣어주게 됌 
// 만일 item + heart 가 아니라 0만을 리턴하게 된다면
// 결과적으로 0 0 0 배열이 출력 됌
// >> 보통 이런 함수를 따로 만들어서 map에 넣는 선언방식은 혼란을 줄 수 있으므로
// 예2 와 같이 사용


// // 4 - 예4( arrow function으로의 변환)
// const names = ['nico', 'lynn', 'flynn'];

// const hearts = names.map(item =>{
//     return item + 'love';
// });
// console.log(hearts);
// // 결과는 위와 같지만 예2,예3 에 비해서 보기가 훨씬 좋아짐


// // 5 - 예5( arrow function으로의 변환)
// const names = ['nico', 'lynn', 'flynn'];

// const hearts = names.map((item, index) =>{
//     // console.log("we are on ", index);
//     // return item + 'love';
//     return index +"."+item + 'love';
// });
// console.log(hearts);
// // map의 두번째 인자인 index를 사용
// index를 통해 item이 몇번째 인지 나타내는 숫자인지 식별


// // 6 - 예6( arrow function으로의 변환)
// const names = ['nico', 'lynn', 'flynn'];

// const hearts = names.map(item => item + 'like!')
// console.log(hearts);
// // function, index를 지우고 간결하게 사용가능
// // 이를 implicit return 이라고 부름!


// // 7 - 예7( arrow function으로의 변환)
// const names = ['nico', 'lynn', 'flynn'];

// const hearts = names.map(item => {
//     item + 'like!'
// })
// console.log(hearts);
// 예6 과 달리 arrow 뒤에 {}를 추가하게 되는 순간 implicit return은 사라짐
// {} 괄호를 넣어서 사용해야한다면 예5 와 같은 형식으로 만들 것


// 8 - 예8( arrow function으로의 변환)
const names = ['nico', 'lynn', 'flynn'];

const hearts = names.map(()=> '♡');
console.log(hearts);
// 인자를 받지 않고 arrow로 넘겨줄 경우 하트문자만 세개가 나오게 됌