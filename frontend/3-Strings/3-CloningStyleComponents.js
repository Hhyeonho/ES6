// #3.3 Cloning Styled Components
//   

// 1
// const styled = (css) => console.log(css);

// styled`border-radius: 10px;
// color: blue`;

// 2
const styled = (aElement) => {
    const el = document.createElement(aElement);
    return args => {
        // console.log(args[0])
        const styles = args[0]
        el.style = styles;
        return el;
    };
};

const title = styled("h1")`
    background-color: red;
    border-radius: 10px;
    color: blue`;

const subtitle = styled("span")`
    color: green`;

title.innerText = "We just cloned";
subtitle.innerText = 'Styled Components';

document.body.append(title, subtitle);

console.log(title);




