export default class Modal {
   constructor(btnAbrir, btnFechar, containerModal) {
      this.btnAbrir = btnAbrir;
      this.btnFechar = btnFechar;
      this.containerModal = containerModal;
   }

   init() {
      this.modalEvents();
   }

   modalEvents() {
      function toggleModal(event) {
         event.preventDefault();
         this.containerModal.classList.toggle("ativo");
      }
      function foraDoModal(event) {
         if (event.target === this) {
            this.containerModal.classList.remove("ativo");
         }
      }
      if (this.btnAbrir && this.btnFechar && this.containerModal) {
         this.btnAbrir.addEventListener("click", toggleModal);
         this.btnFechar.addEventListener("click", toggleModal);
         this.containerModal.addEventListener("click", foraDoModal);
      }
   }
}
