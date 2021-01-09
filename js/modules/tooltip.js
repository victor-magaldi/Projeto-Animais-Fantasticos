export default function InitTooltip() {
   const tooltips = document.querySelectorAll("[data-tooltip]");

   tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseover);
   });

   function onMouseover(event) {
      const tooltipBox = criarToltip(this);
      tooltipBox.style.top = event.pageY + "px";
      tooltipBox.style.left = event.pageX + "px";

      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener("mousemove", onMouseMove);

      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;
      this.addEventListener("mouseleave", onMouseLeave);
   }
   const onMouseLeave = {
      handleEvent() {
         this.tooltipBox.remove();
         this.element.removeEventListener("mouseleave", onMouseLeave);
         this.element.removeEventListener("mouseleave", onMouseMove);
      },
   };
   const onMouseMove = {
      handleEvent(event) {
         this.tooltipBox.style.top = event.pageY + 20 + "px";
         this.tooltipBox.style.left = event.pageX + 20 + "px";
      },
   };
   function criarToltip(element) {
      const tooltipBox = document.createElement("div");
      const text = element.getAttribute("aria-label");
      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
   }
}
