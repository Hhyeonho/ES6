// #Proxies
// filter로 생각할 수도 있다

// 1)
const userObj = {
    username: "nico",
    age: 12,
    password: 1234
}

const userFilter = {

    // trap
    get: (target, prop, receiver) => {   
        // console.log("Somebody is getting something");

        // return "NOTHING";

        // console.log(target)
        // console.log(prop)
        // console.log(receiver)
        
        return prop === "password" ? `${"*".repeat(5)}` : target[prop]
    },
    set: () => {   
        console.log("Sombody wrote something")
    },
    deleteProperty: (target, prop) => {
        // return "NOT ALLOWED TO TOUCH";
        if( prop === "password"){
            return;
        }else{
            target[prop] = "DELETED";
        }
    }
};

const filteredUser = new Proxy(userObj, userFilter);

// filteredUser.age


// filteredUser.password
// filteredUser.active = true;

