// Function to create an album
function make_album(artist, title, tracks) {
    var album = {
        "artist": artist,
        "title": title
    };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
// Call the function to create albums
console.log(make_album("Artist1", "Album1"));
console.log(make_album("Artist2", "Album2", 10));
console.log(make_album("Artist3", "Album3", 12));
