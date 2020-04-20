// #Generators

// 1)
function* listPeople(){ // *을 넣게되면 yield를 해제하여 사용할 수 있게 됌!    
    yield "Dal",
    yield "AAA",
    yield "BBB",
    yield "CCC",
    yield "DDD",
    yield "EEE"
}

const listG = listPeople();

// console.log(listG)
// listG.next()


// 2)
const friends = ["AA", "BB", "CC", "DD"]

function* friendTeller(){
    // friends.forEach((friend) =>{
    //     yield friend;
    // })
    
    for(const friend of friends){
        yield friend;
    }

}

const friendLooper = friendTeller();

// friendLooper.next()