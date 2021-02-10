export default class animaScrol {
   constructor(sections) {
      this.sections = document.querySelectorAll(sections);
      this.windowmetade = window.innerHeight * 0.4;

      this.checkDistance = this.checkDistance.bind(this);
   }

   init() {
      if (this.sections.length) {
         this.getDistance();
         this.checkDistance();
         window.addEventListener("scroll", this.checkDistance);
      }

      return this;
   }

   // captura a distancia de cada section em relação ao topo do site
   getDistance() {
      this.distances = [...this.sections].map((section) => {
         const sectionTop = section.offsetTop;
         return {
            element: section,
            offsetTop: sectionTop - this.windowmetade,
         };
      });
      console.log(this.distances);
   }

   // verfica a distancia do scroll com referencia nas sections
   checkDistance() {
      this.distances.forEach((item) => {
         if (window.pageYOffset > item.offsetTop) {
            item.element.classList.add("ativo");
         } else if (item.element.classList.contains("ativo")) {
            item.element.classList.remove("ativo");
         }
      });
   }

   // remove o evento do scroll cada
   stop() {
      window.removeEventListener("scroll", this.checkDistance);
   }
}
