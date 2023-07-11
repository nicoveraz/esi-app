import { LitElement, html, css } from 'lit';

import '@vaadin/form-layout';
import '@vaadin/number-field';
import '@vaadin/combo-box';
import '@material/web/fab/fab.js';
import '@material/web/icon/icon.js';

export class EsiApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      life_saving: { type: String },
      high_risk: { type: String },
      num_resources: { type: String },
      edad: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        --background-color: #ededed;
        --header-background-color: rgb(52, 143, 255);
        --header-color: #fff;
        --content-font-size: calc(10px + 2vmin);
        --default-padding: 1rem;
        --default-box-sizing: border-box;
        --primary-font-size: 1.5rem;
        --primary-line-height: 1.5rem;
        --primary-font-weight: 400;
        --label-font-size: 1.6rem;
        --esi-uno-color: #fff;
        --esi-uno-background-color: #ff0000;
        --esi-dos-background-color: orange;
        --esi-tres-background-color: #ffd700;
        --esi-cuatro-background-color: #228B22;
        --esi-cinco-background-color: #1E90FF;
        min-height: 100vh
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: var(--content-font-size);
        color: #1a2b42;
        margin: 0 auto;
        text-align: center;
        background-color: var(--background-color);
        height: 100%;
        box-sizing: var(--default-box-sizing);
      }

      vaadin-form-layout, .esi-uno, .def-esi-uno {
        box-sizing: var(--default-box-sizing);
        padding: var(--default-padding);
      }

      main {
        flex-grow: 1;
        padding: 0;
      }

      main > div {
        max-width: 720px;
        margin: var(--default-padding) auto;
        background-color: white;
        min-height: calc(100vh - 72px - var(--default-padding));
        border-radius: 0.5rem;
      }

      header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
        height: auto;
        background-color: var(--header-background-color);
        color: var(--header-color);
        font-size: var(--primary-font-size);
        padding: calc(var(--default-padding) / 2) var(--default-padding);
        box-sizing: var(--default-box-sizing);
      }

      header h1 {
        margin: 0;
        font-size: var(--primary-font-size);
        font-weight: var(--primary-font-weight);
        line-height: var(--primary-line-height);
        text-align: left;

      }

      .esi-uno {
        background-color: var(--esi-uno-background-color);
        color: var(--esi-uno-color);
        font-size: var(--primary-font-size);
        font-weight: var(--primary-font-weight);
        line-height: var(--primary-line-height);
        text-align: center;
      }

      .esi-dos {
        background-color: var(--esi-dos-background-color);
        color: var(--esi-uno-color);
      }

      .esi-tres {
        background-color: var(--esi-tres-background-color);
        color: var(--esi-uno-color);
      }

      .esi-cuatro {
        background-color: var(--esi-cuatro-background-color);
        color: var(--esi-uno-color);
      }

      .esi-cinco {
        background-color: var(--esi-cinco-background-color);
        color: var(--esi-uno-color);
      }

      label {
        font-size: var(--label-font-size);
      }

      md-fab {
        position: fixed;
        bottom: var(--default-padding);
        right: var(--default-padding);
      }

      .def-esi-uno {
        display: block;
        color: var(--esi-uno-text-color, #000);
        font-size: 1.2rem;
        text-align: left;
      }

      .def-esi-uno > img {
        width: 100%;
      }
      .recargar {
        --mdc-theme-primary: var(--header-background-color);
        --mdc-theme-on-primary: var(--header-color);
      }
    `;
  }



  constructor() {
    super();
    this.title = 'Categorización ESI';
    this.life_saving = null;
    window.isUpdateAvailable.then((r) => {
      if (r === true) {
        window.prompt('Hay una nueva versión disponible, ¿recargar?', 'Recargar');
        window.location.reload();
      }
    });
  }

    render() {
      return html`
        <main>
          <header>
            <h1>${this.title}</h1>
            <a href="https://github.com/nicoveraz/esi-app" target="_blank">
            <img src="./assets/github.svg" alt="GitHub Logo" width="32" height="32">
          </a>
          </header>
          <div>
            ${this.renderLifeSavingQuestion()}
            ${this.renderHighRiskQuestion()}
            ${this.renderResourceAgeQuestions()}
          </div>
          <md-fab @click="${this.reset}"><md-icon slot="icon">restart_alt</md-icon></md-fab>
        </main>
      `;
    }

    renderLifeSavingQuestion() {
      return html`
        <vaadin-form-layout>
          <vaadin-combo-box
            clear-button-visible
            label="¿Requiere intervención inmediata para salvar su vida?"
            @change="${(e) => {
              this.life_saving = e.target.value
              // Resetting the properties if life_saving changes
              this.high_risk = null;
              this.num_resources = null;
              this.edad = null;
            }}"
            .value="${this.life_saving}"
            .items="${['SI', 'NO']}">
          </vaadin-combo-box>
        </vaadin-form-layout>
        ${this.life_saving? '' : this.renderDefEsiUno()}
        ${this.life_saving === 'SI' ? this.renderEsiOne() : ''}
      `;
    }

    renderEsiOne() {
      return html`
        <div class="esi-uno">ESI 1</div>
        ${this.renderDefEsiUno()}
      `;
    }

    renderEsiTwo() {
      return html`
        <div class="esi-uno esi-dos">ESI 2</div>
        ${this.renderDefEsiDos()}
      `;
    }

    renderEsiThree() {
      return html`
        <div class="esi-uno esi-tres">ESI 3</div>
        <vaadin-form-layout>
          <vaadin-combo-box
            clear-button-visible
            label="Edad"
            @change="${(e)=>this.edad = e.target.value}"
            .value="${this.edad}"
            .items="${['<1m', '1-12m', '1-3a', '3-5a', '5-12a', '12-18a', '>18a']}">
          </vaadin-combo-box>
        </vaadin-form-layout>
      `;
    }

    renderEsiFour() {
      return html`
        <div class="esi-uno esi-cuatro">ESI 4</div>
      `;
    }

    renderEsiFive() {
      return html`
        <div class="esi-uno esi-cinco">ESI 5</div>
      `;
    }

    renderHighRiskQuestion() {
      if (this.life_saving === 'NO') {
        return html`
          <vaadin-form-layout>
            <vaadin-combo-box
              clear-button-visible
              label="¿Situación de alto riesgo?"
              @change="${(e) => {
                this.high_risk = e.target.value
                // Resetting the properties if high_risk changes
                this.num_resources = null;
                this.edad = null;
              }}"
              .value="${this.high_risk}"
              .items="${['SI', 'NO']}">
            </vaadin-combo-box>
          </vaadin-form-layout>
          ${this.high_risk? '' : this.renderDefEsiDos()}
          ${this.high_risk === 'SI' ? this.renderEsiTwo() : ''}
        `;
      }
      return '';
    }

    renderResourceAgeQuestions() {
      if (this.high_risk === 'NO') {
        return html`
          <vaadin-form-layout>
            <vaadin-combo-box
              clear-button-visible
              label="¿Cuántos recursos diferentes se necesitan?"
              @change="${(e)=>this.num_resources = e.target.value}"
              .value="${this.num_resources}"
              .items="${['Ninguno', 'Uno', 'Muchos']}">
            </vaadin-combo-box>
          </vaadin-form-layout>
          ${this.num_resources? '' : this.renderDefRecursos()}
          ${
            this.num_resources === 'Ninguno'?
              this.renderEsiFive() : ''

          }
          ${
            this.num_resources === 'Uno'?
              this.renderEsiFour() : ''

          }

          ${
            this.num_resources === 'Muchos'?
              this.renderEsiThree() : ''
          }
        `;
      }
      return '';
    }

    renderDefEsiUno() {
      return html`
        <div class="def-esi-uno">
          <p><strong>Intervención inmediata para salvar la vida:</strong> Soporte de vía aérea o respiratorio, medicamentos de emergencia, intervenciones hemodinámicas como reanimación con líquidos o productos sanguíneos.</p>
          <p><strong>Las presentaciones clínicas que requieren intervenciones para salvar la vida incluyen las siguientes:</strong></p>
          <ul>
            <li>Intubado</li>
            <li>Inconsciente</li>
            <li>Sin pulso</li>
            <li>Dificultad respiratoria severa</li>
            <li>Hipotensión profunda</li>
            <li>Hipoglicemia</li>
          </ul>
          <p><strong>La inconsciencia se define como un paciente que:</strong></p>
          <ol>
            <li>No es verbal y no sigue órdenes (agudamente)</li>
            <p>Ó</p>
            <li>Requiere estímulo nocivo (D o I en la escala AVDI)</li>
          </ol>
          <img src="./assets/avdi.jpg" alt="Escala AVDI">
        </div>
      `;
    }

    renderDefEsiDos() {
      return html`
      <div class="def-esi-uno">
        <p><strong>Se utilizan 3 preguntas generales para determinar si el paciente cumple con los criterios correspondientes al nivel 2:</strong></p>
        <ol>
          <li>¿Es una situación de alto riesgo?</li>
          <li>¿El paciente está confundido, letárgico o desorientado?</li>
          <li>¿El paciente experimenta dolor o malestar severo?</li>
        </ol>
        <p>En este ítem se debe aplicar Escala numérica del dolor y AVDI</p>
        <img src="./assets/avdi.jpg" alt="Escala AVDI">
        <img src="./assets/eva.jpg" alt="Escala EVA">
      </div>
      `;
    }

    renderDefRecursos() {
      return html`
      <div class="def-esi-uno">
        <p><strong>Recursos:</strong></p>
        <ul>
          <li>Recursos de laboratorio: laboratorio, radiología, ECG, etc.</li>
          <li>Recursos de consultoría: médicos, enfermeras, etc.</li>
          <li>Recursos de procedimiento: sutura, yeso, etc.</li>
          <li>Recursos de observación: camas de observación, monitoreo, etc.</li>
          <li>Recursos de tratamiento: medicamentos, líquidos, etc.</li>
        </ul>
      </div>
      `;
    }

    reset() {
      this.life_saving = null;
      this.high_risk = null;
      this.num_resources = null;
      this.edad = null;
    }

}
