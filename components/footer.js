class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

<!-- Begin page content -->
<footer class="footer mt-auto py-3 bg-light" style="text-align: center">
  <div class="container">
    <span class="text-muted">
    
                <a href="Impressum.html" data-toggle="tooltip" title="Impressum">Impressum</a>
                <a href="hilfe.html" data-toggle="tooltip" title="Hilfe">Hilfe</a>
</span>
  </div>
</footer>
  </body>
</html>

    `;
    }
}

customElements.define('footer-component', Footer);