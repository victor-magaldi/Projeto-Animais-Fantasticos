import AnimaNumero from "./AnimaNumero.js";

export default function initFetchAnimais() {
   async function fetchAnimais(url) {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
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
   fetchAnimais("/animaisapi.json");
}
