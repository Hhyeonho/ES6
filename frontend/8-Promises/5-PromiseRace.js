// # Promise Race - Promise All 과 유사하나 세 개 중에 하나라도 resolve 또는 reject 되면 실행이 된다.
//                  Promise 중 가장 빠른 것이 결과를 정한다.

// 1)
const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 4000, "I hate JS");
});

const p3 = new Promise((resolve) => {
    setTimeout(resolve, 3000, "Third");
});


// 두 가지 모두 결과 같음
// A
// const motherPromise = Promise.race([p1, p2, p3]);
// motherPromise
//     .then(values => console.log(values))
//     .catch(err => console.log(err));

//  B
Promise.race([p1, p2, p3])
    .then(values => console.log(values))
    .catch(err => console.log(err));