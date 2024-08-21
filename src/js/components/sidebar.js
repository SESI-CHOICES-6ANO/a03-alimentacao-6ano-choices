import {
  onMounted,
  nextTick,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// Só funciona 1 componente por página
export default {
  setup() {
    onMounted(() => {
      // Use nextTick to ensure DOM updates are finished
      nextTick(() => {
        // Sidenav initialization
        var elems = document.querySelectorAll(".sidenav");
        var instances = M.Sidenav.init(elems, {
          // specify options here
        });
      });
    });

    return {};
  },

  
  template://html 
  `

  <ul id="slide-out" class="sidenav">
    <li>
      <div class="user-view">
        <img src="src/img/logo-choices.webp" alt="Logo Choices" />
        <p class="sidenav__general-title">Choices 6º ano | Alimentação</p>
        <h3 class="sidenav__specific-title">
        Aula 03 | Carne não me cai bem!
        </h3>
        <div class="progress-box">
          <div class="progress">
            <div class="determinate"></div>
          </div>
          <p class="body1">
            <span class="progress-box__number">1%</span> concluído
          </p>
        </div>
      </div>
    </li>

    <li>
      <a href="#hero">01: 😊Início</a>
    </li>
    <li>
      <a href="#instrucao">02: 🥸Instrução</a>
    </li>
    <li>
      <a href="#questao">03: 🤓Questão</a>
    </li>
    <li>
      <a href="#concluir">04: 😀Conclusão</a>
    </li>
  </ul>
  `,
};
