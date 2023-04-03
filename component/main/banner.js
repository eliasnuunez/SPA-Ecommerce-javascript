export function mainBanner() {
  const $mainBanner = document.createElement("div");
  $mainBanner.classList.add("banner");
  $mainBanner.innerHTML = `
  <div class="container">
  <div class="slider-container has-scrollbar">
    <div class="slider-item">
      <img
        src="./img/banner-1.jpg"
        alt="women's latest fashion sale"
        class="banner-img"
      />

      <div class="banner-content">
        <p class="banner-subtitle">Artículos de tendencia</p>

        <h2 class="banner-title">Rebajas de última moda femenina</h2>

        <p class="banner-text">a partir de &dollar; <b>20</b>.00</p>

        <a href="#" class="banner-btn">Compra ahora</a>
      </div>
    </div>

    <div class="slider-item">
      <img
        src="./img/banner-2.jpg"
        alt="modern sunglasses"
        class="banner-img"
      />

      <div class="banner-content">
        <p class="banner-subtitle">Accesorios de moda</p>

        <h2 class="banner-title">Gafas de sol modernas</h2>

        <p class="banner-text">a partir de &dollar; <b>15</b>.00</p>

        <a href="#" class="banner-btn">Compra ahora</a>
      </div>
    </div>

    <div class="slider-item">
      <img
        src="./img/banner-3.jpg"
        alt="new fashion summer sale"
        class="banner-img"
      />

      <div class="banner-content">
        <p class="banner-subtitle">Oferta de venta</p>

        <h2 class="banner-title">Nueva venta de verano de moda</h2>

        <p class="banner-text">a partir de &dollar; <b>29</b>.99</p>

        <a href="#" class="banner-btn">Compra ahora</a>
      </div>
    </div>
  </div>
</div>
          `;

  return $mainBanner;
}