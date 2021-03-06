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
   }

   init() {
      this.bindEvents();
      this.addSlideEvents();
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
      const finalPosition = this.updatePosition(event.clientX);
      console.log(finalPosition);
      console.log(this.dist.movement);
      this.moveSlide(finalPosition);
   }

   onStart(event) {
      event.preventDefault();
      this.dist.startX = event.clientX;
      this.slide.style.cursor = "grab";
      this.wrapper.addEventListener("mousemove", this.onMove);
   }

   onEnd(event) {
      this.slide.style.cursor = "default";

      this.dist.finalPosition = this.dist.movePosition;

      this.wrapper.removeEventListener("mousemove", this.onMove);
   }

   addSlideEvents() {
      this.wrapper.addEventListener("mousedown", this.onStart);
      this.wrapper.addEventListener("mouseup", this.onEnd);
   }

   bindEvents() {
      this.onStart = this.onStart.bind(this);
      this.onMove = this.onMove.bind(this);
      this.onEnd = this.onEnd.bind(this);
   }
}

const slide = new Slide(".slide", ".slide-wrapper");
console.log(slide);
