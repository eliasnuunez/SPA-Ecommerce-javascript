export function mainCTA() {
  const $cta = document.createElement("div");
  $cta.innerHTML = `
  <img src="./img/cta-banner.jpg" alt="summer collection" class="cta-banner" />

  <a href="#" class="cta-content">
    <p class="discount">25% de descuento</p>
  
    <h2 class="cta-title">Colección de verano</h2>
  
    <p class="cta-text">A partir de $10</p>
  
    <button class="cta-btn">Compra ahora</button>
  </a>
            `;

  return $cta;
}
