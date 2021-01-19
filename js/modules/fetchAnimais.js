import initAnimaNumero from "./anima-numeros.js";

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
      initAnimaNumero();
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
