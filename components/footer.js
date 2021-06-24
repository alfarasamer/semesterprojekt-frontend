class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
  <style>
    footer {
      background-color: #f5f5f5;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 40px;
      padding: 5px;
      text-align: center;
    }
    .text-muted{

      position: center;
    }
    footer a {
      color: black;
      position: center;
      box-sizing: border-box;
    }
    footer a:hover {
      color: #777;
      text-decoration: none;
    }
    .up-arrow{
      position: center;
    }
  </style>
<footer class="footer">
  <div class="container">
    <a class="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
            <span class="text-muted">
                <a href="Impressum.html" data-toggle="tooltip" title="Impressum">Impressum</a>
                <a href="hilfe.html" data-toggle="tooltip" title="Hilfe">Hilfe</a>
            </span>
    </a>
  </div>
</footer>
    `;
    }
}

customElements.define('footer-component', Footer);