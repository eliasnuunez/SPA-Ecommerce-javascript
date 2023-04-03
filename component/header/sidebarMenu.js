export function sidebarMenu() {
    const $navMenu = document.createElement("div");
    $navMenu.innerHTML = `
    <nav class="mobile-navigation-menu has-scrollbar" data-mobile-menu>
    <div class="menu-top">
      <h2 class="menu-title">Menu</h2>
  
      <button class="menu-close-btn" data-mobile-menu-close-btn>
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </div>
  
    <ul class="mobile-menu-category-list">
      <li class="menu-category">
        <a href="#" class="menu-title">Home</a>
      </li>
  
      <li class="menu-category">
        <button class="accordion-menu" data-accordion-btn>
          <p class="menu-title">Hombres</p>
  
          <div>
            <ion-icon name="add-outline" class="add-icon"></ion-icon>
            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
          </div>
        </button>
  
        <ul class="submenu-category-list" data-accordion>
          <li class="submenu-category">
            <a href="#" class="submenu-title">Camisa</a>
          </li>
  
          <li class="submenu-category">
            <a href="#" class="submenu-title">Shorts & Jeans</a>
          </li>
  
          <li class="submenu-category">
            <a href="#" class="submenu-title">Zapatos de seguridad</a>
          </li>
  
          <li class="submenu-category">
            <a href="#" class="submenu-title">Billetera</a>
          </li>
        </ul>
      </li>
  
      <li class="menu-category">
        <button class="accordion-menu" data-accordion-btn>
          <p class="menu-title">Mujeres</p>
  
          <div>
            <ion-icon name="add-outline" class="add-icon"></ion-icon>
            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
          </div>
        </button>
  
        <ul class="submenu-category-list" data-accordion>
          <li class="submenu-category">
            <a href="#" class="submenu-title">vestido y levita</a>
          </li>
  
          <li class="submenu-category">
            <a href="#" class="submenu-title">Pendientes</a>
          </li>
  
          <li class="submenu-category">
            <a href="#" class="submenu-title">Collar</a>
          </li>
  
          <li class="submenu-category">
            <a href="#" class="submenu-title">Kit de maquillaje</a>
          </li>
        </ul>
      </li>
  
      <li class="menu-category">
        <button class="accordion-menu" data-accordion-btn>
          <p class="menu-title">Joyas</p>
  
          <div>
            <ion-icon name="add-outline" class="add-icon"></ion-icon>
            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
          </div>
        </button>
  
        <ul class="submenu-category-list" data-accordion>
          <li class="submenu-category">
            <a href="#" class="submenu-title">Pendientes</a>
          </li>
  
          <li class="submenu-category">
            <a href="#" class="submenu-title">Anillos de pareja</a>
          </li>
  
          <li class="submenu-category">
            <a href="#" class="submenu-title">Collar</a>
          </li>
  
          <li class="submenu-category">
            <a href="#" class="submenu-title">Bracelets</a>
          </li>
        </ul>
      </li>
  
      <li class="menu-category">
        <button class="accordion-menu" data-accordion-btn>
          <p class="menu-title">Perfume</p>
  
          <div>
            <ion-icon name="add-outline" class="add-icon"></ion-icon>
            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
          </div>
        </button>
  
        <ul class="submenu-category-list" data-accordion>
          <li class="submenu-category">
            <a href="#" class="submenu-title">Perfumes para ropa</a>
          </li>
  
          <li class="submenu-category">
            <a href="#" class="submenu-title">Desodorante</a>
          </li>
  
          <li class="submenu-category">
            <a href="#" class="submenu-title">Fragancia floral</a>
          </li>
  
          <li class="submenu-category">
            <a href="#" class="submenu-title">Ambientador</a>
          </li>
        </ul>
      </li>
  
      <li class="menu-category">
        <a href="#" class="menu-title">Blog</a>
      </li>
  
      <li class="menu-category">
        <a href="#" class="menu-title">Ofertas</a>
      </li>
    </ul>
  
    <div class="menu-bottom">
      <ul class="menu-category-list">
        <li class="menu-category">
          <button class="accordion-menu" data-accordion-btn>
            <p class="menu-title">Idioma</p>
  
            <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
          </button>
  
          <ul class="submenu-category-list" data-accordion>
            <li class="submenu-category">
              <a href="#" class="submenu-title">English</a>
            </li>
  
            <li class="submenu-category">
              <a href="#" class="submenu-title">Espa&ntilde;ol</a>
            </li>
  
            <li class="submenu-category">
              <a href="#" class="submenu-title">Fren&ccedil;h</a>
            </li>
          </ul>
        </li>
  
        <li class="menu-category">
          <button class="accordion-menu" data-accordion-btn>
            <p class="menu-title">Divisa</p>
            <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
          </button>
  
          <ul class="submenu-category-list" data-accordion>
            <li class="submenu-category">
              <a href="#" class="submenu-title">USD &dollar;</a>
            </li>
  
            <li class="submenu-category">
              <a href="#" class="submenu-title">EUR &euro;</a>
            </li>
          </ul>
        </li>
      </ul>
  
      <ul class="menu-social-container">
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
    </div>
  </nav>
          `;
  
    return $navMenu;
  }