let Gravity = 40;
let Player = document.getElementById("Player")
let Pillar = document.getElementById("Pillar")
let PillarSafe = document.getElementById("PillarSafe")
let Points = 0


Player.style.bottom = Gravity + "px  "

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jump(){
    a= Gravity
        Gravity = Gravity+25
        Player.style.transform = "rotate(-30deg)";
        setTimeout(function(){ Player.style.transform = "rotate(75deg)"; }, 1000);
}


function PillarSafeMove(){
    document.getElementById("Pillar").classList.add("PillarMove")
    
    
    setInterval(function(){ 
        



if(Player.offsetLeft > (Pillar.offsetLeft -55) && (Player.offsetLeft < (Pillar.offsetLeft +90)) && ((Player.offsetTop + 55) >= (PillarSafe.offsetTop + 250) || (Player.offsetTop) <= (PillarSafe.offsetTop))){ //if the players X position is within Pillars X position AND players Y position is outside of PillarsSafe Zone Player dies This was harder than it looks
    document.getElementById("Pillar").classList.remove("PillarMove")
    
}
        if (Gravity != 10 && Gravity > 10){
        Gravity--
        Player.style.bottom = Gravity + "%"
    }

        if(Gravity >   105){
            
            Gravity--
            Gravity = Gravity -5
            Player.style.bottom = Gravity + "px"
        }
        
        else{
        }
     }, 25);
    
    
    document.body.onkeydown = function(e){
        if(e.keyCode == 32){
            a= Gravity
            Gravity = Gravity+25
            Player.style.transform = "rotate(-30deg)";
            setTimeout(function(){ Player.style.transform = "rotate(75deg)"; }, 1000);
        }
    }

  


    
setInterval(function(){ 
    console.log(Pillar.offsetLeft)
    if(Pillar.offsetLeft <= -101   ){
        Points++
        document.getElementById("Points").innerHTML = Points
    rand = generateRandomIntegerInRange(60,280);
    document.getElementById("PillarSafe").style.top = rand +"px"
    console.log("is this shit updating?" +rand+"px")
}
 }, 50);
 
}

PillarSafeMove() 