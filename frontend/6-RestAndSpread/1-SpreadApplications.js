
// 1)
// const friends = ['nico', 'lynn']

// const newFriends = [...friends, "dal"]
// console.log(newFriends);


// 2)
// const nico = {
//     username: "nico!!!"
// };

// console.log({ ...nico, password: 123})



// 3)
// const first = ["mon", "tue", "wed"]

// const weekend = ["sat", "sun"];

// const fullWeek = [...first, 'thu', 'fri', ...weekend];

// console.log(fullWeek);


// 4)

// object에 속성을 조건부로 추가하는 법?
const lastNmae = prompt("Last name");   // 작은 팝업 창

const user = {
    username: 'nico',
    age: 24,
    // lastNmae: lastNmae !== "" ? lastNmae : undefined         
    // lastName이 빈칸이 아니면 lastName값 넣고 빈칸이라면 undefined 

    ...(lastNmae !== "" && {lastNmae})  
    // lastName이 빈칸이 아니고 lastName 값이 있을경우 (둘다 True True 일 경우 전개!)
}

// console.log(typeof lastNmae);
console.log(user);








