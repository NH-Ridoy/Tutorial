

function Person(name,email) {
    this.name = name;
    this.email = email;

    this.print = function() {
        console.log('Name : ' + this.name);
    }
}

var p1 = new Person('NH Ridoy','ridoyhossain5557@gmail.com');
var p2 = new Person('Imran Hossain', 'imranhossain5789@gmail.com');
var p3 = new Person('Mahmud Hasan Mahim','mahmudhasanmahim557@gmail.com');
// console.log(p1);

// var arr = [p1,p2,p3];

// arr.forEach(function(person) {
//     console.log('Name : ' + person.name);
//     console.log('Email : ' + person.email);
//     person.print();
// });

// for(var props in p1) {
//     console.log(props);
// }

function Book(name,author,price){
    this.name = name;
    this.author = author;
    this.price = price;
}

var book  = new Book('Functional Javascript','Micbael Fogus',30);

console.log(book.constructor);