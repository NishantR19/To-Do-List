let songIndex=0;
let audioElement=new Audio("Sahara.mp3");
let masterPlay=document.getElementById('masterPlay');
let songBar=document.getElementById('songBar');

let songs=[
    {songName: "Sahara", filePath: "appSong/Sah.mp3", coverPath: "songCover/ban.jpg"},
    {songName: "Sahara", filePath: "appSong/Sah.mp3", coverPath: "songCover/ban.jpg"},
    {songName: "Sahara", filePath: "appSong/Sah.mp3", coverPath: "songCover/ban.jpg"},
    {songName: "Sahara", filePath: "appSong/Sah.mp3", coverPath: "songCover/ban.jpg"},
    {songName: "Sahara", filePath: "appSong/Sah.mp3", coverPath: "songCover/ban.jpg"},
    {songName: "Sahara", filePath: "appSong/Sah.mp3", coverPath: "songCover/ban.jpg"},
    {songName: "Sahara", filePath: "appSong/Sah.mp3", coverPath: "songCover/ban.jpg"},
]

audioElement.play();
audioElement.pause();

masterPlay.addEventListener('click', ()=>{
if(audioElement.paused || audioElement.currentTime<=0){
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
gif.style.opacity=1;
}

else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
}

})


songBar.addEventListener('timeupdate', ()=>{

console.log('timeupdate');

});