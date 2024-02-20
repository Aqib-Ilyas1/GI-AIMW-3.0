// function city_country(city, country){
//     return `${city}, ${country}`;
//     }
//     let location1 = city_country('Lahore', 'Pakistan');
//     let location2 = city_country('Makkah', 'Saudi Arabia');
//     let location3 = city_country('Beijing', 'China');
//     console.log(location1);
//     console.log(location2);
//     console.log(location3);
var magiciansnames = ["Mian Afzal Rasheed", "Sabir Ali", "Khuda Bux", "Afzaal Afridi", "Ishfaq Ahmed"];
function show_magicians(magiciansnames) {
    // console.log(magiciansnames)
    for (var _i = 0, magiciansnames_1 = magiciansnames; _i < magiciansnames_1.length; _i++) {
        var magician = magiciansnames_1[_i];
        console.log(magician);
    }
    // return magiciansnames;
}
function make_great(magiciansnames) {
    for (var i = 0; i < magiciansnames.length; i++) {
        // console.log("The Great " +magiciansnames)
        magiciansnames[i] = "The Great ".concat(magiciansnames[i]);
        console.log(magiciansnames);
    }
}
make_great(magiciansnames);
show_magicians(magiciansnames);
// make_great();
// let magicians: string[] = ['Merlin', 'Gandalf', 'Harry Potter'];
// function make_great(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = `the Great ${magicians[i]}`;
//     }
// }
// // Define the show_magicians function
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }
// Array of magicians
// let magicians: string[] = ['Merlin', 'Gandalf', 'Harry Potter'];
// Modify the array of magicians using make_great function
// make_great(magicians);
// // Display the modified array of magicians
// show_magicians(magicians);
