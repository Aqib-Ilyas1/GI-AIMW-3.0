function make_album(artist,title,tracks){
    let album={
        artist: artist,
        title: title,
        tracks: tracks
    }
    return album;
}

let album1 = make_album('Atif', 'Wohee khuda he',3);
let album2 = make_album('Lohar', 'Jugnoo', 12); // Including tracks
let album3 = make_album('Asim', 'PSL',15);

console.log(album1);
console.log(album2);
console.log(album3);