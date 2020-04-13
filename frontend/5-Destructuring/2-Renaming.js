// const settings = {
//     color: {
//         chosen_color: 'dark'
//     }
// }

// const {
//     color: { chosen_color = "light" }
// } = settings;

// console.log(chosen_color)

// const chosenColor = settings.color.chosen_color || "light";  // 만약 데이터 없으면 light
// console.log(chosenColor);

/////////////////////////////////////////////


const settings = {
    color: {
        chosen_color: 'dark'
    }
};


// let {
//     // setting 안의 color의 chosen_color값을 가져오는데 만약 값이 존재하지 않으면 light를 기본값
//    color: { chosen_color: chosenColor = "light" } 
// } = settings;

// console.log(chosenColor);


let chosenColor = "blue";       // const도 가능하긴한데 const는 값이 변할 수 없으므로 오류가 발생
console.log(chosenColor);

({
    color: { chosen_color: chosenColor = "light" } 
} = settings);

console.log(chosenColor);