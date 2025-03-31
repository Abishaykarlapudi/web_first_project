//mobie btn
let mobilebtn =document.getElementById("menu-btn")

let menubtnopen = false
let mobilemenunav=document.getElementById("mobile-menu-nav")
mobilebtn.addEventListener("click",()=>{
    if(menubtnopen){
        //mobilemenunav.style.display = "none"
        mobilemenunav.classList.remove("mobile-menu-nav-hidden")
        menubtnopen = false
    }
    else{
        //mobilemenunav.style.display = "block"
        mobilemenunav.classList.add("mobile-menu-nav-hidden")
        menubtnopen = true
    }
})

let menuclose = document.getElementById("close")
 menuclose.addEventListener("click",()=>{
    //mobilemenunav.style.display = "none"
    mobilemenunav.classList.remove("mobile-menu-nav-hidden")
    menubtnopen = false
 })


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
//  let user=document.getElementById("user").value;
//         let pass=document.getElementById("password").value;
//         let ishu="abishay1@gmail.com";
//         let pa=34156281;
//         if(user==ishu && pass==pa){
//             window.location.href='w3.html';
//         }
//         else{
//             alert("Please valid mail and pass word");
//         }
function loadContent(url, targetDiv) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(targetDiv).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}