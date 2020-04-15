// 1)
// // bluePrint
// class User {
//     constructor() {
//         this.username = "Nicolas";
//     }
//     sayHello() {
//         console.log("Hello, I'm Nico ");
//     }
// }

// // alive
// const sexyUser = new User();

// console.log(sexyUser.username, User.username);

// const uglyUser = new User();

// sexyUser.sayHello();
// uglyUser.sayHello();

// // setTimeout(sexyUser.sayHello, 4000);


// 2)
// const baseObject = {
//     username: 'Nico',
//     sayHello: function () {
//         console.log("I'm nico");
//     }
// };

// const sexyUser = baseObject;

// const uglyUser = baseObject;

// sexyUser.sayHello();
// uglyUser.sayHello();


// 3)
class User {
    constructor(name) {
        this.username = name;
    }
    sayHello() {
        console.log(`Hello, I'm ${this.username}`);
    }
}

const sexyUser = new User("AA");

const uglyUser = new User("BB");

console.log(sexyUser.username, uglyUser.username);
sexyUser.sayHello();
uglyUser.sayHello();