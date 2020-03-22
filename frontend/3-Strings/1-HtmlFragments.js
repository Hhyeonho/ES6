// #3.1 HTML Fragments
// 자바스크립트를 통해 html 파일에 들어갈 코드를 생성

const wrapper = document.querySelector(".wrapper");

// 1 - document 와 . 을 통해 html에 들어갈 코드 작성
// const addWelcome = () => {
//     const potato = document.createElement("div");
//     const h1 = document.createElement("h1");
//     h1.innerText = 'Hello';
//     h1.className = "sexyTitle";
//     potato.append(h1);
//     wrapper.append(potato);  // wrapper에 potato에 들어간 코드를 넣어줌
// }
// setTimeout(addWelcome, 2000);


// 2 - 변수 내에 ` `값으로 html코드를 넣고 innerHTML을 통해 코드를 넣어줌 
const addWelcome = () => {
    const potato = `
        <div class = 'hello'>
            <h1 class = 'title'>Hello</h1>
        </div>
    `
    wrapper.innerHTML = potato;
}

setTimeout(addWelcome, 2000);