// #3.2 HTML Fragments Part Two
// 자바스크립트를 통해 html 파일에 들어갈 코드를 생성

const wrapper = document.querySelector(".wrapper");

const friends = ['me', 'lynn', 'dal', 'mark'];

const ul = document.createElement('ul');

// friends.forEach(friends => ul.append(`<li>${friend}</li>`))
// wrapper.append(ul);

const list = `
    <h1>People i love</h1>
    <ul>
        ${friends.map(friend => `<li>${friend}</li>`).join("")}
    </ul>
`
wrapper.innerHTML = list;




