document.addEventListener('keydown', event =>{
    if(event.key === "ArrowLeft"){moveLeft();}
    if(event.key === "ArrowRight"){moveRight();}
})

let charecter = document.getElementById("charecter");
let img = document.getElementById("boy");

function myUpdate(){
    setInterval(()=>{
        if(img.scroll.match("leftRun.png")){
            img.src = "rightRun.png";
        }else{
            img.src = "leftRun.png";
        }
    }, 300);
}
myUpdate();


function moveLeft(){
    let left = parseInt(window.getComputedStyle(charecter).getPropertyValue("left"));
    left -= 200;
    if(left >= 0){
        charecter.style.left = left + "px";
    }
}

function moveRight(){
    let right = parseInt(window.getComputedStyle(charecter).getPropertyValue("left"));
    left += 200;
    if(left < 500){
        charecter.style.left = left + "px";
    }
}


let block  =document.getElementById("block");
let counter = 0;

block.addEventListener('animationiteration' , ()=>{
    let random = Math.floor(Math.random() * 3);
    left = random * 150;
    block.style.left = left + "px";
    counter ++;
});

setInterval(function() {
    let charecterLeft = parseInt(window.getComputedStyle(charecter).getPropertyValue("left"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));

    if(charecterLeft == blockLeft && blockTop < 500 && blockTop > 95){
        alert("game Over . Score: " + counter);
        block.style.animation = none;
    }
}, 1);


document.getElementById("right").addEventListener('touchstart', moveRight);
document.getElementById("left").addEventListener('touchstart', moveLeft);