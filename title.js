const containerel = document.getElementById("container")
const button = document.getElementById("button")
let tutorial=document.getElementById("Tutorial")
const closeel =document.getElementById("button")
tutorial.addEventListener("click",toggletutorial)
closeel.addEventListener("click",toggletutorial)

function toggletutorial(){
   tutorial.classList.toggle("bg-blank")
   tutorial.classList.toggle("text-white")
   containerel.classList.toggle("hidden")
   button.classList.toggle("hidden")
}