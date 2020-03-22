// #2.2 Arrow Functions in the Real World
//


// 1 - gmail.com 인 것을 찾아야할 경우
const email = [
    'nco@nco.com',
    'aa@naver.com',
    'lynn@gmail.com',
    "nico@nico.com",
    "nico@gmail.com",
];

// const foundMail = email.find(item => true);
// // true만 넣을 경우 첫번째값만 반환

// A - find
// const foundMail = email.find(item => item.includes("gmail.com"));
// // 포함할 문자를 찾은 배열의 값을 발견함
// console.log(foundMail);
// // array는 array.find 함수가 호출한 array를 나타냄

// B
// const foundMail = email.find(function(item) {
//     return item.includes("gmail.com")
// });
// // A와 B는 결과 같음(단지 함수형, 화살표형 차이!)
// console.log(foundMail);


// // C - filter
// const noGmail = email.filter(potato => !potato.includes('@gmail.com'))
// // gmail을 제외한 배열의 요소들이 나타나게 됌 (potato 외에 아무 임의변수 사용가능)

// console.log(noGmail)

// // D - forEach(이메일 앞의 userID만 알고싶을 경우)
// email.forEach(tomato => {
//     console.log(tomato.split("@")[0]);
// });
// @ 를 경계로 쪼개어진 배열 중 [0]을 통해 0번째 배열만 가지고 옴!!


// E - forEach(이메일 앞의 userID만 알고싶을 경우)

// 1
// const cleaned = [];
// email.forEach(tomato => {
//     cleaned.push(tomato.split("@")[0]);
// });
// console.log(cleaned);

// 2 - 변수선언과 split을 동시에 하는 법
// const cleaned = email.map(tomato => tomato.split("@")[0]);
// console.log(cleaned);

// 3 - order
const cleaned = email.map((tomato, index) => ({
    username: tomato.split("@")[0], 
    points: index
}));
console.log(cleaned);



