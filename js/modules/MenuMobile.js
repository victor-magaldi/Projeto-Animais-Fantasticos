import outsideClick from "./outsideclick.js";

export default class MenuMobile {
   constructor() {
      this.menuButton = document.querySelector("[data-menu=button]");
      this.menuList = document.querySelector("[data-menu=list]");
      this.events = ["click", "touchstart"];

      this.openMenuEvent = this.openMenuEvent.bind(this);
   }

   init() {
      this.menuEvents();
   }

   openMenuEvent() {
      this.menuList.classList.toggle("active");
      this.menuButton.classList.toggle("active");

      outsideClick(this.menuList, this.events, () => {
         this.menuList.classList.toggle("active");
         this.menuButton.classList.toggle("active");
      });
   }

   menuEvents() {
      if (this.menuButton) {
         console.log(this.eventos);
         this.events.forEach((evento) => {
            this.menuButton.addEventListener(evento, this.openMenuEvent);
         });
      }
   }
}
