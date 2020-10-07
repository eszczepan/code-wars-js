function songDecoder(song) {
  return song.replace(/(WUB)+/gm, " ").trim();
}

// A B C
console.log(songDecoder("AWUBBWUBC"));
// A B C
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
// I AM X
console.log(songDecoder("WUBWUBIWUBAMWUBWUBX"));
// WE ARE THE CHAMPIONS MY FRIEND
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
