const scoreTemplate = document.createElement('template');
scoreTemplate.innerHTML = `
        <style>
        
            .color-block {
                width: 100px;
                height: 30px;
                border-radius: 10px;
                margin-right: 10px;
            }
            .score-value {
                font-family: 'Roboto', sans-serif;
            }
            .red {
                background-color: #d95942;
              }
              
              .blue {
                background-color: #4c8cf4;
              }
              
              .green {
                background-color: #1aa05e;
              }
              
              .yellow {
                background-color: #fbcb44;
              }

              .winner {
                color: #1aa05e;
              }
        </style>
        <div class="color-block">
        </div>
        <p class="score-value">0</p>
`;

export class ScoreCard extends HTMLElement {
  constructor() {
    super();
    this.value = 0;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(scoreTemplate.content.cloneNode(true));
    this.shadowRoot
      .querySelector('.color-block')
      .classList.add(`${this.getAttribute('color')}`);
    this.scoreValue = this.shadowRoot.querySelector('.score-value');
  }

  increment() {
    if (this.value < 10) {
      this.value++;
      this.scoreValue.innerHTML = this.value;
    }

    if (this.value === 10) {
      this.scoreValue.classList.add('winner');
    }
  }

  reset() {
    this.value = 0;
    this.scoreValue.innerHTML = 0;
    this.scoreValue.classList.remove('winner');
  }
}

window.customElements.define('score-card', ScoreCard);
