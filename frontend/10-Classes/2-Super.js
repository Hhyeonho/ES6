// 1)

// // this는 클래스 그 자체를 가리킨다.
// class User {
//     constructor({
//         username,
//         lastName,
//         email,
//         password
//     }) {
//         this.username = username;
//         this.lastName = lastName;
//         this.email = email;
//         this.password = password;
//     }
//     sayHello() {
//         console.log(`Hello, I'm ${this.username}`);
//     }
//     getProfile() {
//         console.log(`${this.username} ${this.email} ${this.password}`)
//     }
//     updatePassword(newPassword, currentPassword) {
//         if (currentPassword === this.password) {
//             this.password = newPassword
//         } else {
//             console.log("Can't change PW!")
//         }
//     }
// }

// const sexyUser = new User({
//     username: "AA",
//     lastName: "BB",
//     email: "CC@naver.com",
//     password: "1234"
// });

// // admin은 user의 extension!!
// class Admin extends User { // Admin 클래스에서 User의 정보를 연장하고 있음!
//     // constructor를 따로 정의해서 기존의 constructor를 잃게 되어 오류 발생
//     constructor({
//         username,
//         lastName,
//         email,
//         password,
//         superAdmin,
//         isActive
//     }) {
//         super({
//             username,
//             lastName,
//             email,
//             password
//         }); // super - User의 consturctor를 호출한다!
//         this.superadmin = superAdmin;
//         this.isActive = isActive;
//     }
//     deleteWebsite() {
//         console.log("Deleting the whole website...");
//     }
// }

// const admin = new Admin({
//     username: "AA",
//     lastName: "BB",
//     email: "CC@naver.com",
//     password: "1234",
//     superAdmin: true,
//     isActive: true
// });




// 2)
class Counter {
    constructor({ initialNumber = 0,counterId, plusId, minusId }) {
        this.count = initialNumber;
        this.counter = document.getElementById(counterId);
        this.counter.innerText = initialNumber;
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.addEventListeners();
    }
    addEventListeners = () => {
        console.log(this);
        this.plusBtn.addEventListener("click", this.increase);
        this.minusBtn.addEventListener("click", this.decrease);
    }
    increase = () => {
        this.count = this.count + 1;
        this.repaintCount();
        console.log(this);
    }
    decrease = () => {
        this.count = this.count - 1;
        this.repaintCount();
        console.log(this);

    }
    repaintCount = () => {     // 바뀐 카운트를 새로고침하는 기능
        this.counter.innerText = this.count;
    }
}

new Counter({counterId: "count", plusId: "add", minusId: "minus"});
new Counter({counterId: "count2", plusId: "add2", minusId: "minus2", initialNumber: 666 });