import AnimaNumero from "./AnimaNumero.js";

export default function fetchAnimais(url, target) {
   // captura os dados dos animais atraves de um json
   async function criarAnimais() {
      // espera a resposta e depois espera transformar em json
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      const numerosGrid = document.querySelector(target);

      animaisJson.forEach((animal) => {
         // eslint-disable-next-line no-use-before-define
         const divAnimal = createAnimal(animal);
         numerosGrid.appendChild(divAnimal);
      });

      const animaNumero = new AnimaNumero("[data-numero]", ".numeros");
      animaNumero.init();
   }

   function createAnimal(animal) {
      const div = document.createElement("div");
      div.classList.add("numero-animais");
      div.innerHTML = `
               <h3>${animal.specie}</h3>
               <span data-numero>${animal.total}</span>
   `;
      return div;
   }

   return criarAnimais();
}
