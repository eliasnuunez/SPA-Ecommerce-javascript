export function footerBottomm() {
  const $bottom = document.createElement("div");
  $bottom.classList.add("container");
  $bottom.innerHTML = `
  <img src="./img/payment.png" alt="payment method" class="payment-img" />

  <p class="copyright">
    © Todos los derechos reservados - developer by @eliasnuunez
  </p>
  
                  `;

  return $bottom;
}
