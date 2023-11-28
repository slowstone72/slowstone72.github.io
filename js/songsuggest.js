/* Callum Fisher - cf.fisher.bham@gmail.com
Edited: 2.1.2023 */

const songs = [
    { 'title': 'Escape (The Pina Colada Song)', 'artist': 'Rupert Holmes', 'about': 'Released in 1998, this party hit single will be sure to wow your guests! See this song\'s <a href="articles/sr1.html">review</a>.' },
    { 'title': 'Live and Let Die', 'artist': 'Wings', 'about': 'Released in 1998, this party hit single will be sure to wow your guests!' },
    { 'title': "One Note Samba", artist: "Stan Getz" },
    { 'title': "Samba Triste", artist: "Stan Getz & Charlie Byrd" },
    { 'title': "O Grande Amor", artist: "Pat Metheny Group" },
    { 'title': "Reincarnation Of A Lovebird", artist: "Charles Mingus" },
    { 'title': "Never Let Me Go", artist: "Keith Jarrett Trio" },
    { 'title': "My Funny Valentine", artist: "Chet Baker" },
    { 'title': "You Don’t Know What Love Is", artist: "Dinah Washington" },
    { 'title': "I'm A Fool To Want You", artist: "Lee Morgan" },
    { 'title': "Moon Dreams", artist: "Miles Davis" },
    { 'title': "Mary's Theme", artist: "Stelvio Cipriani" },
    { 'title': "Since I Fell For You", artist: "Lee Morgan" },
    { 'title': "The Way We Were", artist: "Tsuyoshi Yamamoto Trio" },
    { 'title': "It had to be you", artist: "Frank Sinatra" },
    { 'title': "I've got you under my skin", artist: "Frank Sinatra" },
    { 'title': "Luck Be A Lady", artist: "Frank Sinatra" },
    { 'title': "Summer Wind", artist: "Frank Sinatra" },
    { 'title': "The Girl From Ipanema", artist: "Frank Sinatra" },
    { 'title': "Lemon Tree", artist: "Fools Garden" }
];

const messages = [
    "Try listening to \"Escape\" by Rupert Holmes!",
    "Hi",
    "Try listening to \"Live and Let Die by Wings!"
]

function getSongSuggestion() {
    const song = songs[songs.length * Math.random() | 0];
    const shortMessage = `Try listening to "${song.title}" by ${song.artist}!`;
  
    document.getElementById("short").innerHTML = shortMessage;
    document.getElementById("suggestion").style.display = "block";
    document.getElementById("suggestion").innerHTML = `<h1>${song.artist} - ${song.title}</h1>${song.about}`;
    document.getElementById("learn").style.display = "block";
    document.getElementById("learn").innerHTML = `<h1>Learn more...</h1>${song.about}`;
  }