for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", onClick);
}

goldenWind = "";
function onClick(){
    var buttonInnerHTML= this.innerHTML;
    goldenWind+=buttonInnerHTML;
    reset();
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
document.addEventListener("keydown", keyBoard);

function keyBoard(event){
      var pressed=  event.key;
      goldenWind+=pressed;
      reset();
      makeSound(pressed);
      buttonAnimation(pressed);
      return;
}
function reset(){
    if(goldenWind.length>=11){
        while(goldenWind.length>0){
            goldenWind=goldenWind.slice(1);
        }
    }
}
function makeSound(pressed){
    switch(pressed){
        case "g":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "o":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "l":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "w":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "i":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "n":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;                            
        default: ;   

    }
    if(goldenWind === "goldenwind" || goldenWind === "goldwind"){
        document.querySelectorAll("h1")[0].innerHTML = "Golden Wind";
        var wryyyy= new Audio("sounds/JoJo_s_Bizarre_Adventure_Golden_Wind_OST___Giorno_(M4A_128K).mp3");
        wryyyy.play();
        document.querySelector(".bg-img").style.backgroundImage = "url('https://i.ytimg.com/vi/mMtxZUXCAIk/maxresdefault.jpg')";
        document.querySelector("h1").classList.add("ani");
        for(var i=0; i<document.querySelectorAll(".drum").length; i++){
        document.querySelectorAll(".drum")[i].classList.add("animation");}
        document.querySelector("h1").style.visibility= "hidden";
        var loop = setInterval(function(){
            document.querySelector("h1").style.visibility= "hidden";
            for(var i=0; i<document.querySelectorAll(".drum").length; i++){
                document.querySelectorAll(".drum")[i].style.visibility="hidden";}
            setTimeout(function() {document.querySelector("h1").style.visibility="visible";
            for(var i=0; i<document.querySelectorAll(".drum").length; i++){
                document.querySelectorAll(".drum")[i].style.visibility="visible";}
        },5);
           setTimeout(function(){clearInterval(loop)},3000);
        }, 10);
        setTimeout(function(){
            document.querySelectorAll("h1")[1].classList.remove("shit")
            document.querySelector("footer").style.display= "none";
        }, 17500);
    }
    reset();
    }
    


function buttonAnimation(pressedKey){
    var activeButton= document.querySelector("." + pressedKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}