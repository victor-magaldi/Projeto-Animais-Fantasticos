class Slide {
   constructor(slide, wrapper) {
      this.slide = document.querySelector(slide);
      this.wrapper = document.querySelector(wrapper);

      this.init();
   }

   init() {
      this.bindEvents();
      this.addSlideEvents();
      return this;
   }

   onMove(event) {
      console.log("onmove");
   }

   onStart(event) {
      event.preventDefault();
      console.log("onStart mouse down");
      this.wrapper.addEventListener("mousemove", this.onMove);
   }

   onEnd(event) {
      console.log("onEnd");
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
