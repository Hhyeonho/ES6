// !)
// const amISexy = new Promise((resolve, reject) => {
//     // 두 가지 모두 결과 같음
//     // setTimeout(resolve, 3000, "Yes you are!");
//     resolve("Yes you are~")
// });

// amISexy.then(value => console.log(value));


// 2) reject 예시
const amISexy = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "You are Ugly!");
    // resolve("Yes you are~")
});

// catch는 오류에서만 사용
amISexy
    .then(result => console.log(result))
    .catch(error => console.log(error));