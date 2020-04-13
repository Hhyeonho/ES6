// #destructing 
//object 나 array 그 외 요소들 안의 변수를 바깥으로 끄집어 내서 사용할 수 있도록 하는 것


const settings = {
    notifications: {
        // follow: true,
        alerts: true,
        unfollow: false
    },
    color: {
        theme: "dark"
    }
}



// const {
//     notifications: {follow = false} // default 값으로 false를 넣어줌
// } = settings;

const { notifications: {follow = false} = {} } = settings;  // one line statement 

console.log(follow);

const {
    color: { theme = "light" }
} = settings;

console.log(theme)

console.log(settings)










