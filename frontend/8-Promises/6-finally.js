// # Spinner 
// 에러 발생 > 스피너 멈추고 에러를 해결하라
// 정상 작동 > 스피너 멈춤
// ==>> finally

// 1)
const p1 = new Promise((resolve, reject) => {
        setTimeout(reject, 2000, "First");
    })
    .then(value => console.log(value))
    .catch(error => console.log(`${error}◆`))
    .finally(() => console.log("Im done"));