export function footerNavv() {
  const $nav = document.createElement("div");
  $nav.classList.add("container");
  $nav.innerHTML = `
  <ul class="footer-nav-list">
  <li class="footer-nav-item">
    <h2 class="nav-title">Categorías Populares</h2>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Moda</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Electrónica</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Cosmética</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Salud</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Reloj</a>
  </li>
</ul>

<ul class="footer-nav-list">
  <li class="footer-nav-item">
    <h2 class="nav-title">Productos</h2>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Precios bajos</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Nuevos productos</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">mejores ventas</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Contacta con nosotros</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">mapa del sitio</a>
  </li>
</ul>

<ul class="footer-nav-list">
  <li class="footer-nav-item">
    <h2 class="nav-title">Nuestra compañía</h2>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Entrega</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Aviso Legal</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Términos y condiciones</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Sobre nosotros</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">pago seguro</a>
  </li>
</ul>

<ul class="footer-nav-list">
  <li class="footer-nav-item">
    <h2 class="nav-title">Servicios</h2>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Precios bajos</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Nuevos productos</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">mejores ventas</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Contacta con nosotros</a>
  </li>

  <li class="footer-nav-item">
    <a href="#" class="footer-nav-link">Mapa del sitio</a>
  </li>
</ul>

<ul class="footer-nav-list">
  <li class="footer-nav-item">
    <h2 class="nav-title">Contacto</h2>
  </li>

  <li class="footer-nav-item flex">
    <div class="icon-box">
      <ion-icon name="location-outline"></ion-icon>
    </div>

    <address class="content">419 caseros CABA | Argentina</address>
  </li>

  <li class="footer-nav-item flex">
    <div class="icon-box">
      <ion-icon name="call-outline"></ion-icon>
    </div>

    <a href="tel:+607936-8058" class="footer-nav-link">(011) 936-8058</a>
  </li>

  <li class="footer-nav-item flex">
    <div class="icon-box">
      <ion-icon name="mail-outline"></ion-icon>
    </div>

    <a href="mailto:example@gmail.com" class="footer-nav-link"
      >example@gmail.com</a
    >
  </li>
</ul>

<ul class="footer-nav-list">
  <li class="footer-nav-item">
    <h2 class="nav-title">Síganos</h2>
  </li>

  <li>
    <ul class="social-link">
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </li>

      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>

      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </li>

      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </li>
    </ul>
  </li>
</ul>
                `;

  return $nav;
}
