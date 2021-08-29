const myObject = { x: 2, y: 4, z: 50, a: 20, b: 40 };
const { x, y } = myObject;
// console.log('myObject.p', myObject?.p?.q);

// destructuring array 
const [p, q] = [45, 37];
console.log(p, q);

const [best, faltu] = ['shr', 'last'];
// console.log(best,faltu);

// object theke destructuring
const { sky, color } = { sky: 'blue', soil: 'mati', color: 'red', money: 500 };

// chaining
const company = {
    name: 'gp',
    ceo: { id: 1, name: 'kolu', food: 'fuchka' },
    web: {
        work: 'website development', emplyee: 40, framework: 'react',
        tech: { first: 'html', second: 'css', third: 'js' }
    }
};

console.log(company.web.tech.third);
// TypeError: Cannot read property 'tech' of undefined
// console.log(company.back.tech.third);
// solving this TypeError by using optional chaining, we use ? before . and we ask is this property avaiable or not then if not then got to next
console.log(company?.back?.tech.third);