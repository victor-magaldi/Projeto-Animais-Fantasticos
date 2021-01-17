export default function initFetchBitcoin() {
   fetch("https://blockchain.info/ticker")
      .then((res) => res.json())
      .then((json) => {
         const btnPreco = document.querySelector(".btc-preco");
         console.log(btnPreco);
         const milReaisBitcoin = (1000 / json.BRL.sell).toFixed(4);
         btnPreco.innerText = milReaisBitcoin;
      })
      .catch((error) => {
         console.log(Error(error));
      });
}
