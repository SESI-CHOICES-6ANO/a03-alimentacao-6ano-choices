import{onMounted}from"https://unpkg.com/vue@3/dist/vue.esm-browser.js";export default{setup(){onMounted(()=>{console.log("questions")});return{verificaQuestao:(e,a)=>{e=e.target.value;document.querySelector("#"+a).querySelector(".feedback").innerHTML=e==={q1:"a"}[a]?`
        <div class="question-result question-result__correto">
          <p class="diplay1 flex--align-center">  
            <span class="material-symbols-rounded mx-5">sentiment_very_satisfied</span>
            Um nutricionista! Somente esse profissional está apto para dizer a Sam o que ela deve ou não comer.
          </p>
        </div>
      `:`
        <div class="question-result question-result__incorreto">
          <p class="body1 flex--align-center">
             <span class="material-symbols-rounded mx-5">sentiment_very_dissatisfied</span>
            <b>Ops!</b>
          </p>
        </div>
      `}}},template:`
    <!-- Question 1 -->
    <div class="question-radio" id="q1">
      <p class="body1 mt-2"><b>Então, o médico pediu para que a jovem procurasse um:
      </b>​</p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="a" />
          <span><b>a) </b>Nutricionista</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="b" />
          <span><b>b) </b>Coach nutricional</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="c" />
          <span><b>c) </b>Vídeo na internet</span>
        </label>
      </p>
      
      <div class="feedback"></div>
    </div>
  `};