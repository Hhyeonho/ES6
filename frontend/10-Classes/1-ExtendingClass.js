// 1)

// this는 클래스 그 자체를 가리킨다.
class User {
    constructor(name, lastName, email, password) {
        this.username = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.something = "I love Korea"
    }
    sayHello() {
        console.log(`Hello, I'm ${this.username}`);
    }
    getProfile() {
        console.log(`${this.username} ${this.email} ${this.password}`)
    }
    updatePassword(newPassword, currentPassword) {
        if (currentPassword === this.password) {
            this.password = newPassword
        } else {
            console.log("Can't change PW!")
        }

    }
}

const sexyUser = new User("AA", "BB", "CC@naver.com", "1234");

// sexyUser.sayHello();
// sexyUser.getProfile();

// console.log(sexyUser.password)
// sexyUser.updatePassword("hello", "11111")
// console.log(sexyUser.password)


// admin은 user의 extension!!
class Admin extends User { // Admin 클래스에서 User의 정보를 연장하고 있음!
    // constructor를 따로 정의해서 기존의 constructor를 잃게 되어 오류 발생
    constructor(superAdmin) {
        this.superadmin = superAdmin;
    }
    deleteWebsite() {
        console.log("Deleting the whole website...");
    }
}

const sexyAdmin = new Admin("EE", "FF", "GG@naver.com", "2222", true);

sexyAdmin.deleteWebsite();

console.log(sexyAdmin.email);