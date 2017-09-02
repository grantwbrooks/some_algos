function doubletrouble(arr){
    for(var i = arr.length-1; i>=0; i--){
        arr[2*i+1] = arr[i];
        arr[2*i] = arr[2*i+1];
    }
    return arr;
}

x = ["hi","havisha",-1,false];
console.log(doubletrouble(x));