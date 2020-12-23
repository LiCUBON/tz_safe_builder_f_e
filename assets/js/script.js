const menuBento = document.querySelector(".menu__item--bento");
const buttonMenu = document.querySelector(".button__menu");

menuBento.addEventListener("focus", () => {
   buttonMenu.classList.add("activeMenu");
   document.getElementById("mySidenav").style.width = "100%"
});

menuBento.addEventListener("blur", () => {
   buttonMenu.classList.remove("activeMenu");
   document.getElementById("mySidenav").style.width = "0"
   
});

let slider = document.getElementById('slider');
let selectedTagA;
let rubric = document.querySelector(".slider__frame > p")


let sliderSubTitle = document.querySelector(".slider_subtitle")


slider.onclick = function(event) {
   let target = event.target;
   let deleteActiv = document.querySelector(".slider__btn");
   
   while (target != this) {
      
      if (target.tagName == "A") {
         deleteActiv.classList.remove('active');
         active(target);
         return;
      }

      target = target.parentNode;
   }
}

function active(node) {
   
   switch (node.textContent) {
      case "01":
         sliderSubTitle.textContent = "Акційна пропозиція №1"
         rubric.textContent = "Забудовник - це 5 років успішної роботи на українському ринку. Успішної роботи на українському ринку."
         break;
      
      case "02":
         sliderSubTitle.textContent = "Акційна пропозиція №2"
         rubric.textContent = "Понад 700 квартир вже продано, а в планах компанії побудувати 120 тис. метрів житлової площі."
         break;
      
      case "03":
         sliderSubTitle.textContent = "Акційна пропозиція №3"
         rubric.textContent = "це 7 роківв успішної роботи в українському ринку"
         break;
      
      case "04":
         sliderSubTitle.textContent = "Акційна пропозиція №4"
         rubric.textContent = "Test4"
         break;
      
      default:
         break;
   }


   if (selectedTagA) {
      selectedTagA.classList.remove('active');
   }
      selectedTagA = node;
      selectedTagA.classList.add('active');
 }