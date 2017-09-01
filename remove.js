
function remove(arr){
    var newarr = [];
    for(var i = 0; i<arr.length; i++){
        if(arr[i]!=newarr[newarr.length-1]){
            newarr.push(arr[i]);
        }
    }
    return console.log(newarr);
}

x = [1,1,1,1,1,1,1,2,2,3,3,3,5,9]
remove(x);
