let Gravity = 40;
let Player = document.getElementById("Player")
let Pillar = document.getElementById("Pillar")
let PillarSafe = document.getElementById("PillarSafe")


Player.style.bottom = Gravity + "px  "

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PillarSafeMove(){
    document.getElementById("Pillar").classList.add("PillarMove")
    
    
    setInterval(function(){ 
        



if(Player.offsetLeft >= (Pillar.offsetLeft -55) && ((Player.offsetTop + 55) >= (PillarSafe.offsetTop + 150) || (Player.offsetTop) <= (PillarSafe.offsetTop))){
     alert("Game over")
}
        if (Gravity != 0 && Gravity > 0){
        Gravity--
        Player.style.bottom = Gravity + "%"
    }

        if(Gravity >   105){
            Gravity--
            Gravity = Gravity -5
            Player.style.bottom = Gravity + "px"
        }
        
        else{}
     }, 25);
    
    

    document.body.onkeydown = function(e){
        if(e.keyCode == 32){
            Gravity = Gravity+15
        }
    }


    
setInterval(function(){ 
    console.log(Pillar.offsetLeft)
    if(Pillar.offsetLeft >= 700){
    rand = generateRandomIntegerInRange(10,280);
    document.getElementById("PillarSafe").style.top = rand +"px"
    console.log("is this shit updating?" +rand+"px")
}
 }, 50);
}

PillarSafeMove() 