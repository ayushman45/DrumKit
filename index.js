var num=document.querySelectorAll(".drum").length;
for( var i =0; i<num; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonhtml=this.innerHTML;
        makesound(buttonhtml);
        
    });
    document.querySelectorAll(".drum")[i].addEventListener("keypress",function(keys){
        var buttonhtml=keys.key;
        makesound(buttonhtml);
        
    });
}



function makesound(buttonhtml){
switch (buttonhtml) {
    case "w":
        new Audio("sounds/tom-1.mp3").play();
        animate(buttonhtml);
    case "a":
        new Audio("sounds/tom-2.mp3").play();
        animate(buttonhtml);
        break;
    case "s":
        new Audio("sounds/tom-3.mp3").play();
        animate(buttonhtml);
        break;
    case "d":
        new Audio("sounds/tom-4.mp3").play();
        animate(buttonhtml);
        break;
    case "j":
        new Audio("sounds/snare.mp3").play();
        animate(buttonhtml);
        break;
    case "k":
        new Audio("sounds/crash.mp3").play();
        animate(buttonhtml);
        break;
    case "l":
        new Audio("sounds/kick-bass.mp3").play();
        animate(buttonhtml);
        break;
    default:
            document.getElementById("footer").innerText="Wrong key Pressed !!";
            setTimeout(rmve,1000);
        break;
}};



function rmve(){
    document.getElementById("footer").innerText="";
}

function animate(buttonhtml){
    var activebutton=document.querySelector("."+buttonhtml);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },300);
}
