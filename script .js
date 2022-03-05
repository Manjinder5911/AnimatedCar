let audio = new Audio('sound.mp3');
audio.loop = true;
audio.volume = 0.2;
let btn = document.getElementById('btn');
let track = document.getElementById('track');
let car = document.getElementById('car');
let wheel1 = document.getElementById('wheel1');
let wheel2 = document.getElementById('wheel2');
btn.addEventListener('click',(e)=>{
    if(audio.paused){
        btn.innerText = "Pause";
        audio.play()
        track.style.animationPlayState = 'running';
        car.style.animationPlayState = 'running';
        wheel1.style.animationPlayState = 'running';
        wheel2.style.animationPlayState = 'running';
    }
    else{
        btn.innerText = "Play";
        audio.pause();
        track.style.animationPlayState = 'paused';
        car.style.animationPlayState = 'paused';
        wheel1.style.animationPlayState = 'paused';
        wheel2.style.animationPlayState = 'paused';
    }
});
