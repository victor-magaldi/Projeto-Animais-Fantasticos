export default function InitTooltip() {}

const tooltips = document.querySelectorAll("[data-tooltip]");

console.log(tooltips);
tooltips.forEach((item) => {
  item.addEventListener("mouseover", onMouseover);
});

function onMouseover(event) {
  const tooltipBox = criarToltip(this);
  tooltipBox.style.top = event.pageY + "px";
  tooltipBox.style.left = event.pageX + "px";
  console.log("entrou");
}
function criarToltip(element) {
  const tooltipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  tooltipBox.classList.add("tooltip");
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}
