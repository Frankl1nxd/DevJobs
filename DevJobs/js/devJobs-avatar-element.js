/*Los Web Components permiten crear elementos HTML personalizados con JavaScript puro.

Se crean extendiendo la clase HTMLElement.

El nombre del componente debe contener al menos un guion (-).

super() debe llamarse primero en el constructor.

this se refiere a la instancia del elemento que estamos creando.

this.attachShadow({mode: 'open'}) crea un Shadow DOM para encapsular el componente.

connectedCallback() se ejecuta cuando el elemento se añade al DOM.
customElements.define() registra el componente para poder usarlo.

Shadow DOM permite encapsular estilos y evitar conflictos con el CSS global.

Con Web Components podemos crear componentes reutilizables sin necesidad de frameworks externos. */


class DevJobsAvatar extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'}); // Creamos Shadow DOM
    
    }

     createUrl(service, username) {
            return `https://unavatar.io/${service}/${username}`
        }

    render(){

        const service = this.getAttribute('service') ?? 'github';
        const username = this.getAttribute('username') ?? 'Frankl1nxd';
        const size = this.getAttribute('size') ?? '40';

        const url = this.createUrl(service, username);

        // Ahora usamos shadowRoot para acceder al Shadow DOM.
    this.shadowRoot.innerHTML = `
      <style>
        img {
          width: ${size}px;
          height: ${size}px;
          border-radius: 9999px;
        }
      </style>

      <img
        src="${url}"
        alt="Avatar de ${username}"
        class="avatar"
      />
    `
    
  }

  connectedCallback() {
    this.render()
  }

}

customElements.define('devjobs-avatar', DevJobsAvatar);