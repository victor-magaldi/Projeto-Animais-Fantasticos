function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo')

    if(tabMenu.length && tabContent.length){
        function activeTab(index){
            tabContent.forEach((content)=>{
                content.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }
        //navegação de tabs foi baseada no index, pois sempre terá o mesmo numero de elementos
        tabMenu.forEach((itemMenu, index)=>{
            itemMenu.addEventListener('click', ()=>{
                activeTab(index)
            })
        })
    }
}
initTabNav();
function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const ativoClass = 'ativo';

    if(accordionList.length){
        accordionList[0].classList.add(ativoClass);
        accordionList[0].nextElementSibling.classList.add(ativoClass);
        function activeAccordion(){
            this.classList.toggle(ativoClass)
            this.nextElementSibling.classList.toggle(ativoClass)
        }
        accordionList.forEach((item)=>{
            item.addEventListener('click',activeAccordion)
        })
    }
}
initAccordion();


function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href= event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;

        section.scrollIntoView({
            behavior:'smooth',
            block: 'start'
        });
        //forma alternativa de colcoar um scroll suave
        // window.scrollTo({
        //     top:topo,
        //     behavior: "smooth"
        // })
    }

    linksInternos.forEach((link)=>{
        link.addEventListener('click', scrollToSection)
    })
}
initScrollSuave();


function initAnimationScroll(){
    const sections = document.querySelectorAll(".js-scroll");
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
    }
    animaScroll();
    window.addEventListener('scroll',animaScroll);
}
initAnimationScroll();
