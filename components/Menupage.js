export class MenuPage extends HTMLElement{

  constructor(){
    super()
    this.root = this.attachShadow({mode : "open"});

    const styles = document.createElement("style")
    this.root.appendChild(styles);

    async function loadCss(){
      const request = await fetch("/components/MenuPage.css")
      const css = await request.text();
      styles.textContent = css;

    }

    loadCss()
   
  }

  connectedCallback(){
    
    const template = document.querySelector("#menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content)
    
   
  }

}

customElements.define("menu-page", MenuPage);