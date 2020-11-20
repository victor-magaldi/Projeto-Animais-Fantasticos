export default function initAnimationScroll(){
    const sections = document.querySelectorAll("[data-anime='scroll']");
// animação acontecerá a partir de 65 % da tela
    if(sections.length){
        const windowmetade = window.innerHeight * 0.4;
        function animaScroll(){
            sections.forEach((section)=>{
                const sectiontop = section.getBoundingClientRect().top - windowmetade;
                const isSectionVisible = (sectiontop - windowmetade) < 0;
                if(isSectionVisible){
                    section.classList.add('ativo')
                }
            })
        }
        animaScroll();
        window.addEventListener('scroll',animaScroll);
    }
}

