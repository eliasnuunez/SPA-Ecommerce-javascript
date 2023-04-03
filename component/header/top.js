export function topNav() {
  const $top = document.createElement("div");
  $top.classList.add("header-top");
  $top.innerHTML = `
    <div class="container">
    <ul class="header-social-container">
      <li>
        <a href="#" class="social-link">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </li>

      <li>
        <a href="#" class="social-link">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>

      <li>
        <a href="#" class="social-link">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </li>

      <li>
        <a href="#" class="social-link">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </li>
    </ul>

    <div class="header-alert-news">
      <p>
        <b>Envío gratis</b>
        Compra superior a $550 esta semana
      </p>
    </div>

    <div class="header-top-actions"></div>
  </div>
      `;

  return $top;
}
