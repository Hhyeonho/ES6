// #WeakSet

const weakSet = new WeakSet();

// weakSet.add({hi:true})

// weakSet에 object를 가리키는 것이 없다면 지워지게된다!


const sexy = {
    im : true
}

weakSet.add(sexy);


