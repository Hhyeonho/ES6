// #4.1 Array.find() Array.findIndex() Array.fill()

const friends = [
    "nico@gmail.com",
    "lynn@naver.com",
    "dal@yahoo.com",
    "mark@hotmail.com",
    "flynn@gorea.com",
]

// // 1) Array.find()
// const target = friends.find(friend => friend.includes("@korea.com"));
// const target2 = friends.find(friend => true);   // true 이면 첫번째 값
// console.log(target)
// console.log(target2)


// // 2) Array.find()
// const check = () => friends.findIndex(friend => friend.includes("@gorea.com"));
// let targetIndex = check();

// if(targetIndex !== -1){
//     console.log(targetIndex);

//     const userName = friends[targetIndex].split("@")[0];

//     const email = "korea.com";

//     friends[targetIndex] = `${userName}@${email}`;

//     targetIndex = check();
// }
 
// console.log(targetIndex)
// console.log(friends)


// 3) Array.fill()

const check2 = () => friends.findIndex(friend => friend.includes("@gorea.com"));
let targetIndex2 = check2();
console.log(targetIndex2)
if(targetIndex2 !== -1){
    friends.fill("*".repeat(5), targetIndex2);
}

console.log(friends);

