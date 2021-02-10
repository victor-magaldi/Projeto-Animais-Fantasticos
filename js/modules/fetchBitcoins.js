export default function fetchBitcoin(url, target) {
   fetch(url)
      .then((res) => res.json())
      .then((json) => {
         const btnPreco = document.querySelector(target);
         const milReaisBitcoin = (1000 / json.BRL.sell).toFixed(4);
         btnPreco.innerText = milReaisBitcoin;
      })
      .catch((error) => {
         console.log(Error(error));
      });
}
