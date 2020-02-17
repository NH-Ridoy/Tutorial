// var name = 'Stack learner';

// function sayName() {
//     console.log('Hello,' + name);
// }

// //console.dir(sayName);

// console.log('Hello Ridoy');

// sayName();


function greeting(msg) {
    function name(name) {
        console.log(msg + ' ' + name);
    }
    return name;
}



var out = greeting('Good Morning,');
var final = out('Mahmud Hasan Mahim');