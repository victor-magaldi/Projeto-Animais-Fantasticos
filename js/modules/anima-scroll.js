export default function initAnimationScroll() {
   const sections = document.querySelectorAll("[data-anime='scroll']");
   // animação acontecerá a partir de 65 % da tela
   const windowmetade = window.innerHeight * 0.4;
   function animaScroll() {
      sections.forEach((section) => {
         const sectiontop = section.getBoundingClientRect().top - windowmetade;
         const isSectionVisible = sectiontop - windowmetade < 0;
         if (isSectionVisible) {
            section.classList.add("ativo");
         } else if (section.classList.contains("ativo")) {
            section.classList.remove("ativo");
         }
      });
   }
   if (sections.length) {
      animaScroll();
      window.addEventListener("scroll", animaScroll);
   }
}
