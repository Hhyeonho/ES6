// #2.1 'this' in Arrow Functions
// arrow function을 사용하지 말아야할 경우!
// this가 예로 있음


// // 1 - 예1
// const button = document.querySelector("button")

// button.addEventListener('click', function(){
//     // console.log(this)
//     // console.log("i have been clicked")
//     this.style.backgroundColor = 'red';
// });

// index를 통해 버튼 클릭 시 console 출력 & 클릭 시 버튼 색 red 

// // 2 - 예2
// const button = document.querySelector("button")

// button.addEventListener('click', ()=>{
//     console.log(this);
//     this.style.backgroundColor ='red';
// });

// 예1과 다르게 function 대신 arrow를 사용하게 되면 
// 여기서 this 사용 시 더 이상 button 을 가리키지 않게 됌


// // 3 - 예3
// const button = document.querySelector("button")

// function handleClick(){
//     console.log(this);
// }

// button.addEventListener('click', handleClick);
// arrow function 을 사용하고 싶지 않을 때 새로운 함수를 선언 후 
// 리스너에 넣어줘서 사용


// 4 - 예4
const nico = {
    name: 'Nico',
    age: 24,
    // addYear: ()=>{
    //     this.age++;
    // }
    addYear(){
        this.age++;
    }
}
console.log(nico);
nico.addYear();
nico.addYear();
console.log(nico);
// arrow function 에서는 this가 window를 가리키게 되므로 함수나 콘솔에 변화가 없음
// => 화살표를 지우게 되면 제대로 값이 반영되는 것을 볼 수 있음