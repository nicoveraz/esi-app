import { LitElement, html, css } from 'lit';

import '@vaadin/form-layout';
import '@vaadin/number-field';
import '@vaadin/combo-box';
import '@material/web/fab/fab.js';
import '@material/web/icon/icon.js';

import './esi-uno.js';


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
        --esi-app-background-color: #ededed;
        --esi-app-header-background-color: rgb(52, 143, 255);
        --esi-app-header-color: #fff;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        margin: 0 auto;
        text-align: center;
        background-color: var(--esi-app-background-color);
        height: 100%;
        box-sizing: border-box;
      }

      main {
        flex-grow: 1;
        box-sizing: border-box;
      }
      main > div {
        max-width: 720px;
        margin: 1rem auto;
        background-color: white;
        height: calc(100vh - 72px - 2rem);
        border-radius: 0.5rem;
      }
      /* top bar with title */
      header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
        box-sizing: border-box;
        height: auto;
        background-color: var(--esi-app-header-background-color);
        color: var(--esi-app-header-color);
        font-size: 1.5rem;
      }
      header h1 {
        margin: 0;
        padding: 1.5rem;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.5rem;
        text-align: left;
        padding-left: 1rem;
      }
      vaadin-form-layout {
        padding: 1rem;
        box-sizing: border-box;
      }
      .esi-uno {
        background-color: #ff0000;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.5rem;
        text-align: center;
        padding: 1rem;
        box-sizing: border-box;
      }
      .esi-dos {
        background-color: orange;
        color: white;
      }
      label {
        font-size: 1.2rem;
      }
      md-fab {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
      }
      .ejemplos {
        font-size: 1.2rem;
        padding: 1rem;
        box-sizing: border-box;
        text-align: left;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Categorización ESI CPM';
  }

  render() {
    return html`
      <main>
        <header>
          <h1>${this.title}</h1>
        </header>
        <div>
          <vaadin-form-layout>
            <vaadin-combo-box clear-button-visible label="¿Requiere intervención inmediata para salvar su vida?" @change="${(e)=>this.life_saving = e.target.value}" .value="${this.life_saving}" .items="${['SI', 'NO']}"></vaadin-combo-box>
          </vaadin-form-layout>
          ${this.life_saving === 'SI' ? html`
            <div class="esi-uno">ESI 1</div>
            <esi-uno></esi-uno>
            `: html`
            `
          }
          ${this.life_saving === 'NO' ? html`
            <vaadin-form-layout>
              <vaadin-combo-box clear-button-visible label="¿Situación de alto riesgo?" @change="${(e)=>this.high_risk = e.target.value}" .value="${this.high_risk}" .items="${['SI', 'NO']}"></vaadin-combo-box>
            </vaadin-form-layout>
            `: html`
            `
          }
          ${this.life_saving? html`
            `: html`
            <esi-uno></esi-uno>
              `
          }
          ${this.high_risk === 'SI' ? html`
            <div class="esi-uno esi-dos">ESI 2</div>
            `: html`
            `
          }
          ${this.high_risk === 'NO' ? html`
            <vaadin-form-layout>
              <vaadin-combo-box clear-button-visible label="¿Cuántos recursos diferentes se necesitan?" @change="${(e)=>this.num_resources = e.target.value}" .value="${this.num_resources}" .items="${['Ninguno', 'Uno', 'Muchos']}"></vaadin-combo-box>
              <vaadin-combo-box clear-button-visible label="Edad" @change="${(e)=>this.edad = e.target.value}" .value="${this.edad}" .items="${['<1m', '1-12m', '1-3a', '3-5a', '5-12a', '12-18a', '>18a']}"></vaadin-combo-box>
            </vaadin-form-layout>
            `: html`
            `
          }
        </div>
        <md-fab @click="${(e) => this.reset()}"><md-icon slot="icon">restart_alt</md-icon></md-fab>
      </main>
    `;
  }
  reset() {
    this.life_saving = null;
    this.high_risk = null;
    this.num_resources = null;
    this.edad = null;
  }
}
