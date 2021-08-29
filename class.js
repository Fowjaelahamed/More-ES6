class Support {
    name;
    designation = 'support web dev';
    address = 'BD';
    // for setting value in class we have to use this constructor function
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    // for creating function in class we don't use 'function' before fucntion name
    startSession() {
        console.log(this.name, 'will start a support session');
    }
}
// creating new object of Support class
const amir = new Support('amir khan', 'BD');
const salman = new Support('Salman khan', 'India');
const srk = new Support('SRK', 'UK');
amir.startSession();
salman.startSession();
srk.startSession();
console.log(amir, salman, srk);