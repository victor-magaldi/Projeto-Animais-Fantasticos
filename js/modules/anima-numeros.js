export default function initAnimaNumero() {
   const numeros = document.querySelectorAll("[data-numero");

   function animaNumeros() {
      numeros.forEach((num) => {
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
      });
   }
   function handleMutation(mutation) {
      if (mutation[0].target.classList.contains("ativo")) {
         // eslint-disable-next-line no-use-before-define
         observer.disconnect();
         animaNumeros();
      }
   }
   const observer = new MutationObserver(handleMutation);

   const observerTarget = document.querySelector(".numeros");
   // eslint-disable-next-line no-redeclare
   function handleMutation(mutation) {
      if (mutation[0].target.classList.contains("ativo")) {
         observer.disconnect();
         animaNumeros();
      }
   }
   observer.observe(observerTarget, { attributes: true });
}
