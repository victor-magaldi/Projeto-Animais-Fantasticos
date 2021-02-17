import ScrollSuave from "./modules/scroll-suave.js";
import AnimaScroll from "./modules/AnimaScroll.js";
import TabNav from "./modules/TabNav.js";
import Accordion from "./modules/nav-accordion.js";
import Modal from "./modules/modal-login.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/DropdownMenu.js";
import MenuMobile from "./modules/MenuMobile.js";
import Funcionamento from "./modules/Funcionamento.js";
import fetchBitcoin from "./modules/fetchBitcoins.js";
import fetchAnimais from "./modules/fetchAnimais.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const animaScroll = new AnimaScroll("[data-anime='scroll']");
animaScroll.init();

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

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile("[data-menu=button]", "[data-menu=list]");
menuMobile.init();

const funcionamento = new Funcionamento();
funcionamento.init();
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
fetchAnimais("/animaisapi.json", ".numeros-grid");
