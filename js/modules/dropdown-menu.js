export default function initDropdownMenu() {
   const dropdownMenus = document.querySelectorAll("[data-dropdown]");
   dropdownMenus.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => {
         menu.addEventListener(userEvent, handleClick);
      });
   });

   function handleClick(event) {
      event.preventDefault();
      this.classList.toggle("active");
      outsideClick(this, () => {
         this.classList.remove("active");
      });
   }
}

function outsideClick(element, callback) {
   const html = document.documentElement;

   if (!element.hasAttribute("data-outside", "")) {
      html.addEventListener("click", handleOutsideClick);
      element.setAttribute("data-outside", "");
   }

   function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
         element.removeAttribute("data-outside");
         html.removeEventListener("click", handleOutsideClick);
         callback();
      }
   }
}
