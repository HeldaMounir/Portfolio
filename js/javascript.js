let alexfont = document.getElementById("Alex");
let tajfont = document.getElementById("Tajawal");
let cairofont=document.getElementById("Cairo")
let resetbtn=document.getElementById("colbtn")
let body = document.body;
let allElements = document.querySelectorAll("*");
let col1=document.querySelector(".color-1")
let col2=document.querySelector(".color-2")

alexfont.addEventListener("click", function () {
    body.style.fontFamily = "Alexandria,sans-serif";
    alexfont.classList.add("active")
    tajfont.classList.remove("active")
    cairofont.classList.remove("active")
});
tajfont.addEventListener("click", function () {
    body.style.fontFamily = "Tajawal,sans-serif";
    alexfont.classList.remove("active")
    cairofont.classList.remove("active")
    tajfont.classList.add("active")
});
cairofont.addEventListener("click", function () {
    body.style.fontFamily = "Cairo,sans-serif";
    alexfont.classList.remove("active")
    tajfont.classList.remove("active")
    cairofont.classList.add("active")
});

resetbtn.addEventListener("click",function(){
     tajfont.classList.add("active")
     alexfont.classList.remove("active")
     cairofont.classList.remove("active")
     body.style.fontFamily = "Tajawal,sans-serif";

})


col2.addEventListener("click",function(){
for (let i = 0; i < allElements.length; i++) {
  let currentColor = getComputedStyle(allElements[i]).color;
  let bgImage = getComputedStyle(allElements[i]).backgroundImage;
    let bgColor = getComputedStyle(allElements[i]).backgroundColor;

allElements[i].addEventListener("mouseenter", function() {
    let style = getComputedStyle(this);
    let borderColor = style.borderColor; 

    
    if (borderColor === "rgb(102, 53, 216)") {
        this.style.borderColor = "rgb(236, 72, 153)"; 
      
    }
   
    });
     allElements[i].addEventListener("mouseleave", function() {
    this.style.borderColor = ""; 
   
});

  if (currentColor === "rgb(99, 102, 241)" ||
  currentColor === "rgb(139, 92, 246)" ||
  currentColor==="rgb(131, 70, 229)" ||
  currentColor==="rgb(79, 70, 229)"
)
   {
    allElements[i].style.color = "rgb(236, 72, 153)";

  }
  if (currentColor === "rgb(102, 53, 216)"
)
   {
    allElements[i].style.color = "rgb(253, 68, 68)";

  }

  if(bgImage.includes("linear-gradient" )){
 allElements[i].style.background = "linear-gradient(to left, rgb(236, 72, 153), rgb(168, 85, 247))";

  }
if(bgImage && bgImage.includes("radial-gradient")) {
  allElements[i].style.backgroundImage = "radial-gradient(circle at 50% 100%, rgba(236, 72, 153,0.4), #020617)";
}

  if(bgColor==="rgb(139, 92, 246)" || bgColor==="rgb(99, 102, 241)"|| bgColor==="rgb(131, 70, 229)" ){
    allElements[i].style.backgroundColor="rgb(236, 72, 153)"
  }
}

})


