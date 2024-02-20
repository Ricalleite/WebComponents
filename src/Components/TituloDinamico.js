class TituloDinamico extends HTMLElement {
  constructor() { 
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    // Criação da base do componente
    const componentRoot = document.createElement("h1")
    componentRoot.textContent = this.getAttribute("titulo")
    
    // Estilizar o componente
    const styleComponent = document.createElement("style")
    styleComponent.textContent = `
      h1 {
        color: red;
      }
    `  
    //Enviar para o shadow
      shadow.appendChild(componentRoot)
      shadow.appendChild(styleComponent)
  }
}

customElements.define("titulo-dinamico", TituloDinamico)