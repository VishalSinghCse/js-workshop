let retreive = require('./bollywoodPlaylist')
let duration = 0;

let artistArray = [];

//console.log(retreive.songs[0].track.duration_ms);

//console.log(retreive.songs.length);

console.log(retreive.songs[0].track.album.artists.length );



for (let index = 0; index < retreive.songs.length; index++) {
    duration = duration + retreive.songs[index].track.duration_ms;  
}

console.log(duration);

// artist

// artist ke naam 
for (let index = 0; index < retreive.songs.length; index++) {       
    for (let j = 0; j < retreive.songs[index].track.album.artists.length ; j++) {

        artistArray.push(retreive.songs[index].track.album.artists[j].name)  

    }
    
}

let filteredArtistArray = artistArray.filter(function (item, pos) {
    return artistArray.indexOf(item) == pos;
});

console.log(filteredArtistArray);

for (let index = 0; index < filteredArtistArray.length; index++) {
    console.log('\n');
    
    console.log(filteredArtistArray[index], '=>');
    for (let j = 0; j < retreive.songs.length; j++) {
        for (let k = 0; k < retreive.songs[j].track.album.artists.length; k++) {
        
            if (filteredArtistArray[index] == retreive.songs[j].track.album.artists[k].name) {
               

                console.log(retreive.songs[j].track.name);

            }

        }

        
    }

}


//console.log(artistArray);
