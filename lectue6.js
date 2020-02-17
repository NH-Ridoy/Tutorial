function host() {
    console.log('I am host function');
    function child(){
        console.log('I am child function');
    }
    return child;
}

var output = host();
output();


function greeting(msg) {
    return function(name) {
        console.log(msg + ' ' + name);
    }
}

function greeting(msg) {
    function name(name) {
        console.log(msg + ' ' + name);
    }
    return name;
}



var out = greeting('Good Morning,');
var final = out('Mahmud Hasan Mahim');


