import ScrollSuave from "./modules/scroll-suave.js";
import initAnimationScroll from "./modules/anima-scroll.js";
import TabNav from "./modules/TabNav.js";
import Accordion from "./modules/nav-accordion.js";
import Modal from "./modules/modal-login.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchBitcoin from "./modules/fetchBitcoins.js";
import fetchAnimais from "./modules/fetchAnimais.js";

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
const modal = new Modal(
   "[data-modal=abrir]",
   "[data-modal=fechar]",
   "[data-modal=container]"
);
modal.init();
const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
fetchAnimais("/animaisapi.json", ".numeros-grid");
