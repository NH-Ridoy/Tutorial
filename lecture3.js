

// function outer() {

//     var a = 10;

//     function inner() {
//        console.log('I am inner function');
//        console.log(a);
      
//     }
    

//      console.log('I am outer function');
//      inner();
    
// }


// outer();


function demo(a,b){

    function add(){
        var add = a + b;
        console.log(add);

        function subtraction(){
            var sub = a - b;
            console.log(sub);
            
            function div(){
                var div = a/b;
                console.log(div);

                function mul(){
                    var mul = a*b;
                    console.log(mul);
                }
                mul();
            }
            div();
        }
        subtraction();
    }
    add();

}


demo(10,5);



function dam(c,d){

    function a(){
        return c + d;
    }

    function f(){
        return c/d;
    }

    function s(){
        return c-d;
    }

    function m(){
        return c*d;
    }

    return (a() + m() + f() + s());
}

var ram = dam(10,5);

console.log(ram);

