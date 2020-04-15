// #Symbols
// 새로운 데이터 타입!

// 1)
// const hello = Symbol();
// const bye = Symbol();
// // hello === bye 
// // >> false

// 2)
// const hello = Symbol("hello");
// const bye = Symbol("hello");
// // hello
// // >> Symbol(hello)


// 3)
const superBig = {
    [Symbol("nico")]: {
        // handsome: true,
        age: 12
    },
    [Symbol("nico")]: {
        // handsome: true,
        age: 12
    },
    hello: "bye"
};

// superBig[nico].handsome = false;


//  * console

//  Object.keys(superBig)

//  Object.getOwnPropertySymbols(superBig)

//  const s = Object.getOwnPropertySymbols(superBig)

// s.forEach(symbol => console.log(superBig[symbol]))