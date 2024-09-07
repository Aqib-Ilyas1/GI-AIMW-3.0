
var magiciansnames=["Mian Afzal Rasheed","Sabir Ali","Khuda Bux","Afzaal Afridi","Ishfaq Ahmed"]

function make_great(magiciansnames){
    for(let i=0;i<magiciansnames.length; i++){
    magiciansnames[i] = `The Great ${magiciansnames[i]}`;
    }
}

function show_magicians(magiciansnames){
    for (let magician of magiciansnames) {
        console.log(magician);
    }
}

make_great(magiciansnames);
show_magicians(magiciansnames);
