// function Person(name,age) {
//     this.name = name;
//     this.age = age;

//     this.print = function() {
//         console.log('Hello, ' + this.name);
//     }
// }


function Person(name,age) {
    this.name = name;
    this.age = age;
}

// Person.prototype.print = function() {
//     console.log('Hello, ' + this.name);
// }

// Person.prototype.email = 'nhridy@gmail.com';

// Person.prototype.hello = function() {
//     console.log(this.name, this.age);
// }


Person.prototype = {
    print: function() {
        console.log('Hello, ' + this.name);
    },
    hello: function() {
        console.log(this.name, this.age);
    },
    email: 'nhridoy@gmail.com'
}



var p = new Person('Ridoy',20);
var o = new Person('Mahmud Hasan Mahim',21);

console.log(p);
console.log(o);

