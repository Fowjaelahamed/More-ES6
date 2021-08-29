// common class or supper class
class TeamMember {
    name;
    designation = 'support web dev';
    address = 'BD';
    // for setting value in class we have to use this constructor function
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
// support class 
class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    // for creating function in class we don't use 'function' before fucntion name
    startSession() {
        console.log(this.name, 'will start a support session');
    }
}
// studentCare class 
class StudentCare extends TeamMember {
    buildARoutine(student) {
        console.log(this.name, 'build a new routine for', student);
    }
}
// NeptuneDev class 
class NeptuneDev extends TeamMember{
    codeEditor;
    constructor(name,address,editor){
        super(name,address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version ', version);
    }
}

// creating new object of Support class
const amir = new Support('amir khan', 'BD', 11);
const salman = new Support('Salman khan', 'India', 12);
const srk = new Support('SRK', 'UK', 10);
// console.log(amir, salman, srk);
// amir.startSession();
// salman.startSession();
// srk.startSession();

// creating new object for StudentCare 
const alia = new StudentCare('alia bhatt', 'mumbai');
// console.log(alia);

// creating object for NeptuneDev 
const allu = new NeptuneDev('allu arjun','hydrabad','Visual studio');
console.log(allu);
allu.releaseApp('1.5.00');
