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
      this.activeNextSlide();
   }

   // slides configs
   slidePosition(slide) {
      const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
      return -(slide.offsetLeft - margin);
   }

   slideConfig() {
      this.slideArray = [...this.slide.children].map((element) => {
         const position = this.slidePosition(element);
         console.log(position);
         return {
            position,
            element,
         };
      });
   }

   slidesIndexNav(index) {
      const last = this.slideArray.length - 1;
      this.index = {
         prev: index ? index - 1 : undefined,
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

   activePrevSlide() {
      console.log(this.index);
      this.changeSlide(this.index.prev);

      if (this.index.prev !== undefined) {
         this.changeSlide(this.index.prev);
      }
   }

   activeNextSlide() {
      console.log(this);
      if (this.index.prev !== undefined) {
         this.changeSlide(this.index.next);
      }
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
      console.log(finalPosition);
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

   changeSlideOnEnd() {
      console.log(this.dist.movement);
      if (this.dist.movement >= 120) {
         this.activeNextSlide();
      } else if (this.dist.movement <= -120) {
         this.activePrevSlide();
      }
   }

   onEnd(event) {
      this.slide.style.cursor = "default";

      this.dist.finalPosition = this.dist.movePosition;

      this.wrapper.removeEventListener("mousemove", this.onMove);
      this.changeSlideOnEnd();
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
