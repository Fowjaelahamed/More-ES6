const numbers = [3, 4, 34, 67, 24, 88];
// filter -> eita te condition use kore jodi condition true hoi sei elements ta ke array te add korbe
const bigNumbers = numbers.filter(number => number > 30);
// map e jodi condition use kori tahole every element er jonne true or false value array hisebe dibe
// const bigNumber = numbers.map(number => number > 30);
// console.log(bigNumber);
console.log(bigNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 34000, color: 'light-green' },
    { name: 'keyboard', price: 2000, color: 'black' },
    { name: 'laptop', price: 30000, color: 'black' },
];
// filter -> eita elements ta k array te dibe
const expensive = products.filter(product => product.price > 30000);
console.log(expensive);
const black = products.filter(product => product.color == 'black');
console.log(black);
// empty array dibe na match korle 
const black1 = products.filter(product => product.color == 'pink');
console.log(black1);

/* 
            find 
 */
// eita te jodi condition match kore tahole sei elements k dibe. "array hisebe na"
const lightGreen = products.find(product => product.color == 'light-green');
console.log(lightGreen);
// jodi onek gula match kore tahole jei elements first e thakbe take dibe
const findBlack = products.find(p => p.color == 'black');
console.log(findBlack);