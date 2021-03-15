timeLeft = 80;

if (localStorage.getItem("highScore") == undefined){
    localStorage.setItem("highScore", "0");
    //document.getElementById("result").innerHTML = localStorage.getItem("highScore");
} else {
    
   // document.getElementById("result").innerHTML = localStorage.getItem("highScore");
}
document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start-button')
    

    function countDown(){
        setInterval(function(){
            if(timeLeft <= 0 ) {
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        }, 1000)
    }

startBtn.addEventListener('click', countDown)
})

function setHighScore(){
    console.log((localStorage.getItem("highScore")));
    if(localStorage.getItem("highScore") <= timeLeft){
    localStorage.setItem("highScore", timeLeft);
    document.getElementById("result").innerHTML = localStorage.getItem("highScore");
    } else document.getElementById("lowScore").innerHTML = "Good Job, but it we not a high score";

}

function checkAnwser(i) {
        
        if (i == 30) {
        console.log("correct");
        console.log(i);
        setHighScore();
        } 
        else {console.log("false");
        timeLeft -=5;
        document.getElementById("lowScore").innerHTML = "Try Again"
        }
    }

