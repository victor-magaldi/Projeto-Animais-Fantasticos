import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
   constructor(linkPrincipal, eventsArray) {
      this.dropdownMenus = document.querySelectorAll(linkPrincipal);

      if (this.event === undefined) {
         this.events = ["touchstart", "click"];
      } else {
         this.events = eventsArray;
      }
      this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
   }

   init() {
      if (this.dropdownMenus.length) {
         this.addDropdowEvents();
      }
   }

   activeDropdownMenu(event) {
      event.preventDefault();
      const element = event.currentTarget;
      element.classList.add("active");
      outsideClick(element, this.events, () => {
         element.classList.remove("active");
      });
   }

   addDropdowEvents() {
      this.dropdownMenus.forEach((menu) => {
         ["touchstart", "click"].forEach((userEvent) => {
            menu.addEventListener(userEvent, this.activeDropdownMenu);
         });
      });
   }
}
