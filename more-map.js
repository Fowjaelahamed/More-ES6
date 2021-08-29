const friends = ['tom hanks', 'tom cruise', 'tom', 'jerry'];
const fLenghts = friends.map(friend => friend.length);
// console.log(fLenghts);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 34000, color: 'light-green' },
    { name: 'keyboard', price: 2000, color: 'black' },
    { name: 'laptop', price: 30000, color: 'silver' },
];
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
products.map(product => console.log(product));

console.log(productNames);
console.log(productPrices);

// forEach
products.forEach(product => console.log(product)); //eita map er moto return korbe na

