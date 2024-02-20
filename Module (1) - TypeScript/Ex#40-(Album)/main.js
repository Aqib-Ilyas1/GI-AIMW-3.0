function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
        tracks: tracks
    };
    return album;
}
var album1 = make_album('Atif', 'Wohee khuda he', 3);
var album2 = make_album('Lohar', 'Jugnoo', 12); // Including tracks
var album3 = make_album('Asim', 'PSL', 15);
console.log(album1);
console.log(album2);
console.log(album3);
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     let album: { artist: string, title: string, tracks?: number } = {
//         artist: artist,
//         title: title
//     };
//     // Add tracks to the album object if provided
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// // Function call examples
// let album1 = make_album('Artist1', 'Album1');
// let album2 = make_album('Artist2', 'Album2', 12); // Including tracks
// let album3 = make_album('Artist3', 'Album3');
// // Print the album information
// console.log(album1);
// console.log(album2);
// console.log(album3);
