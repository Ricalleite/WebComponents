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
    image.src = this.getAttribute("photo") || "assets/fotoDefault.jpeg";

    cardRight.appendChild(image);

    componentCard.appendChild(cardLeft);
    componentCard.appendChild(cardRight);

    return componentCard

  }
  
  styles() {}
}

customElements.define("card-news", CardNews);