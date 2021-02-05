export default class AnimaNumero {
   constructor(numeros, targetObserver) {
      this.numeros = document.querySelectorAll(numeros);
      this.observerTarget = document.querySelector(targetObserver);

      // foi necessário fazer o bind desse objeto para que funcionasse de forma correta
      this.handleMutation = this.handleMutation.bind(this);
   }

   init() {
      if (this.numeros.length && this.observerTarget) {
         this.addMutation();
      }
   }

   static incrementarNumero(num) {
      const total = +num.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;

      const timer = setInterval(() => {
         start += incremento;

         // eslint-disable-next-line no-param-reassign
         num.innerText = start;
         if (start > total) {
            // eslint-disable-next-line no-param-reassign
            num.innerText = total;
            clearInterval(timer);
         }
      }, 25 * Math.random());
   }

   animaNumeros() {
      this.numeros.forEach((numero) => {
         AnimaNumero.incrementarNumero(numero);
      });
   }

   handleMutation(mutation) {
      if (mutation[0].target.classList.contains("ativo")) {
         // eslint-disable-next-line no-use-before-define
         this.observer.disconnect();
         this.animaNumeros();
      }
   }

   addMutation() {
      // foi necessário fazer o bind desse objeto para que funcionasse de forma correta
      this.observer = new MutationObserver(this.handleMutation);
      this.observer.observe(this.observerTarget, { attributes: true });
   }
}
