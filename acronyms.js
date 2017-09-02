function acro(str){
    var mystring = str.split(" ");
    console.log(mystring);
    var acronym = "";
    for(var i = 0; i<mystring.length; i++){
        acronym += mystring[i][0];
    }
    return acronym.toUpperCase();
}

x = "live from New York";
console.log(acro(x));