// 1) Chaining 
// const amISexy = new Promise((resolve, reject) => {
//     resolve(2);
// });

// // amISexy
// //     .then(number => {
// //         console.log(number * 2)
// //     })
// //     .then(otherNumber => { // otherNumber 에는 4가 들어가지 않음 >> 이 줄의 then 작동을 안함!
// //         console.log(otherNumber);
// //     });

// amISexy
//     .then(number => {
//         console.log(number * 2)
//         // 다음 chain으로 값을 넘겨주기 위해 return이 필요!
//         return number * 2;
//     })
//     .then(otherNumber => {
//         console.log(otherNumber * 2);
//     });


// 2) 여러 Chain 중 에러날 경우

const amISexy = new Promise((resolve, reject) => {
    resolve(2);
});

const timesTwo = (number) => number * 2;

amISexy
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(() => {
        throw Error("Something is wrong")
    })
    .then(lastNumber => console.log(lastNumber))
    .catch(error => console.log(error))