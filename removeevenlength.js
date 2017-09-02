function removeeven(arr){
    var j = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i].length%2 != 0){
            arr[j] = arr[i];
            j++;
        }
    }
    arr.length = j;
    return console.log(arr);
}

x = ["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "chris", "with", "C)", "."]
removeeven(x);