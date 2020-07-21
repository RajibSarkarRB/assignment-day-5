class User {
    constructor(name, age,email){
        this.name = name;
        this.age= age;
        this.email= email;
        this.courses=[];
    }
    login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
}


let user1 = new User('Ram', 45, 'r@gmail.com')
let user2 = new User('sam', 54, 's@gmail.com')
user2.login()
user2.logout()

class Moderator {
    constructor(name, age,email){
        this.name = name;
        this.age= age;
        this.email= email;
        this.coins= 0;
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addcoins(){
        this.coins++;
        console.log(`${this.name} has ${this.coins} coins`);
        return this;
        }
    removecoins(){
        this.coins--;
        console.log(`${this.name} has ${this.coins} coins`);
        return this
        }
}


let mod1 = new Moderator('rabiam', 45, 'r@gmail.com')


mod1.login()
mod1.addcoins()
mod1.addcoins()
mod1.removecoins()
mod1.logout()




class Admin {
    constructor(name, age,email){
        this.name = name;
        this.age= age;
        this.email= email;
        this.coins= 0;
        this.courses=[];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addcoins(){
        this.coins++;
        console.log(`${this.name} has ${this.coins} coins`);
        return this;
        }
    removecoins(){
        this.coins--;
        console.log(`${this.name} has ${this.coins} coins`);
        return this
        }
    addcourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
}


let admin = new Admin('Raja', 45, 'raja@gmail.com')
admin.addcourse(user1,'java');



