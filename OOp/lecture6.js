// function printMe() {
//     console.log('Hello, ' + this.name);
// }

// var obj1 = {
//     name: 'Mahmud Hasan Mahim',
//     age: 21
// }
// var obj2 = {
//     name: 'Tanvir Hasan',
//     email: 'tanvirhasan@gmail.com'
// }

// var output = printMe.bind(obj2);
// var binded = printMe.bind(obj1);

// binded();
// output();

// printMe.call(obj1);


function add( a, b ) {
    return (a + b) * this.c;
}

var obj = {
    c: 3
}
var obj2 = {
    c: 5
}

var result =  add.call(obj,3,2);
console.log(result);
var res = add.apply(obj2,[5,5]);
console.log(res);

var res2 = add.bind(obj);
console.log(res2(7,5));