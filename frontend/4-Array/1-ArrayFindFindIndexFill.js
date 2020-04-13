// #4.1 Array.find() Array.findIndex() Array.fill()

const friends = [
    "nico@gmail.com",
    "lynn@naver.com",
    "dal@yahoo.com",
    "mark@hotmail.com",
    "flynn@gorea.com",
    "aaa@korea.com",
]

// // 1) Array.find()
// const target = friends.find(friend => friend.includes("@korea.com"));
// const target2 = friends.find(friend => true);   // true 이면 첫번째 값
// console.log(target)
// console.log(target2)


// // 2) Array.find()
const check = () => friends.findIndex(friend => friend.includes("@gorea.com"));
let targetIndex = check();

if(targetIndex !== -1){
    console.log("수정 전", targetIndex, friends[targetIndex])   // index >> 4 

    const userName = friends[targetIndex].split("@")[0];

    console.log(userName)   // @gorae.com 을 포함하는 아이디 flynn 반환

    const email = "korea.com";

    friends[targetIndex] = `${userName}@${email}`;  // gorea.com 이메일 값을 korea.com 으로 수정!
    console.log(friends[targetIndex])

    targetIndex = check();

    console.log("수정 후 ",targetIndex, friends[targetIndex])
}
 
console.log(targetIndex)
//console.log(friends)


// 3) Array.fill()

// const check2 = () => friends.findIndex(friend => friend.includes("@gorea.com"));
// let targetIndex2 = check2();
// console.log(targetIndex2)
// if(targetIndex2 !== -1){
//     friends.fill("*".repeat(5), targetIndex2);
// }

// console.log(friends);

