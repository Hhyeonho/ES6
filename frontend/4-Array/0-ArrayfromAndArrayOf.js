// #4.0 Array.from() and Array.of()

// 1) arrayof - array를 만들고 싶을 때 사용
const friends = Array.of("nico", "lynn", "dal", "mark");
console.log(friends);
// elements 가 많을 때 사용하면 좋음

// 2) Array.from(array-like object)
const buttons = document.querySelectorAll("button");
const buttonsClass = document.getElementsByClassName("btn");
console.log(buttons);
console.log(buttonsClass);

// 3) 버튼 리스너

const buttonsListener = document.getElementsByClassName("btn");
Array.from(buttonsListener).forEach(button => {
    button.addEventListener("click", ()=>console.log("i've been clicked"))
});

const buttonsListener2 = document.getElementsByClassName("btn");
const arr = Array.from(buttonsListener2)
arr.forEach(button => {
    button.addEventListener("click", ()=>console.log("i've been clicked"))
});