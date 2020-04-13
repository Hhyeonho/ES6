// # Promise.all - 모든 Promise를 실행한 후 진행되는 하나의 Promise를 반환!


// 1) EX - Promise.all 
// const p1 = new Promise((resolve) => {
//     setTimeout(resolve, 5000, "First");
// });

// const p2 = new Promise((resolve) => {
//     setTimeout(resolve, 1000, "Second");
// });

// const p3 = new Promise((resolve) => {
//     setTimeout(resolve, 3000, "Third");
// });


// const motherPromise = Promise.all([p1, p2, p3]);

// motherPromise.then(values => console.log(values));


// // >> p1,p2,p3가 각각 끝나는 시간은 관계 없이 값들을 순서에 맞게 얻을 수 있다. 
// // (Promise 중 가장 긴 시간이후 실행됌 > 여기선 5초가 소요)

// // ( 시간 순서대로라면 Second Third First 이어야 하는데 순서에 맞게 1 2 3 순서대로 값을 가짐)



// 2)
const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "I hate JS");
});

const p3 = new Promise((resolve) => {
    setTimeout(resolve, 3000, "Third");
});


const motherPromise = Promise.all([p1, p2, p3]);

motherPromise
    .then(values => console.log(values))
    .catch(err => console.log(err));

// Promise.all 사용 시 Promise 중 하나라도 reject 된다면 모두 reject가 되어버린다!