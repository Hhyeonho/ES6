// # Set
// set 은 항상 유니크하여야 한다!

// 1)
const user = {
    age: 12,            // value
    name: 'nico',       // value
};

user.oneMore = true;

user.name = null;
 


// 2)
const sexySet = new Set([1, 2, 3, 4, 5, 6, 7 ,8])


// * console

// has - 갖고 있는지 여부
// sexySet.has(0)   
// true

// sexySet.has(9)
// false


// set 일부삭제
// sexySet.delete(1)

// set 전체삭제
// sexySet.clear()

// sexySet

//  set 일부추가
// sexySet.add("Hi")

// set 크기
// sexySet.size

// set의 키
// sexySet.keys()


