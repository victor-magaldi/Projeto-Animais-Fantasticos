export default function initTabNav() {
   const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
   const tabContent = document.querySelectorAll('[data-tab="content"] section');
   tabContent[0].classList.add("ativo");

   function activeTab(index) {
      tabContent.forEach((content) => {
         content.classList.remove("ativo");
      });

      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
   }
   if (tabMenu.length && tabContent.length) {
      // navegação de tabs foi baseada no index, pois sempre terá o mesmo numero de elementos

      tabMenu.forEach((itemMenu, index) => {
         itemMenu.addEventListener("click", () => {
            activeTab(index);
         });
      });
   }
}
