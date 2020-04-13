// !) resolve를 통해서 Promise를 시작하고 종료할 수 있고 reject를 통해 Promise를 거절,오류설정을 한다.
const amISexy = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Yes you are!");
    }, 3000);
});

console.log(amISexy);

// setTimeout(()=>{
//     console.log(amISexy)
// }, 1000);

setInterval(console.log, 1000, amISexy);


// Promise 의 장점 >> 내가 아직 모르는 value와 함께 작업할 수 있다는 장점!