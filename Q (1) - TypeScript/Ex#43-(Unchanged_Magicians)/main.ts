// ******************* ex 41 *********************

// function show_magicians(){
//     var magiciansnames=["Mian Afzal Rasheed","Sabir Ali","Khuda Bux","Afzaal Afridi","Ishfaq Ahmed"]
//     console.log(magiciansnames)
//     return show_magicians;
// }

// show_magicians();

// ******************* ex 42 ********************

var magiciansnames=["Mian Afzal Rasheed","Sabir Ali","Khuda Bux","Afzaal Afridi","Ishfaq Ahmed"]

function make_great(magiciansnames){
    for(let i=0;i<magiciansnames.length; i++){
    var newarr = [`The Great ${magiciansnames[i]}`];
    }
    
}

function show_magicians(magiciansnames){
    for (let magician of magiciansnames) {
        console.log(magician);
    }
}

make_great(magiciansnames);
show_magicians(magiciansnames);
