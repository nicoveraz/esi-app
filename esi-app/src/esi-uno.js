import { LitElement, html, css } from 'lit';

export class EsiUno extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--esi-uno-text-color, #000);
        font-size: 1.2rem;
        padding: 1rem;
        box-sizing: border-box;
        text-align: left;
      }
      img {
        width: 100%;
      }
    `;
  }

  render() {
    return html`
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
      <img src="../assets/avdi.jpg" alt="Escala AVDI">
    `;
  }
}

customElements.define('esi-uno', EsiUno);