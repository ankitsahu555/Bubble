function Makeboobles(){
    var bubbles = "";

for(var i = 1; i <= 126; i++){

    var number = Math.floor(Math.random()*10);


    bubbles += `<div class="bubble">${number}</div>`;

}

document.querySelector(".bottom").innerHTML = bubbles;
}

var timer = 30;
function TimeLess(){
   var count = setInterval(function(){
    if(timer > 0){
        timer --;
        document.querySelector("#RunTime").textContent = timer;
    }else{
        clearInterval(count);
        document.querySelector(".bottom").innerHTML = `<h1>Game Over.</h1>`
    }
    
        },1000) 
}

var hits;
function hitval(){
    hits = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hits;
}

var score = 0;
function IncreaseScore(){
    score += 10;
    document.querySelector("#scorecount").textContent = score;
}


document.querySelector(".bottom").addEventListener("click" , function(details){
    var clickedNumber = (Number(details.target.textContent));
    if(hits === clickedNumber){
        IncreaseScore();
        Makeboobles();
        hitval();
    }else{
        alert("Wrong...");
    }
})


Makeboobles();
TimeLess();
hitval();