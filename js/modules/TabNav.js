export default class TabNav {
   constructor(tabmenu, tabContent) {
      this.tabMenu = document.querySelectorAll(tabmenu);
      this.tabContent = document.querySelectorAll(tabContent);
      this.activeClass = "ativo";
   }

   init() {
      this.tabContent[0].classList.add(this.activeClass);
      this.addEventsTabs();
      return this;
   }

   activeTab(index) {
      this.tabContent.forEach((content) => {
         content.classList.remove(this.activeClass);
      });

      const direcao = this.tabContent[index].dataset.anime;
      this.tabContent[index].classList.add(this.activeClass, direcao);
   }

   addEventsTabs() {
      if (this.tabMenu.length && this.tabContent.length) {
         // navegação de tabs foi baseada no index, pois sempre terá o mesmo numero de elementos
         this.tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
               this.activeTab(index);
            });
         });
      }
   }
}
