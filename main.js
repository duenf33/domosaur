// 1
const span = document.querySelector('span.mess-with-me');
span.style.fontSize = '3em';
// 2
const secondParagraph = document.querySelector('p.mess-with-me');
secondParagraph.style.backgroundColor = 'green';
// 3
const hideImg = document.querySelector('#hide-me-area');
hideImg.remove();
//4
const firstImg = document.querySelector('#triceratops');
firstImg.style.width = '324px';
// ****************************

// 1
const makeOrange = () => {
    span.style.color = 'orange';
}
span.addEventListener('click', makeOrange)
// 2
const redBorder = () => {
    firstImg.style.border = 'solid red'
}
firstImg.addEventListener('click', redBorder);
// 3
const feather = document.querySelector('#feathers');
const transparent50percent = () => {
    feather.style.opacity = '0.5';
}
feather.addEventListener('click', transparent50percent);
// 4
const button = document.querySelector('#toggle');
const row = document.querySelector('#row')
const switchBackground = () => {
    if(row.style.backgroundColor === 'white'){
        row.style.backgroundColor = 'orange';
    } else {
        row.style.backgroundColor = 'white';
    }
}
button.addEventListener('click', switchBackground);
// 5
const big = document.querySelector('#biggify');
const hoverIn = () => {
    big.style.width = '200px';
}
const hoverOut = () => {
    big.style.width = '162px';

}
big.addEventListener('mouseover', hoverIn);
big.addEventListener('mouseout', hoverOut);