// function Person() {
//     this.name = 'Twinkle Cats';
// }

// function Teacher() {
//     Person.call(this);
//     this.subject = 'Javascript';
// }

// var teacher = new Teacher();
// var name = teacher.name;

// console.log(name)


function Person(name) {
    this.name = name;
}



Person.prototype.printName = function () {
    console.log('Name : ' + this.name);
}

Person.prototype.another = function() {
    console.log('This is an another function');
}

function Student(name , id) {
    Person.call(this , name);
    this.id = id;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

var student = new Student('Mahmud Hasan Mahim' , 1660);

Person.prototype.printName = function() {
    console.log(this.name + ' not copied');
}

student.printName();

Student.prototype.skill = 'Javascript';
