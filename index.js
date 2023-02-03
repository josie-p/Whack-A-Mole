let score = 0;

let displayScore = document.getElementById('score');

let holes = document.getElementsByClassName('hole');

//put the mole on a random hole:
setInterval(function (){
    let randomHoleIdx = Math.floor(Math.random() * holes.length);
    holes[randomHoleIdx].classList.toggle('mole');
}, 300);

//event listener:
const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function(clickEvent){
    if (clickEvent.target.matches('.mole')){
        clickEvent.target.classList.remove('mole');
        score++;
        displayScore.innerText = score;
    }
})