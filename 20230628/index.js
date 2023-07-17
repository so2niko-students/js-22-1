import { names, roles } from './db.js';

function randNPC(){
    const age = r(18, 100);
    const gender = r(0, 10) >= 5 ? 'female' : 'male';
    const rName = r(0, 100) + (gender === 'female' ? 0 : 100);
    const name = names[rName];
    const rRole = r(0, roles.length - 1);
    const role = roles[rRole];
    return {
        name, 
        age, 
        gender,
        role
    };
}

function r(from = 0, to = 1000){
    return Math.floor(Math.random() * ( to - from + 1) + from);
}

// console.log(randNPC());

class NPC{
    #gender;
    constructor(town){
        this.town = town;
        this.age = this.#r(18, 100);
        this.#gender = this.#r(0, 10) >= 5 ? 'female' : 'male';
        const rName = this.#r(0, 100) + (this.#gender === 'female' ? 0 : 100);
        this.name = names[rName];
        const rRole = this.#r(0, roles.length - 1);
        this.role = roles[rRole];
    }

    #r(from = 0, to = 1000){
        return Math.floor(Math.random() * ( to - from + 1) + from);
    }

    hello(){
        return `Hello, my name is ${ this.name }, I am ${ this.age } old`;
    }

    getYoB(){
        const yNow = (new Date()).getFullYear();
        const yob = yNow - this.age;
        return yob;
    }

    get yob(){//getter 
        const yNow = (new Date()).getFullYear();
        const yob = yNow - this.age;
        return yob;
    }

    set gender(g){//setter 
        const genders = ['male', 'female'];
        if(genders.includes(g)){
            this.#gender = g;
        }else{
            console.log('Error, I do not have info about this gender:', g);
        }
    }
}

const aa = new NPC('Manchester');
console.log(aa);
// console.log(aa.#gender);
// aa.#gender = 'Cat';
// console.log(aa.#r());
console.log(aa.hello());
console.log(aa.getYoB());
console.log(aa.yob);
aa.gender = 'dog';
