// 1) for
// const friend = ["nico", "Lynn", "ha", "hu"];

// for(let i = 0; i <20; i++){
//     console.log("I love kimchi");
// }


// for(let i = 0; i < friend.length; i++){
//     // console.log(`${i} I love kimchi`);
//     console.log(friend[i]);
// }




// 2) forEach
// const friends = ["nico", "Lynn", "ha", "hu"];

// // c, i, a 는 각각 current item, current index, current array 를 지칭!!
// const addHeart = (c, i, a)=> {         
//     console.log(c, i, a);
// }
// friends.forEach(addHeart);

// friends.forEach(friend => console.log(friend))



// // 3) for of 
// const friends = ["nico", "Lynn", "ha", "hu"];

// for (const friend of friends) { // const , let 선택
//     console.log(friend);
// }


// for (const letter of "Hello this is very looooong") {
//     console.log(letter);
// }
// forEach는 array에서만 사용이 가능하다!!!!


// 4) for of 장점  - 특정 단어를 찾을 때 루프를 멈출 경우
const friends = ["nico", "Lynn", "ha", "hu", "AA", "BB", "CC", "DD", ];

for (const friend of friends) {
    if (friend === "AA") {
        break;
    } else {
        console.log(friend);
    }
}