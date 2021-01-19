export default class ScrollSuave {
   constructor(links, options) {
      this.linksInternos = document.querySelectorAll(links);

      if (options === undefined) {
         this.options = {
            behavior: "smooth",
            block: "start",
         };
      } else {
         this.options = options;
      }
   }

   init() {
      if (this.linksInternos.length) {
         this.addLinkEvents();
      }
      return this;
   }

   addLinkEvents() {
      this.linksInternos.forEach((link) => {
         link.addEventListener("click", this.scrollToSection.bind(this));
      });
   }

   scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      // const topo = section.offsetTop;

      section.scrollIntoView(this.options);
      // forma alternativa de colocar um scroll suave
      // window.scrollTo({
      //     top:topo,
      //     behavior: "smooth"
      // })
   }
}
