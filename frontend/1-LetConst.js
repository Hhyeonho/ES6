// # 1.0 Let and Const
// let 과 const 의 차이!
// - const 는 변하지 않음(다시 정의 불가)


// 1
var hello = 'lal';

console.log(hello, "한글릉르")


// // 2
const name = 'Pedro';

// // const 로 name 선언 후 수정하려면 오류 발생
// // name 'AAAA'  


// 3
const Person = {
    name: 'Nicolas'
}
// 2번과 다르게 const여도 Person 안의 값을 바꾸는 게 가능 
Person.name = 'Pedro';


// - let 은 var의 개념과 비슷 >> 값을 수정하는 것이 가능

// 4
let nico = 'las';
nico = 'alalalal';


// Result 
// - 기본적으로 const를 사용하는 것을 권장(더 안전하기 때문!)
// - 그러나 만약 variable(변수) 값을 수정해야하는 변수를 사용할 경우 let 사용

