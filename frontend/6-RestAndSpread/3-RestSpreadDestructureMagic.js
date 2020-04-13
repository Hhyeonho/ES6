// 1)
const user = {
    name: "nico",
    age: 24,
    password: 12345
}

user['password'] = null;
console.log(user);

// const killPassword = ({password, ...rest }) => rest;
// const cleanUser = killPassword(user);
// console.log(cleanUser);

const setCountry = ({country = "KR", ...rest}) => ({ country, ...rest})
console.log(setCountry(user));

// 2)
const user2 = {
    NAME: "nico",
    age: 24,
    password: 12345
};

const rename = ({NAME: name, ...rest }) =>({name, ...rest})
console.log(rename(user2));





