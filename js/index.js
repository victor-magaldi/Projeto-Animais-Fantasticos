import ScrollSuave from "./modules/scroll-suave.js";
import initAnimationScroll from "./modules/anima-scroll.js";
import TabNav from "./modules/nav-tabs.js";
import Accordion from "./modules/nav-accordion.js";
import initmodal from "./modules/modal-login.js";
import InitTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchBitcoin from "./modules/fetchBitcoins.js";
import initFetchAnimais from "./modules/fetchAnimais.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();
initAnimationScroll();
const tabNav = new TabNav(
   '[data-tab="menu"] li',
   '[data-tab="content"] section'
);
tabNav.init();
initmodal();
InitTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();
initFetchAnimais();
