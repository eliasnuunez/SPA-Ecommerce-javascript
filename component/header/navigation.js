export function mobileNavigation() {
    const $navigation = document.createElement("div");
    $navigation.classList.add("mobile-bottom-navigation");
    $navigation.innerHTML = `
  <button class="action-btn" data-mobile-menu-open-btn>
    <ion-icon name="menu-outline"></ion-icon>
  </button>
  
  <button class="action-btn">
    <ion-icon name="bag-handle-outline"></ion-icon>
  
    <span class="count">0</span>
  </button>
  
  <button class="action-btn">
    <ion-icon name="home-outline"></ion-icon>
  </button>
  
  <button class="action-btn">
    <ion-icon name="heart-outline"></ion-icon>
  
    <span class="count">0</span>
  </button>
  
  <button class="action-btn" data-mobile-menu-open-btn>
    <ion-icon name="grid-outline"></ion-icon>
  </button>
          `;
  
    return $navigation;
  }