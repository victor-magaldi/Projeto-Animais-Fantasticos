export default function initAnimaNumero() {
   const numeros = document.querySelectorAll("[data-numero");

   function animaNumeros() {
      numeros.forEach((num) => {
         const numero = num;
         const total = +num.innerText;
         const incremento = Math.floor(total / 100);
         let start = 0;

         const timer = setInterval(() => {
            start += incremento;

            numero.innerText = start;
            if (start > total) {
               numero.innerText = total;
               clearInterval(timer);
            }
         }, 25 * Math.random());
      });
   }
   const observerTarget = document.querySelector(".numeros");

   // eslint-disable-next-line no-use-before-define
   observer.observe(observerTarget, { attributes: true });

   function handleMutation(mutation) {
      if (mutation[0].target.classList.contains("ativo")) {
         // eslint-disable-next-line no-use-before-define
         observer.disconnect();
         animaNumeros();
      }
   }
   const observer = new MutationObserver(handleMutation);
}
