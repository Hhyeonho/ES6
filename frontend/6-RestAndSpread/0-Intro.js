// # Spread - 변수를 가져가서 풀어헤친다.

// 1)
// const friends = [1, 2, 3, 4];

// console.log(friends)
// console.log(...friends);


// 2)
// const friends = [1, 2, 3, 4];
// const family = ['a', 'b', 'c'];

// console.log([friends, family])
// console.log([...friends, ...family])    // 하나의 array가 된다.


// 3)
const sexy = {
    name: "nico",
    age: 24
}

const hello = {
    sexy: true,
    hello: 'hello'
}

console.log({...sexy, ...hello});