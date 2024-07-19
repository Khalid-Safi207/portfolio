let closeBtn = document.querySelector(".close");
let menuBtn = document.querySelector(".menu");
let ulEl = document.querySelector("ul");
menuBtn.onclick = function () {
  closeBtn.style.display = "block";
  menuBtn.style.display = "none";
  ulEl.style.left = "-10px";
};
closeBtn.onclick = function () {
  ulEl.style.left = "-300%";
  menuBtn.style.display = "flex";
  closeBtn.style.display = "none";
};

let kalime = "F-u-l-l- -S-t-a-c-k- -D-e-v-e-l-o-p-e-r-.";
let kalimeArr = kalime.split("-");
const fullStackSpan = document.getElementById("full-stack")

let index = 0;
    
setInterval(()=>{
    if(index != 20){
        fullStackSpan.innerText += `${kalimeArr[index]}`
    index++;
    }
    else{
        setTimeout(()=>{
            fullStackSpan.innerText = "";
            index = 0;
        },700)
    }
},240)


let btn = document.getElementById("upBtn");

window.onscroll = function(){
    if(scrollY >= 400){
        btn.style.display = "block";
    }   
    else{
        btn.style.display = "none";
    }
}
btn.onclick = function(){
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}
