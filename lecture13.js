var arr = [5, 9, 1, 2, 3, 4, 5, 10, 20];

// var value = 0;

// for(var i=0; i < arr.length; i++) {
//     value+=arr[i];
// }

// console.log(value);

var output = arr.reduce(function(a,b) {
    return a+b;
});
console.log(output);