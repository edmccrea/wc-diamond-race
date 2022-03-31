const diamondTemplate = document.createElement('template');
diamondTemplate.innerHTML = `
    <style>
    .shape {
        transform: rotate(45deg);
        width: 75px;
        height: 75px;
        z-index: 99;
        position: absolute;
      }
      
      .red {
        background-color: #d95942;
        top: 5%;
      }
      
      .blue {
        background-color: #4c8cf4;
        top: 30%;
      }
      
      .green {
        background-color: #1aa05e;
        top: 55%;
      }
      
      .yellow {
        background-color: #fbcb44;
        top: 80%;
      }

      .active:hover {
        cursor: pointer;
      }
    </style>
    <div class='shape active'>
    </div>
`;

class DiamondCard extends HTMLElement {
  constructor() {
    super();
    this.value = 0;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(diamondTemplate.content.cloneNode(true));
    this.shadowRoot
      .querySelector('.shape')
      .classList.add(`${this.getAttribute('color')}`);
    this.shape = this.shadowRoot.querySelector('.shape');
  }

  increment() {
    this.value++;
    this.moveDiamond();
  }

  moveDiamond() {
    this.shape.style.left = `${this.value - 1}5%`;
  }

  deactivate() {
    this.shape.classList.remove('active');
  }

  reset() {
    this.shape.style.left = 0;
    this.shape.classList.add('active');
    this.value = 0;
  }
}

window.customElements.define('diamond-card', DiamondCard);
