export function menuNav() {
    const $menu = document.createElement("nav");
    $menu.classList.add("desktop-navigation-menu");
    $menu.innerHTML = `
    <div class="container">
    <ul class="desktop-menu-category-list">
      <li class="menu-category">
        <a href="#" class="menu-title">Inicio</a>
      </li>
  
      <li class="menu-category">
        <a href="#" class="menu-title">Categorías</a>
  
        <div class="dropdown-panel">
          <ul class="dropdown-panel-list">
            <li class="menu-title">
              <a href="#">Electrónica</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Escritorio</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Laptop</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Cámara</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Tablet</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Headphone</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">
                <img
                  src="./img/electronics-banner-1.jpg"
                  alt="headphone collection"
                  width="250"
                  height="119"
                />
              </a>
            </li>
          </ul>
  
          <ul class="dropdown-panel-list">
            <li class="menu-title">
              <a href="#">Hombres</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Formal</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Casual</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Sports</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Chaqueta</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Gafas de sol</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">
                <img
                  src="./img/mens-banner.jpg"
                  alt="men's fashion"
                  width="250"
                  height="119"
                />
              </a>
            </li>
          </ul>
  
          <ul class="dropdown-panel-list">
            <li class="menu-title">
              <a href="#">Mujeres</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Formal</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Casual</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Perfume</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Productos cosméticos</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Bolsas</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">
                <img
                  src="./assets/images/womens-banner.jpg"
                  alt="women's fashion"
                  width="250"
                  height="119"
                />
              </a>
            </li>
          </ul>
  
          <ul class="dropdown-panel-list">
            <li class="menu-title">
              <a href="#">Electrónica</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Smart Watch</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Smart TV</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Keyboard</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Mouse</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">Microphone</a>
            </li>
  
            <li class="panel-list-item">
              <a href="#">
                <img
                  src="./img/electronics-banner-2.jpg"
                  alt="mouse collection"
                  width="250"
                  height="119"
                />
              </a>
            </li>
          </ul>
        </div>
      </li>
  
      <li class="menu-category">
        <a href="#" class="menu-title">Hombres</a>
  
        <ul class="dropdown-list">
          <li class="dropdown-item">
            <a href="#">Camisa</a>
          </li>
  
          <li class="dropdown-item">
            <a href="#">Shorts & Jeans</a>
          </li>
  
          <li class="dropdown-item">
            <a href="#">Zapatos de seguridad</a>
          </li>
  
          <li class="dropdown-item">
            <a href="#">Billetera</a>
          </li>
        </ul>
      </li>
  
      <li class="menu-category">
        <a href="#" class="menu-title">Mujeres</a>
  
        <ul class="dropdown-list">
          <li class="dropdown-item">
            <a href="#">vestido y levita</a>
          </li>
  
          <li class="dropdown-item">
            <a href="#">Pendientes</a>
          </li>
  
          <li class="dropdown-item">
            <a href="#">Collar</a>
          </li>
  
          <li class="dropdown-item">
            <a href="#">Kit de maquillaje</a>
          </li>
        </ul>
      </li>
  
      <li class="menu-category">
        <a href="#" class="menu-title">Joyas</a>
  
        <ul class="dropdown-list">
          <li class="dropdown-item">
            <a href="#">Pendientes</a>
          </li>
  
          <li class="dropdown-item">
            <a href="#">Anillos de pareja</a>
          </li>
  
          <li class="dropdown-item">
            <a href="#">Collar</a>
          </li>
  
          <li class="dropdown-item">
            <a href="#">Bracelets</a>
          </li>
        </ul>
      </li>
  
      <li class="menu-category">
        <a href="#" class="menu-title">Perfume</a>
  
        <ul class="dropdown-list">
          <li class="dropdown-item">
            <a href="#">Perfumes para ropa</a>
          </li>
  
          <li class="dropdown-item">
            <a href="#">Desodorante</a>
          </li>
  
          <li class="dropdown-item">
            <a href="#">Fragancia floral</a>
          </li>
  
          <li class="dropdown-item">
            <a href="#">Ambientador</a>
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
  </div> 
          `;
  
    return $menu;
  }