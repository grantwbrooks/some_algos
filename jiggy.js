function jiggy(str){
    var first = str[0];
    var end = "";
    for (var i=1; i<str.length;i++){
        end+= str[i];
    }
    var stuff = " to the ";
    var rant = end.split("");
    var y = rant[0].toUpperCase();
    rant[0] = y;
    end = rant.join("");
    stuff = end + stuff + first + "!";
    return stuff;
}



x = "We are done";
console.log(jiggy(x));