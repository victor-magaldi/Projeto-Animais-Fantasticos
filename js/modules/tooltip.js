export default function InitTooltip() {
   const tooltips = document.querySelectorAll("[data-tooltip]");

   function criarToltip(element) {
      const tooltipBox = document.createElement("div");
      const text = element.getAttribute("aria-label");
      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
   }

   function onMouseover(event) {
      const tooltipBox = criarToltip(this);
      tooltipBox.style.top = `${event.pageY}px`;
      tooltipBox.style.left = `${event.pageX}px`;

      // eslint-disable-next-line no-use-before-define
      onMouseMove.tooltipBox = tooltipBox;
      // eslint-disable-next-line no-use-before-define
      this.addEventListener("mousemove", onMouseMove);

      // eslint-disable-next-line no-use-before-define
      onMouseLeave.tooltipBox = tooltipBox;
      // eslint-disable-next-line no-use-before-define
      onMouseLeave.element = this;

      // eslint-disable-next-line no-use-before-define
      this.addEventListener("mouseleave", onMouseLeave);
   }

   tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseover);
   });

   const onMouseLeave = {
      handleEvent() {
         this.tooltipBox.remove();
         this.element.removeEventListener("mouseleave", onMouseLeave);
         // eslint-disable-next-line no-use-before-define
         this.element.removeEventListener("mouseleave", onMouseMove);
      },
   };
   const onMouseMove = {
      handleEvent(event) {
         this.tooltipBox.style.top = `${event.pageY + 20}px`;
         this.tooltipBox.style.left = `${event.pageX + 20}px`;
      },
   };
}
