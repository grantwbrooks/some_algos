function getdigits(str){
    var mystring = str.split("");
    console.log(mystring);
    var newstring = "";
    for (var i = 0; i<mystring.length; i++){
        if(mystring[i]==0||mystring[i]==1||mystring[i]==2||mystring[i]==3||mystring[i]==4||mystring[i]==5||mystring[i]==6||mystring[i]==7||mystring[i]==8||mystring[i]==9){
            newstring += mystring[i];
        }
    }
    y = Number(newstring);
    console.log(typeof y);
    return y;
}



x = "0adsflkj343209dsf!lk$*#&adsf23234k2jklj23lj"
console.log(getdigits(x));