var arr = [4, 5, 6, 7, 8, 9];

arr.forEach(function(element,index,arr) {
    console.log('Element is = ' + element + ' index of element = ' + index + ' Array = ' + arr);
});

// Creating forEach function

function loop(arr,callback) {
    for(var i=0; i <= arr.length; i++){
        callback(arr[i]);
    }
}

loop(arr,function(element){
    console.log(element);
});


