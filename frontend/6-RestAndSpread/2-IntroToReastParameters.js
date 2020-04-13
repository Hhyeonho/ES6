
// 1)
// const infiniteArgs = (...kimchi) => console.log(kimchi);

// infiniteArgs("1", 2, true, "lalala", [1, 2, 3, 4], "wewewewew", "lalala", 1, 4, 5)


// 2)
const bestFriendMaker = (firstOne, ...potato) => {
    console.log(`My best ffriend is ${firstOne}`);
    console.log(potato);
};

bestFriendMaker("nic", "lynn", "dall", "japan guy");


