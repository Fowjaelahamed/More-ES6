const numbers = [4, 6, 8, 10];
const output = [];
/* // old style function 
function doubleOldIt (x){
    return x*2;
} */

// arrow function 
const doubleIt = (x) => x * 2;
for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);
}
// console.log(output);

/* // map jevabe kaj kore =>

1.loop through each element
2.for each element call the provided function
3.result for each element will be pushed/stored in an array
 */

// const output2 = numbers.map(doubleIt);
const output2 = numbers.map(x => x * 2);
console.log(output2);