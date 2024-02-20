class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
//    shadow.innerHTML = "<h2>Hi Ricardo! It's working!!</h2>";

    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentCard = document.createElement("div");
    componentCard.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")

    const linktitle = document.createElement("a");
    linktitle.textContent = this.getAttribute("title");
    linktitle.href = this.getAttribute("link");
//    linktitle.setAttribute("href", this.getAttribute("link")); -> Tbm funciona!


    const content = document.createElement("p");
    content.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linktitle);
    cardLeft.appendChild(content);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const image = document.createElement("img");
    image.setAttribute("class", "imagem");
    image.src = this.getAttribute("photo") || "assets/fotoDefault.jpeg";

    cardRight.appendChild(image);

    componentCard.appendChild(cardLeft);
    componentCard.appendChild(cardRight);

    return componentCard

  }
  
  styles() {
    const stylesComponent = document.createElement("style");
    stylesComponent.textContent = `
        .card{
          width: 80%;
          box-shadow: 5px 5px 7px 1px rgba(0,0,0,0.75);
          -webkit-box-shadow: 5px 5px 7px 1px rgba(0,0,0,0.75);
          -moz-box-shadow: 5px 5px 7px 1px rgba(0,0,0,0.75);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        
        .card__left{
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10px;
        }
        
        .card__left > a{
          margin-top: 12px;
          font-size: 22px;
          color: black;
          text-decoration: none;
        }
        
        .card__left > p{
          color: rgb(97, 92, 92);
        }
        
        .card__left > span{
          font-weight: 400;
        }
        
        .card__right .imagem{
          width: 290px;
          height: 200;
          max-height: 200px;
        }
    `
    return stylesComponent
  }
}

customElements.define("card-news", CardNews);