export default function initmodal(){
    const btnAbrir = document.querySelector("[data-modal=abrir");
    const btnFechar = document.querySelector("[data-modal=fechar");
    const containerModal = document.querySelector("[data-modal=container");

    if(btnAbrir && btnFechar &&containerModal){
        function toggleModal(event){
            event.preventDefault()
            containerModal.classList.toggle("ativo")
        
        }
        
        function foraDoModal(event){
            if(event.target === this){
                containerModal.classList.remove("ativo")
            }
        }
        btnAbrir.addEventListener("click",toggleModal)
        btnFechar.addEventListener("click",toggleModal)
        containerModal.addEventListener("click",foraDoModal)
    }


}

