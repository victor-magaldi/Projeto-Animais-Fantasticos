class Slide {
   constructor(slide, wrapper) {
      this.slide = document.querySelector(slide);
      this.wrapper = document.querySelector(wrapper);

      this.dist = {
         finalPosition: 0,
         startX: 0,
         movement: 0,
      };

      this.init();
      this.changeSlide();
   }

   // slides configs
   slidePosition(slide) {
      const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
      return -(slide.offsetLeft - margin);
   }

   slideConfig() {
      this.slideArray = [...this.slide.children].map((element) => {
         const position = this.slidePosition(element);
         return {
            position,
            element,
         };
      });
   }

   slideIndexNav(index) {
      const last = this.slideArray.length - 1;

      this.index = {
         prev: index !== 0 ? undefined : index - 1,
         active: index,
         next: index === last ? undefined : index + 1,
      };
   }

   changeSlide(index) {
      const activeSlide = this.slideArray[index];
      this.moveSlide(activeSlide.position);
      this.slideIndexNav(index);
      this.dist.finalPosition = activeSlide.position;
   }

   init() {
      this.bindEvents();
      this.addSlideEvents();
      this.slideConfig();
      return this;
   }

   moveSlide(distX) {
      this.dist.movePosition = distX;
      this.slide.style.transform = `translate3d(${distX}px,0,0)`;

      // salvar a distancia pra não ficar reiniciando toda vez
   }

   updatePosition(clientX) {
      // basta apenas multiplicar o movement para deixar o slider mais rápido
      this.dist.movement = (clientX - this.dist.startX) * 1.6;
      return this.dist.finalPosition + this.dist.movement;
   }

   onMove(event) {
      const pointerPosition =
         event.type === "mousemove"
            ? event.clientX
            : event.changedTouchs[0].clientX;

      const finalPosition = this.updatePosition(pointerPosition);
      this.moveSlide(finalPosition);
   }

   onStart(event) {
      let moveType;

      if (event.type === "mousedown") {
         event.preventDefault();
         this.dist.startX = event.clientX;
         moveType = "mousemove";
      } else {
         this.dist.startX = event.changedTouchs[0].clientX;
         // o touchEvent pode ter mais de um dedo então é um pouco diferente do mouse
         moveType = "touchmove";
      }
      console.log(event);

      this.slide.style.cursor = "grab";
      this.wrapper.addEventListener(moveType, this.onMove);
   }

   onEnd(event) {
      this.slide.style.cursor = "default";

      this.dist.finalPosition = this.dist.movePosition;

      this.wrapper.removeEventListener("mousemove", this.onMove);
   }

   addSlideEvents() {
      this.wrapper.addEventListener("mousedown", this.onStart);
      // this.wrapper.addEventListener("touchstart", this.onStart);

      this.wrapper.addEventListener("mouseup", this.onEnd);
      // this.wrapper.addEventListener("touchend", this.onEnd);
   }

   bindEvents() {
      this.onStart = this.onStart.bind(this);
      this.onMove = this.onMove.bind(this);
      this.onEnd = this.onEnd.bind(this);
   }
}

const slide = new Slide(".slide", ".slide-wrapper");
console.log(slide);
