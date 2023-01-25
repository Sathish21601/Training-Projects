const list = document.querySelector(".song_list");
const songs = [
  "For_Aisha.mp3",
  "Lost_The_Game.mp3",
  "Only_Time.mp3",
  "Silent_Child_F_U.mp3",
  "Stephen_Crossfire.mp3",
];

songs.forEach(function (song) {
  list.innerHTML += `<li>${song}</li>`;
});

function play() {
    var audio = document.getElementById("player");
    audio.play();
}
