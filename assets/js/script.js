const sideNav = document.getElementById("sideNav");
const sliderBtn = document.querySelector(".slider-button")
const pageBtn = document.querySelectorAll(".slider__page-btn")
const sliderPage = document.querySelector(".slider__page")

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
})

sliderPage.addEventListener("click", (event) => {
   let button = event.target.closest('button');
   for (let i = 0; i < pageBtn.length; i++) {
      if(pageBtn[i].classList.contains("active")){
         pageBtn[i].classList.remove("active");
      }
      button.classList.add("active")
   }

      
})

function nextSlid(node) {

   switch (node.getAttribute("data-action")) {
      case "right":
         pageBtn.forEach((element, index) => {
            if (element.classList.contains("active")) {
               element.classList.remove("active")
            }else {
            }
         });
         break;
      case "left":
         
         break;
   
      default:
         break;
   }


   // switch (node.getAttribute("data-action")) {          
   //    case "left":
   //       for (let i = 0; i < pageBtn.length; i++) {
   //          if(pageBtn[3].classList[1] == "active") {
   //             pageBtn[3].classList.remove("active");
   //             pageBtn[0].classList.add('active');
   //          }else if(pageBtn[i].classList[1] == "active") {
   //             pageBtn[i].classList.remove("active");
   //             pageBtn[i+1].classList.add('active');
   //             break;
   //          }
   //       }
   //       break;
   //    case "right":
   //       console.log(pageBtn[test++]);
   //       break;
   
   // }
   

}


