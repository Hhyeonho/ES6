// #Promises - 동시에 많은 일들을 가능하게 하는 것!
// '비동기'와 유사함 >> 한꺼번에 많은 걸 실행시킴

// 1)
const hello = fetch("http://google.com");

console.log('something');
console.log(hello);