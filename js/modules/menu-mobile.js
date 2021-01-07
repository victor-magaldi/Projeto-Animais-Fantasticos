import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
   const menuButton = document.querySelector("[data-menu=button]");
   const menuList = document.querySelector("[data-menu=list]");
   const eventos = ["click", "touchstart"];

   if (menuButton) {
      function openMenu(event) {
         menuList.classList.toggle("active");
         menuButton.classList.toggle("active");
         outsideClick(menuList, eventos, () => {
            menuList.classList.toggle("active");
            menuButton.classList.toggle("active");
         });
      }
      eventos.forEach((evento) => {
         menuButton.addEventListener(evento, openMenu);
      });
   }
}
