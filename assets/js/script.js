const sideNav = document.getElementById("sideNav");
const sliderBtn = document.querySelector(".slider-button")
const pageBtn = document.querySelectorAll(".slider__page-btn")
const sliderPage = document.querySelector(".slider__page")
const sliderTitle = document.querySelectorAll(".slider__title")
const sliderSubTitle = document.querySelectorAll(".slider__subtitle")

sideNav.addEventListener('focus', () =>{
   document.getElementById("mySidenav").style.width = "100%";
})
sideNav.addEventListener('blur', () =>{
   document.getElementById("mySidenav").style.width = "0";
})
 
sliderBtn.addEventListener('click', (event) => {
   let button = event.target.closest('button');
      if (!button) return; 
      if (!sliderBtn.contains(button)) return; 
      nextSlid(button);
      changeContent();
})

sliderPage.addEventListener("click", (event) => {
   let button = event.target.closest('button');
   for (let i = 0; i < pageBtn.length; i++) {
      if(pageBtn[i].classList.contains("active")){
         pageBtn[i].classList.remove("active");
      }
      button.classList.add("active")
   }
   changeContent();
      
})

function nextSlid(node) {
   switch (node.getAttribute("data-action")) {
      case "right":
         for (let i = 0; i < pageBtn.length; i++) {
            if(pageBtn[3].classList[1] == "active") {
               pageBtn[3].classList.remove("active");
               pageBtn[0].classList.add('active');
               break;
            }else if(pageBtn[i].classList[1] == "active") {
               pageBtn[i].classList.remove("active");
               pageBtn[i+1].classList.add('active');
               break;
            }
         }
         break;
      case "left":
         for (let i = 0; i < pageBtn.length; i++) {
            if(pageBtn[0].classList[1] == "active") {
               pageBtn[0].classList.remove("active");
               pageBtn[3].classList.add('active');
               break;
            }else if(pageBtn[i].classList[1] == "active") {
               pageBtn[i].classList.remove("active");
               pageBtn[i-1].classList.add('active');
               break;
            }
         }
         break;
   
   }

}


function changeContent() {
   for (let i = 0; i < pageBtn.length; i++) {
      if(sliderTitle[3].classList.contains('active')){
         sliderTitle[3].classList.remove('active')
         sliderTitle[i].classList.add('active')
         sliderSubTitle[3].classList.remove("active");
         sliderSubTitle[i].classList.add("active");
         break;
      } else if(pageBtn[i].classList[1] == "active") {
         sliderTitle[i-1].classList.remove("active");
         sliderTitle[i].classList.add("active");
         sliderSubTitle[i-1].classList.remove("active");
         sliderSubTitle[i].classList.add("active");
         break;
      }
   }
}