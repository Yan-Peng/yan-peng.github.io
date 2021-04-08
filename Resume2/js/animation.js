const word = document.querySelectorAll(".thePaths");

for(let i = 0; i < word.length; i++){
    console.log(`text number ${i} length is ${word[i].getTotalLength()}`);
}

const lastword = document.querySelector("#thirteenth");
const animation = document.querySelector(".animation");
lastword.addEventListener("animationend", ()=>{
    animation.style = "transition: all 1.5s ease; opacity: 0; pointer-events: none;";
})

