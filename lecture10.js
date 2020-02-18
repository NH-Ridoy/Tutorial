var hi = [1, 2, 3, 4, 5, 6];

function test(para,func) {
    for(var i=0; i <= para.length; i++){
        func(para[i],i);
    }
}


test(hi,function(para,index){
    console.log('Element' + para + ' index ' + index);
});

