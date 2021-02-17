export default class Funcionamento {
   constructor() {
      this.funcionamento = document.querySelector("[data-semana]");
   }

   init() {
      this.dadosFuncionamento();
      this.dadosAgora();
      if (this.funcionamento) {
         this.ativaAberto();
      }
      return this;
   }

   dadosFuncionamento() {
      this.diasSemana = this.funcionamento.dataset.semana
         .split(",")
         .map(Number);
      this.horarioSemana = this.funcionamento.dataset.horario
         .split(",")
         .map(Number);
   }

   dadosAgora() {
      this.dataAgora = new Date();
      this.diaAgora = this.dataAgora.getDay();
      this.horarioAgora = this.dataAgora.getUTChours() - 3;
   }

   estaAberto() {
      const semanaAberto = this.diasSemana.indexOf(diaAgora) !== -1;
      const horarioAberto =
         this.horarioAgora >= this.horarioSemana[0] &&
         this.horarioAgora < this.horarioSemana[1];

      return semanaAberto && horarioAberto;
   }

   ativaAberto() {
      if (this.estaAberto()) {
         this.funcionamento.classList.add("aberto");
      } else {
         this.funcionamento.classList.add("fechado");
      }
   }
}
