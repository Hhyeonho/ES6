// # 5.4 변수명 단축



// 1)
const follow = checkFollow();
const alert = checkAlert();

const settings = {
    notifications: {
        follow,         // follow : follow, // 변수명 단축을 통해 변수명이 같으면 다시 안쓰게 해줌
        alert
    }
};
