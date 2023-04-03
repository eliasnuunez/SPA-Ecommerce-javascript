export function mainNav() {
  const $main = document.createElement("div");
  $main.classList.add("header-main");
  $main.innerHTML = `
  <div class="container">
  <a href="https://twitter.com/eliasnuunez" class="header-logo">
   <p>@eliasnuunez</p>
  </a>

  <div class="header-search-container">
    <input
      type="search"
      name="search"
      class="search-field"
      placeholder="Buscar producto..."
    />

    <button class="search-btn">
      <ion-icon name="search-outline"></ion-icon>
    </button>
  </div>

  <div class="header-user-actions">
    <button class="action-btn">
      <ion-icon name="person-outline"></ion-icon>
    </button>

    <button class="action-btn">
      <ion-icon name="heart-outline"></ion-icon>
      <span class="count">0</span>
    </button>

    <button class="action-btn">
      <ion-icon name="bag-handle-outline"></ion-icon>
      <span class="count">0</span>
    </button>
  </div>
</div>
        `;

  return $main;
}
