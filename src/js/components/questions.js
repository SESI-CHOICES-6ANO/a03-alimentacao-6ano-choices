import {
  onMounted,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default {
  setup() {
    onMounted(() => {
      console.log('questions');
    });

    // Verifica Questao
    const verificaQuestao = (event, questao) => {
      const gabaritoQuestoes = { q1: "b", q2: "d", q3: "a" };
      let selecionado = event.target.value;
      let correto = `
        <div class="question-result question-result__correto">
          <p class="diplay1 flex--align-center">  
            <span class="material-symbols-rounded mx-5">sentiment_very_satisfied</span>
            Um nutricionista! Somente esse profissional está apto para dizer a Sam o que ela deve ou não comer.
          </p>
        </div>
      `;
      let incorreto = `
        <div class="question-result question-result__incorreto">
          <p class="body1 flex--align-center">
             <span class="material-symbols-rounded mx-5">sentiment_very_dissatisfied</span>
            <b>Ops!</b>
          </p>
        </div>
      `;

      if (selecionado === gabaritoQuestoes[questao]) {
        document
          .querySelector("#" + questao)
          .querySelector(".feedback").innerHTML = correto;
      } else {
        document
          .querySelector("#" + questao)
          .querySelector(".feedback").innerHTML = incorreto;
      }
    };

    return { verificaQuestao };
  },

  template: //html
  `
    <!-- Question 1 -->
    <div class="question-radio" id="q1">
      <p class="body1 mt-2"><b>1. Qual é a função das proteínas?</b>​</p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="a" />
          <span><b>a) </b>Fornecer energia ao corpo.</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="b" />
          <span><b>b) </b>Diversas funções, dentre elas a composição do músculo.</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="c" />
          <span><b>c) </b>Formação do tecido adiposo, que é o isolamento específico do corpo.</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="d" />
          <span><b>d) </b>Regular o volume do sangue.</span>
        </label>
      </p>
      <div class="feedback"></div>
    </div>
  `,
};
