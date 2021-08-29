// destructuring
// object er property kei variable hisebe neoar jonne destructuring use kora hoi 
const fish = { id: 59, name: 'king hilsha', price: 8000, phone: 013241234234, address: 'chandpur', dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

// declare variable based on the name of an object property
const { phone, price, dress, id } = fish;
// const {phone,price,dress,id} = {id: 59,name: 'king hilsha',price: 8000,phone:013241234234,address:'chandpur',dress:'silver'};


// console.log(phone, price);
// console.log(phone);
// console.log(phone, price, dress);
// console.log(phone, id);
// console.log(phone, id, dress);

const company = {
    name: 'gp',
    ceo: { id: 1, name: 'kolu', food: 'fuchka' },
    web: {
        work: 'website development', emplyee: 40, framework: 'react',
        tech: { first: 'html', second: 'css', third: 'js' }
    }
};
// const work = company.web.work;
// const framework = company.web.framework;

const { work, framework } = company.web;
const { food } = company.ceo;
const {second,third} = company.web.tech;
console.log(work, framework, food,second,third);