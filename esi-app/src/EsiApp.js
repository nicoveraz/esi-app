import { LitElement, html, css } from 'lit';

import '@vaadin/form-layout';
import '@vaadin/number-field';
import '@vaadin/combo-box';
import '@vaadin/checkbox';
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
      sgs_vitales_alto_riesgo: { type: Array },
      sgs_vitales_riesgo: { type: Array },
      sgs_vitales_riesgo_1_3m: { type: Array },
      sgs_vitales_riesgo_3_12m: { type: Array },
      sgs_vitales_riesgo_1_3a: { type: Array },
      sgs_vitales_riesgo_3_5a: { type: Array },
      sgs_vitales_riesgo_5_12a: { type: Array },
      sgs_vitales_riesgo_12_18a: { type: Array },
      sgs_vitales_riesgo_18a: { type: Array },
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
        margin: 0 var(--default-padding);
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

      vaadin-combo-box > label {
        font-size: var(--label-font-size);
      }
      .titulo_riesgo {
        font-size: var(--label-font-size);
        text-align: left;
        margin-top: 2rem;
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
      // this.life_saving = 'NO';
      // this.high_risk = 'NO';
      // this.num_resources = 'Muchos';
      this.sgs_vitales_alto_riesgo = [
        { label: 'T > 38°C', value: 'NO' },
      ];
      this.sgs_vitales_riesgo = [
        { label: 'FC > 190', value: 'NO' },
        { label: 'FR > 60', value: 'NO' },
        { label: 'SpO2 < 92%', value: 'NO' },
      ];
      this.sgs_vitales_riesgo_1_3m = [
        { label: 'T > 38°C', value: 'NO' },
        { label: 'FC > 180', value: 'NO' },
        { label: 'FR > 55', value: 'NO' },
        { label: 'SpO2 < 92%', value: 'NO' },
      ];
      this.sgs_vitales_riesgo_3_12m = [
        { label: 'T > 39°C', value: 'NO' },
        { label: 'T < 36°C', value: 'NO' },
        { label: 'Inmunizaciones incompletas', value: 'NO' },
        { label: 'Fiebre sin foco', value: 'NO' },
        { label: 'FC > 180', value: 'NO' },
        { label: 'FR > 55', value: 'NO' },
        { label: 'SpO2 < 92%', value: 'NO' },
      ];
      this.sgs_vitales_riesgo_1_3a = [
        { label: 'T > 39°C', value: 'NO' },
        { label: 'T < 36°C', value: 'NO' },
        { label: 'Inmunizaciones incompletas', value: 'NO' },
        { label: 'Fiebre sin foco', value: 'NO' },
        { label: 'FC > 140', value: 'NO' },
        { label: 'FR > 40', value: 'NO' },
        { label: 'SpO2 < 92%', value: 'NO' },
      ];
      this.sgs_vitales_riesgo_3_5a = [
        { label: 'T > 39°C', value: 'NO' },
        { label: 'T < 36°C', value: 'NO' },
        { label: 'Inmunizaciones incompletas', value: 'NO' },
        { label: 'Fiebre sin foco', value: 'NO' },
        { label: 'FC > 140', value: 'NO' },
        { label: 'FR > 35', value: 'NO' },
        { label: 'SpO2 < 92%', value: 'NO' },
      ];
      this.sgs_vitales_riesgo_5_12a = [
        { label: 'T > 39°C', value: 'NO' },
        { label: 'T < 36°C', value: 'NO' },
        { label: 'Inmunizaciones incompletas', value: 'NO' },
        { label: 'Fiebre sin foco', value: 'NO' },
        { label: 'FC > 120', value: 'NO' },
        { label: 'FR > 30', value: 'NO' },
        { label: 'SpO2 < 92%', value: 'NO' },
      ];
      this.sgs_vitales_riesgo_12_18a = [
        { label: 'T > 39°C', value: 'NO' },
        { label: 'T < 36°C', value: 'NO' },
        { label: 'Inmunizaciones incompletas', value: 'NO' },
        { label: 'Fiebre sin foco', value: 'NO' },
        { label: 'FC > 100', value: 'NO' },
        { label: 'FR > 20', value: 'NO' },
        { label: 'SpO2 < 92%', value: 'NO' },
      ];
      this.sgs_vitales_riesgo_18a = [
        { label: 'T > 39°C', value: 'NO' },
        { label: 'T < 36°C', value: 'NO' },
        { label: 'FC > 100', value: 'NO' },
        { label: 'FR > 20', value: 'NO' },
        { label: 'SpO2 < 92%', value: 'NO' },
      ];

      window.isUpdateAvailable.then((r) => {
        if (r === true) {
          window.prompt('Hay una nueva versión disponible, ¿recargar?', 'Recargar');
          window.location.reload();
        }
      });
    }

    handleCheckboxChange(index, e, s) {
      s == 'alto_riesgo' ? this.sgs_vitales_alto_riesgo[index].value = e.target.checked ? 'SI' : 'NO' : '';
      s == 'riesgo' ? this.sgs_vitales_riesgo[index].value = e.target.checked ? 'SI' : 'NO' : '';
      s == 'riesgo_1_3m' ? this.sgs_vitales_riesgo_1_3m[index].value = e.target.checked ? 'SI' : 'NO' : '';
      s == 'riesgo_3_12m' ? this.sgs_vitales_riesgo_3_12m[index].value = e.target.checked ? 'SI' : 'NO' : '';
      s == 'riesgo_1_3a' ? this.sgs_vitales_riesgo_1_3a[index].value = e.target.checked ? 'SI' : 'NO' : '';
      s == 'riesgo_3_5a' ? this.sgs_vitales_riesgo_3_5a[index].value = e.target.checked ? 'SI' : 'NO' : '';
      s == 'riesgo_5_12a' ? this.sgs_vitales_riesgo_5_12a[index].value = e.target.checked ? 'SI' : 'NO' : '';
      s == 'riesgo_12_18a' ? this.sgs_vitales_riesgo_12_18a[index].value = e.target.checked ? 'SI' : 'NO' : '';
      s == 'riesgo_18a' ? this.sgs_vitales_riesgo_18a[index].value = e.target.checked ? 'SI' : 'NO' : '';
      this.requestUpdate();
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

    renderEsiTwo(t) {
      return html`
        <div class="esi-uno esi-dos">${t? t + ' ' : ''}ESI 2</div>
        ${
          this.sgs_vitales_alto_riesgo.some(checkbox => checkbox.value === "SI") ||
          this.sgs_vitales_riesgo.some(checkbox => checkbox.value === "SI") ||
          this.sgs_vitales_riesgo_1_3m.some(checkbox => checkbox.value === "SI") ||
          this.sgs_vitales_riesgo_3_12m.some(checkbox => checkbox.value === "SI")? '' : this.renderDefEsiDos()}
      `;
    }

    renderEsiThree() {
      return html`
        ${this.num_resources == 'Muchos' ? html`<div class="esi-uno esi-tres">ESI 3</div>`: ''}
        <vaadin-form-layout>
          <vaadin-combo-box
            clear-button-visible
            label="Edad"
            @change="${(e)=>{this.edad = e.target.value; this.borradatosedad()}}"
            .value="${this.edad}"
            .items="${['<1m', '1-3m', '3-12m', '1-3a', '3-5a', '5-12a', '12-18a', '>18a']}">
          </vaadin-combo-box>
          ${this.renderSignosDeRiesgo(this.edad)}
        </vaadin-form-layout>
      `;
    }

    renderEsiFour() {
      return html`
        <div class="esi-uno esi-cuatro">ESI 4</div>
        ${this.renderEsiThree()}
      `;
    }

    renderEsiFive() {
      return html`
        <div class="esi-uno esi-cinco">ESI 5</div>
        ${this.renderEsiThree()}
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
          <li>¿El paciente experimenta dolor o malestar severo? (EVA ≥7)</li>
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
        <p>Contar el número de diferentes tipos de recursos, no las pruebas individuales o las radiografías (ejemplos: CBC, electrolitos y coagulación es igual a un recurso; hemograma más radiografía de tórax es igual a dos recursos).</p>
        <p>Recursos:</p>
        <ul>
          <li>fluidos IV (hidratación)</li>
          <li>Medicamentos IV o IM o nebulizados</li>
          <li>Consulta especialista</li>
          <li>Procedimiento simple = 1 (sonda foley)</li>
          <li>Procedimiento complejo = 2 (sutura)</li>
        </ul>
        <p>NO son recursos:</p>
        <ul>
          <li>Historia y examen físico (incluyendo pélvico)</li>
          <li>Medicamentos VO</li>
          <li>Hemoglucotest</li>
          <li>Inmunización contra el tétanos</li>
          <li>Repetición de recetas</li>
          <li>Cuidado de heridas simples (vendajes, reevaluación)</li>
          <li>Bastones, férulas, cabestrillos</li>
        </ul>
      </div>
      `;
    }

    renderSignosDeRiesgo(edad) {
      if (edad === '<1m') {
        return html`
          <label class="titulo_riesgo">¿Signos Vitales de Riesgo?</label>
          <vaadin-form-layout>
            <div>
              ${this.sgs_vitales_alto_riesgo.map(
                (checkbox, index) => html`
                  <vaadin-checkbox
                    label="${checkbox.label}"
                    .checked="${checkbox.value === 'SI'}"
                    @change="${(e) => this.handleCheckboxChange(index, e, 'alto_riesgo')}"
                  ></vaadin-checkbox>
                `
              )}
              ${this.sgs_vitales_riesgo.map(
                (checkbox, index) => html`
                  <vaadin-checkbox
                    label="${checkbox.label}"
                    .checked="${checkbox.value === 'SI'}"
                    @change="${(e) => this.handleCheckboxChange(index, e, 'riesgo')}"
                  ></vaadin-checkbox>
                `
              )}
            </div>
          </vaadin-form-layout>

          ${this.sgs_vitales_alto_riesgo.some(checkbox => checkbox.value === "SI") ? this.renderEsiTwo('Al menos') : ''}
          ${this.sgs_vitales_riesgo.some(checkbox => checkbox.value === "SI") &&  this.sgs_vitales_alto_riesgo.some(checkbox => checkbox.value === "NO") ? this.renderEsiTwo('Considerar') : ''}
        `;
      }
      if (edad === '1-3m') {
        return html`
          <label class="titulo_riesgo">¿Signos Vitales de Riesgo?</label>
          <vaadin-form-layout>
            <div>
              ${this.sgs_vitales_riesgo_1_3m.map(
                (checkbox, index) => html`
                  <vaadin-checkbox
                    label="${checkbox.label}"
                    .checked="${checkbox.value === 'SI'}"
                    @change="${(e) => this.handleCheckboxChange(index, e, 'riesgo_1_3m')}"
                  ></vaadin-checkbox>
                `
              )}
            </div>
          </vaadin-form-layout>

          ${this.sgs_vitales_riesgo_1_3m.some(checkbox => checkbox.value === "SI") ? this.renderEsiTwo('Considerar') : ''}
        `;
      }
      if (edad === '3-12m') {
        return html`
          <label class="titulo_riesgo">¿Signos Vitales de Riesgo?</label>
          <vaadin-form-layout>
            <div>
              ${this.sgs_vitales_riesgo_3_12m.map(
                (checkbox, index) => html`
                  <vaadin-checkbox
                    label="${checkbox.label}"
                    .checked="${checkbox.value === 'SI'}"
                    @change="${(e) => this.handleCheckboxChange(index, e, 'riesgo_3_12m')}"
                  ></vaadin-checkbox>
                `
              )}
            </div>
          </vaadin-form-layout>

          ${this.sgs_vitales_riesgo_3_12m.some(checkbox => checkbox.value === "SI") ? html`<div class="esi-uno esi-tres">Considerar al menos ESI 3</div>` : ''}
        `;
      }
      if (edad === '1-3a') {
        return html`
          <label class="titulo_riesgo">¿Signos Vitales de Riesgo?</label>
          <vaadin-form-layout>
            <div>
              ${this.sgs_vitales_riesgo_1_3a.map(
                (checkbox, index) => html`
                  <vaadin-checkbox
                    label="${checkbox.label}"
                    .checked="${checkbox.value === 'SI'}"
                    @change="${(e) => this.handleCheckboxChange(index, e, 'riesgo_1_3a')}"
                  ></vaadin-checkbox>
                `
              )}
            </div>
          </vaadin-form-layout>

          ${this.sgs_vitales_riesgo_1_3a.some(checkbox => checkbox.value === "SI") ? html`<div class="esi-uno esi-tres">Considerar al menos ESI 3</div>` : ''}
        `;
      }

      if (edad === '3-5a') {
        return html`
          <label class="titulo_riesgo">¿Signos Vitales de Riesgo?</label>
          <vaadin-form-layout>
            <div>
              ${this.sgs_vitales_riesgo_3_5a.map(
                (checkbox, index) => html`
                  <vaadin-checkbox
                    label="${checkbox.label}"
                    .checked="${checkbox.value === 'SI'}"
                    @change="${(e) => this.handleCheckboxChange(index, e, 'riesgo_3_5a')}"
                  ></vaadin-checkbox>
                `
              )}
            </div>
          </vaadin-form-layout>

          ${this.sgs_vitales_riesgo_3_5a.some(checkbox => checkbox.value === "SI") ? html`<div class="esi-uno esi-tres">Considerar al menos ESI 3</div>` : ''}
        `;
      }

      if (edad === '5-12a') {
        return html`
          <label class="titulo_riesgo">¿Signos Vitales de Riesgo?</label>
          <vaadin-form-layout>
            <div>
              ${this.sgs_vitales_riesgo_5_12a.map(
                (checkbox, index) => html`
                  <vaadin-checkbox
                    label="${checkbox.label}"
                    .checked="${checkbox.value === 'SI'}"
                    @change="${(e) => this.handleCheckboxChange(index, e, 'riesgo_5_12a')}"
                  ></vaadin-checkbox>
                `
              )}
            </div>
          </vaadin-form-layout>

          ${this.sgs_vitales_riesgo_5_12a.some(checkbox => checkbox.value === "SI") ? html`<div class="esi-uno esi-tres">Considerar al menos ESI 3</div>` : ''}

        `;
      }

      if (edad === '12-18a') {
        return html`
          <label class="titulo_riesgo">¿Signos Vitales de Riesgo?</label>
          <vaadin-form-layout>
            <div>
              ${this.sgs_vitales_riesgo_12_18a.map(
                (checkbox, index) => html`
                  <vaadin-checkbox
                    label="${checkbox.label}"
                    .checked="${checkbox.value === 'SI'}"
                    @change="${(e) => this.handleCheckboxChange(index, e, 'riesgo_12_18a')}"
                  ></vaadin-checkbox>
                `
              )}
            </div>
          </vaadin-form-layout>

          ${this.sgs_vitales_riesgo_12_18a.some(checkbox => checkbox.value === "SI") ? html`<div class="esi-uno esi-tres">Considerar al menos ESI 3</div>` : ''}

        `;
      }

      if (edad === '>18a') {
        return html`
          <label class="titulo_riesgo">¿Signos Vitales de Riesgo?</label>
          <vaadin-form-layout>
            <div>
              ${this.sgs_vitales_riesgo_18a.map(
                (checkbox, index) => html`
                  <vaadin-checkbox
                    label="${checkbox.label}"
                    .checked="${checkbox.value === 'SI'}"
                    @change="${(e) => this.handleCheckboxChange(index, e, 'riesgo_18a')}"
                  ></vaadin-checkbox>
                `
              )}
            </div>
          </vaadin-form-layout>

          ${this.sgs_vitales_riesgo_18a.some(checkbox => checkbox.value === "SI") ? html`<div class="esi-uno esi-tres">Considerar al menos ESI 3</div>` : ''}
        `;
      }

      return '';
    }

    borradatosedad() {
      this.sgs_vitales_alto_riesgo.forEach(checkbox => checkbox.value = "NO");
      this.sgs_vitales_riesgo.forEach(checkbox => checkbox.value = "NO");
      this.sgs_vitales_riesgo_1_3m.forEach(checkbox => checkbox.value = "NO");
      this.sgs_vitales_riesgo_3_12m.forEach(checkbox => checkbox.value = "NO");
      this.sgs_vitales_riesgo_1_3a.forEach(checkbox => checkbox.value = "NO");
      this.sgs_vitales_riesgo_3_5a.forEach(checkbox => checkbox.value = "NO");
      this.sgs_vitales_riesgo_5_12a.forEach(checkbox => checkbox.value = "NO");
      this.sgs_vitales_riesgo_12_18a.forEach(checkbox => checkbox.value = "NO");
      this.sgs_vitales_riesgo_18a.forEach(checkbox => checkbox.value = "NO");
    }

    reset() {
      this.life_saving = null;
      this.high_risk = null;
      this.num_resources = null;
      this.edad = null;
      this.sgs_vitales = null;
    }

}
