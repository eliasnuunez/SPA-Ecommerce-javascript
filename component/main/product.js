
export function mainProduct() {
    const $product = document.createElement("div");
    $product.classList.add("container");
    $product.innerHTML = `
  
    <div class="sidebar has-scrollbar" data-mobile-menu>
    <div class="sidebar-category">
      <div class="sidebar-top">
        <h2 class="sidebar-title">Categoría</h2>
  
        <button class="sidebar-close-btn" data-mobile-menu-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
  
      <ul class="sidebar-menu-category-list">
        <li class="sidebar-menu-category">
          <button class="sidebar-accordion-menu" data-accordion-btn>
            <div class="menu-title-flex">
              <img
                src="./img/icons/dress.svg"
                alt="clothes"
                width="20"
                height="20"
                class="menu-title-img"
              />
  
              <p class="menu-title">Ropa</p>
            </div>
  
            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>
  
          <ul class="sidebar-submenu-category-list" data-accordion>
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Camisa</p>
                <data value="300" class="stock" title="Available Stock">300</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">shorts & jeans</p>
                <data value="60" class="stock" title="Available Stock">60</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">chaqueta</p>
                <data value="50" class="stock" title="Available Stock">50</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">vestido y vestido</p>
                <data value="87" class="stock" title="Available Stock">87</data>
              </a>
            </li>
          </ul>
        </li>
  
        <li class="sidebar-menu-category">
          <button class="sidebar-accordion-menu" data-accordion-btn>
            <div class="menu-title-flex">
              <img
                src="./img/icons/shoes.svg"
                alt="footwear"
                class="menu-title-img"
                width="20"
                height="20"
              />
  
              <p class="menu-title">Calzado</p>
            </div>
  
            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>
  
          <ul class="sidebar-submenu-category-list" data-accordion>
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Sports</p>
                <data value="45" class="stock" title="Available Stock">45</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Formal</p>
                <data value="75" class="stock" title="Available Stock">75</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Casual</p>
                <data value="35" class="stock" title="Available Stock">35</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Zapatos de seguridad</p>
                <data value="26" class="stock" title="Available Stock">26</data>
              </a>
            </li>
          </ul>
        </li>
  
        <li class="sidebar-menu-category">
          <button class="sidebar-accordion-menu" data-accordion-btn>
            <div class="menu-title-flex">
              <img
                src="./img/icons/jewelry.svg"
                alt="clothes"
                class="menu-title-img"
                width="20"
                height="20"
              />
  
              <p class="menu-title">Joyas</p>
            </div>
  
            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>
  
          <ul class="sidebar-submenu-category-list" data-accordion>
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Pendientes</p>
                <data value="46" class="stock" title="Available Stock">46</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Anillos de pareja</p>
                <data value="73" class="stock" title="Available Stock">73</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Collar</p>
                <data value="61" class="stock" title="Available Stock">61</data>
              </a>
            </li>
          </ul>
        </li>
  
        <li class="sidebar-menu-category">
          <button class="sidebar-accordion-menu" data-accordion-btn>
            <div class="menu-title-flex">
              <img
                src="./img/icons/perfume.svg"
                alt="perfume"
                class="menu-title-img"
                width="20"
                height="20"
              />
  
              <p class="menu-title">Perfume</p>
            </div>
  
            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>
  
          <ul class="sidebar-submenu-category-list" data-accordion>
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Perfumes para ropa</p>
                <data value="12" class="stock" title="Available Stock"
                  >12 pcs</data
                >
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Desodorante</p>
                <data value="60" class="stock" title="Available Stock"
                  >60 pcs</data
                >
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">chaqueta</p>
                <data value="50" class="stock" title="Available Stock"
                  >50 pcs</data
                >
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">vestido y vestido</p>
                <data value="87" class="stock" title="Available Stock"
                  >87 pcs</data
                >
              </a>
            </li>
          </ul>
        </li>
  
        <li class="sidebar-menu-category">
          <button class="sidebar-accordion-menu" data-accordion-btn>
            <div class="menu-title-flex">
              <img
                src="./img/icons/cosmetics.svg"
                alt="cosmetics"
                class="menu-title-img"
                width="20"
                height="20"
              />
  
              <p class="menu-title">Productos cosméticos</p>
            </div>
  
            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>
  
          <ul class="sidebar-submenu-category-list" data-accordion>
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Shampoo</p>
                <data value="68" class="stock" title="Available Stock">68</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">protector solar</p>
                <data value="46" class="stock" title="Available Stock">46</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Gel de baño</p>
                <data value="79" class="stock" title="Available Stock">79</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Kit de maquillaje</p>
                <data value="23" class="stock" title="Available Stock">23</data>
              </a>
            </li>
          </ul>
        </li>
  
        <li class="sidebar-menu-category">
          <button class="sidebar-accordion-menu" data-accordion-btn>
            <div class="menu-title-flex">
              <img
                src="./img/icons/glasses.svg"
                alt="glasses"
                class="menu-title-img"
                width="20"
                height="20"
              />
  
              <p class="menu-title">Anteojos</p>
            </div>
  
            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>
  
          <ul class="sidebar-submenu-category-list" data-accordion>
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Gafas de sol</p>
                <data value="50" class="stock" title="Available Stock">50</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Lentes</p>
                <data value="48" class="stock" title="Available Stock">48</data>
              </a>
            </li>
          </ul>
        </li>
  
        <li class="sidebar-menu-category">
          <button class="sidebar-accordion-menu" data-accordion-btn>
            <div class="menu-title-flex">
              <img
                src="./img/icons/bag.svg"
                alt="bags"
                class="menu-title-img"
                width="20"
                height="20"
              />
  
              <p class="menu-title">Bolsas</p>
            </div>
  
            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>
  
          <ul class="sidebar-submenu-category-list" data-accordion>
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Bolsa de la compra</p>
                <data value="62" class="stock" title="Available Stock">62</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Mochila de gimnasio</p>
                <data value="35" class="stock" title="Available Stock">35</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Cartera</p>
                <data value="80" class="stock" title="Available Stock">80</data>
              </a>
            </li>
  
            <li class="sidebar-submenu-category">
              <a href="#" class="sidebar-submenu-title">
                <p class="product-name">Billetera</p>
                <data value="75" class="stock" title="Available Stock">75</data>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  
    <div class="product-showcase">
      <h3 class="showcase-heading">Lo más vendido</h3>
  
      <div class="showcase-wrapper">
        <div class="showcase-container">
          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/1.jpg"
                alt="baby fabric shoes"
                width="75"
                height="75"
                class="showcase-img"
              />
            </a>
  
            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">zapatos de tela para bebe</h4>
              </a>
  
              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
  
              <div class="price-box">
                <del>$5.00</del>
                <p class="price">$4.00</p>
              </div>
            </div>
          </div>
  
          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/2.jpg"
                alt="men's hoodies t-shirt"
                class="showcase-img"
                width="75"
                height="75"
              />
            </a>
  
            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">camiseta con capucha para hombre</h4>
              </a>
              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half-outline"></ion-icon>
              </div>
  
              <div class="price-box">
                <del>$17.00</del>
                <p class="price">$7.00</p>
              </div>
            </div>
          </div>
  
          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/3.jpg"
                alt="girls t-shirt"
                class="showcase-img"
                width="75"
                height="75"
              />
            </a>
  
            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">camiseta de niñas</h4>
              </a>
              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half-outline"></ion-icon>
              </div>
  
              <div class="price-box">
                <del>$5.00</del>
                <p class="price">$3.00</p>
              </div>
            </div>
          </div>
  
          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/4.jpg"
                alt="woolen hat for men"
                class="showcase-img"
                width="75"
                height="75"
              />
            </a>
  
            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">gorro de lana para hombre</h4>
              </a>
              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
  
              <div class="price-box">
                <del>$15.00</del>
                <p class="price">$12.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="product-box">
  <div class="product-minimal">
    <div class="product-showcase">
      <h2 class="title">Recién llegados</h2>

      <div class="showcase-wrapper has-scrollbar">
        <div class="showcase-container">
          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/clothes-1.jpg"
                alt="relaxed short full sleeve t-shirt"
                width="70"
                class="showcase-img"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">Camiseta de manga corta</h4>
              </a>

              <a href="#" class="showcase-category">Ropa</a>

              <div class="price-box">
                <p class="price">$45.00</p>
                <del>$12.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/clothes-2.jpg"
                alt="girls pink embro design top"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">Top niña rosa diseño Embro</h4>
              </a>

              <a href="#" class="showcase-category">Ropa</a>

              <div class="price-box">
                <p class="price">$61.00</p>
                <del>$9.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/clothes-3.jpg"
                alt="black floral wrap midi skirt"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">Falda midi cruzada floral negra</h4>
              </a>

              <a href="#" class="showcase-category">Ropa</a>

              <div class="price-box">
                <p class="price">$76.00</p>
                <del>$25.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/shirt-1.jpg"
                alt="pure garment dyed cotton shirt"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  Camisa de puro algodón teñido en prenda
                </h4>
              </a>

              <a href="#" class="showcase-category">Moda hombre</a>

              <div class="price-box">
                <p class="price">$68.00</p>
                <del>$31.00</del>
              </div>
            </div>
          </div>
        </div>

        <div class="showcase-container">
          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/jacket-5.jpg"
                alt="men yarn fleece full-zip jacket"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  HOMBRE Chaqueta polar con cremallera completa
                </h4>
              </a>

              <a href="#" class="showcase-category">Ropa de invierno</a>

              <div class="price-box">
                <p class="price">$61.00</p>
                <del>$11.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/jacket-1.jpg"
                alt="mens winter leathers jackets"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  Chaquetas de cuero de invierno para hombre
                </h4>
              </a>

              <a href="#" class="showcase-category">Ropa de invierno</a>

              <div class="price-box">
                <p class="price">$32.00</p>
                <del>$20.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/jacket-3.jpg"
                alt="mens winter leathers jackets"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  Chaquetas de cuero de invierno para hombre
                </h4>
              </a>

              <a href="#" class="showcase-category">Chaquetas</a>

              <div class="price-box">
                <p class="price">$50.00</p>
                <del>$25.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/shorts-1.jpg"
                alt="better basics french terry sweatshorts"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  Shorts de chándal de rizo francés Better Basics
                </h4>
              </a>

              <a href="#" class="showcase-category">Shorts</a>

              <div class="price-box">
                <p class="price">$20.00</p>
                <del>$10.00</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="product-showcase">
      <h2 class="title">Tendencias</h2>

      <div class="showcase-wrapper has-scrollbar">
        <div class="showcase-container">
          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/sports-1.jpg"
                alt="running & trekking shoes - white"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  Zapatillas de running y trekking - Blanco
                </h4>
              </a>

              <a href="#" class="showcase-category">Sports</a>

              <div class="price-box">
                <p class="price">$49.00</p>
                <del>$15.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/sports-2.jpg"
                alt="trekking & running shoes - black"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  Zapatillas de trekking y running - negro
                </h4>
              </a>

              <a href="#" class="showcase-category">Sports</a>

              <div class="price-box">
                <p class="price">$78.00</p>
                <del>$36.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/party-wear-1.jpg"
                alt="womens party wear shoes"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">Zapatos de fiesta para mujer</h4>
              </a>

              <a href="#" class="showcase-category">ropa de fiesta</a>

              <div class="price-box">
                <p class="price">$94.00</p>
                <del>$42.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/sports-3.jpg"
                alt="sports claw women's shoes"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  Zapatos de mujer con garra deportiva
                </h4>
              </a>

              <a href="#" class="showcase-category">Sports</a>

              <div class="price-box">
                <p class="price">$54.00</p>
                <del>$65.00</del>
              </div>
            </div>
          </div>
        </div>

        <div class="showcase-container">
          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/sports-6.jpg"
                alt="air tekking shoes - white"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">Zapatillas Air Trekking - blanco</h4>
              </a>

              <a href="#" class="showcase-category">Sports</a>

              <div class="price-box">
                <p class="price">$52.00</p>
                <del>$55.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/shoe-3.jpg"
                alt="Boot With Suede Detail"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">Botín Detalle Ante</h4>
              </a>

              <a href="#" class="showcase-category">botas</a>

              <div class="price-box">
                <p class="price">$20.00</p>
                <del>$30.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/shoe-1.jpg"
                alt="men's leather formal wear shoes"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  Zapatos de vestir de cuero para hombres
                </h4>
              </a>

              <a href="#" class="showcase-category">formal</a>

              <div class="price-box">
                <p class="price">$56.00</p>
                <del>$78.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/shoe-2.jpg"
                alt="casual men's brown shoes"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  Zapatos casuales de hombre marrones
                </h4>
              </a>

              <a href="#" class="showcase-category">Casual</a>

              <div class="price-box">
                <p class="price">$50.00</p>
                <del>$55.00</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="product-showcase">
      <h2 class="title">Los más valorados</h2>

      <div class="showcase-wrapper has-scrollbar">
        <div class="showcase-container">
          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/watch-3.jpg"
                alt="pocket watch leather pouch"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  Funda de cuero para reloj de bolsillo
                </h4>
              </a>

              <a href="#" class="showcase-category">Reloj</a>

              <div class="price-box">
                <p class="price">$50.00</p>
                <del>$34.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/jewellery-3.jpg"
                alt="silver deer heart necklace"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">Collar Corazón Ciervo Plata</h4>
              </a>

              <a href="#" class="showcase-category">Joyería</a>

              <div class="price-box">
                <p class="price">$84.00</p>
                <del>$30.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/perfume.jpg"
                alt="titan 100 ml womens perfume"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">Perfume Mujer Titán 100 Ml</h4>
              </a>

              <a href="#" class="showcase-category">Perfume</a>

              <div class="price-box">
                <p class="price">$42.00</p>
                <del>$10.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/belt.jpg"
                alt="men's leather reversible belt"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  Cinturón de piel reversible para hombre
                </h4>
              </a>

              <a href="#" class="showcase-category">Cinturón</a>

              <div class="price-box">
                <p class="price">$24.00</p>
                <del>$10.00</del>
              </div>
            </div>
          </div>
        </div>

        <div class="showcase-container">
          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/jewellery-2.jpg"
                alt="platinum zircon classic ring"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  Anillo clásico de platino con circón
                </h4>
              </a>

              <a href="#" class="showcase-category">joyería</a>

              <div class="price-box">
                <p class="price">$62.00</p>
                <del>$65.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/watch-1.jpg"
                alt="smart watche vital plus"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">Reloj inteligente Vital Plus</h4>
              </a>

              <a href="#" class="showcase-category">Reloj</a>

              <div class="price-box">
                <p class="price">$56.00</p>
                <del>$78.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/shampoo.jpg"
                alt="shampoo conditioner packs"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  paquetes de acondicionador de champú
                </h4>
              </a>

              <a href="#" class="showcase-category">productos cosméticos</a>

              <div class="price-box">
                <p class="price">$20.00</p>
                <del>$30.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <a href="#" class="showcase-img-box">
              <img
                src="./img/products/jewellery-1.jpg"
                alt="rose gold peacock earrings"
                class="showcase-img"
                width="70"
              />
            </a>

            <div class="showcase-content">
              <a href="#">
                <h4 class="showcase-title">
                  Pendientes de pavo real de oro rosa
                </h4>
              </a>

              <a href="#" class="showcase-category">joyería</a>

              <div class="price-box">
                <p class="price">$20.00</p>
                <del>$30.00</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="product-featured">
    <h2 class="title">Oferta del día</h2>

    <div class="showcase-wrapper has-scrollbar">
      <div class="showcase-container">
        <div class="showcase">
          <div class="showcase-banner">
            <img
              src="./img/products/shampoo.jpg"
              alt="shampoo, conditioner & facewash packs"
              class="showcase-img"
            />
          </div>

          <div class="showcase-content">
            <div class="showcase-rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            </div>

            <a href="#">
              <h3 class="showcase-title">
                paquetes de champú, acondicionador y lavado de cara
              </h3>
            </a>

            <p class="showcase-desc"></p>

            <div class="price-box">
              <p class="price">$150.00</p>

              <del>$200.00</del>
            </div>

            <button class="add-cart-btn">añadir al carrito</button>

            <div class="showcase-status">
              <div class="wrapper">
                <p>vendido: <b>20</b></p>

                <p>disponible: <b>40</b></p>
              </div>

              <div class="showcase-status-bar"></div>
            </div>

            <div class="countdown-box">
              <p class="countdown-desc">¡Apresúrate! La oferta termina en:</p>

              <div class="countdown">
                <div class="countdown-content">
                  <p class="display-number">360</p>

                  <p class="display-text">Dia</p>
                </div>

                <div class="countdown-content">
                  <p class="display-number">24</p>
                  <p class="display-text">Hora</p>
                </div>

                <div class="countdown-content">
                  <p class="display-number">59</p>
                  <p class="display-text">Minutos</p>
                </div>

                <div class="countdown-content">
                  <p class="display-number">00</p>
                  <p class="display-text">Segundos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="showcase-container">
        <div class="showcase">
          <div class="showcase-banner">
            <img
              src="./img/products/jewellery-1.jpg"
              alt="Rose Gold diamonds Earring"
              class="showcase-img"
            />
          </div>

          <div class="showcase-content">
            <div class="showcase-rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            </div>

            <h3 class="showcase-title">
              <a href="#" class="showcase-title"
                >Pendiente de diamantes de oro rosa</a
              >
            </h3>

            <p class="showcase-desc"></p>

            <div class="price-box">
              <p class="price">$1990.00</p>
              <del>$2000.00</del>
            </div>

            <button class="add-cart-btn">añadir al carrito</button>

            <div class="showcase-status">
              <div class="wrapper">
                <p>vendido: <b>15</b></p>

                <p>disponible: <b>40</b></p>
              </div>

              <div class="showcase-status-bar"></div>
            </div>

            <div class="countdown-box">
              <p class="countdown-desc">¡Apresúrate! La oferta termina en:</p>

              <div class="countdown">
                <div class="countdown-content">
                  <p class="display-number">360</p>
                  <p class="display-text">Dia</p>
                </div>

                <div class="countdown-content">
                  <p class="display-number">24</p>
                  <p class="display-text">Hora</p>
                </div>

                <div class="countdown-content">
                  <p class="display-number">59</p>
                  <p class="display-text">Minutos</p>
                </div>

                <div class="countdown-content">
                  <p class="display-number">00</p>
                  <p class="display-text">Segundos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--
      - PRODUCT GRID
    -->

  <div class="product-main">
    <h2 class="title">nuevos productos</h2>

    <div class="product-grid">
      <div class="showcase">
        <div class="showcase-banner">
          <img
            src="./img/products/jacket-3.jpg"
            alt="Mens Winter Leathers Jackets"
            width="300"
            class="product-img default"
          />
          <img
            src="./img/products/jacket-4.jpg"
            alt="Mens Winter Leathers Jackets"
            width="300"
            class="product-img hover"
          />

          <p class="showcase-badge">15%</p>

          <div class="showcase-actions">
            <button class="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div class="showcase-content">
          <a href="#" class="showcase-category">chaqueta</a>

          <a href="#">
            <h3 class="showcase-title">
              Chaquetas de cuero de invierno para hombre
            </h3>
          </a>

          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <div class="price-box">
            <p class="price">$48.00</p>
            <del>$75.00</del>
          </div>
        </div>
      </div>

      <div class="showcase">
        <div class="showcase-banner">
          <img
            src="./img/products/shirt-1.jpg"
            alt="Pure Garment Dyed Cotton Shirt"
            class="product-img default"
            width="300"
          />
          <img
            src="./img/products/shirt-2.jpg"
            alt="Pure Garment Dyed Cotton Shirt"
            class="product-img hover"
            width="300"
          />

          <p class="showcase-badge angle black">venta</p>

          <div class="showcase-actions">
            <button class="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div class="showcase-content">
          <a href="#" class="showcase-category">camisa</a>

          <h3>
            <a href="#" class="showcase-title"
              >Camisa de puro algodón teñido en prenda</a
            >
          </h3>

          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <div class="price-box">
            <p class="price">$45.00</p>
            <del>$56.00</del>
          </div>
        </div>
      </div>

      <div class="showcase">
        <div class="showcase-banner">
          <img
            src="./img/products/jacket-5.jpg"
            alt="MEN Yarn Fleece Full-Zip Jacket"
            class="product-img default"
            width="300"
          />
          <img
            src="./img/products/jacket-6.jpg"
            alt="MEN Yarn Fleece Full-Zip Jacket"
            class="product-img hover"
            width="300"
          />

          <div class="showcase-actions">
            <button class="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div class="showcase-content">
          <a href="#" class="showcase-category">Chaqueta</a>

          <h3>
            <a href="#" class="showcase-title"
              >HOMBRE Chaqueta polar con cremallera completa</a
            >
          </h3>

          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <div class="price-box">
            <p class="price">$58.00</p>
            <del>$65.00</del>
          </div>
        </div>
      </div>

      <div class="showcase">
        <div class="showcase-banner">
          <img
            src="./img/products/clothes-3.jpg"
            alt="Black Floral Wrap Midi Skirt"
            class="product-img default"
            width="300"
          />
          <img
            src="./img/products/clothes-4.jpg"
            alt="Black Floral Wrap Midi Skirt"
            class="product-img hover"
            width="300"
          />

          <p class="showcase-badge angle pink">new</p>

          <div class="showcase-actions">
            <button class="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div class="showcase-content">
          <a href="#" class="showcase-category">falda</a>

          <h3>
            <a href="#" class="showcase-title"
              >Falda midi cruzada floral negra</a
            >
          </h3>

          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </div>

          <div class="price-box">
            <p class="price">$25.00</p>
            <del>$35.00</del>
          </div>
        </div>
      </div>

      <div class="showcase">
        <div class="showcase-banner">
          <img
            src="./img/products/shoe-2.jpg"
            alt="Casual Men's Brown shoes"
            class="product-img default"
            width="300"
          />
          <img
            src="./img/products/shoe-2_1.jpg"
            alt="Casual Men's Brown shoes"
            class="product-img hover"
            width="300"
          />

          <div class="showcase-actions">
            <button class="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div class="showcase-content">
          <a href="#" class="showcase-category">casual</a>

          <h3>
            <a href="#" class="showcase-title"
              >Zapatos casuales de hombre marrones</a
            >
          </h3>

          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </div>

          <div class="price-box">
            <p class="price">$99.00</p>
            <del>$105.00</del>
          </div>
        </div>
      </div>

      <div class="showcase">
        <div class="showcase-banner">
          <img
            src="./img/products/watch-3.jpg"
            alt="Pocket Watch Leather Pouch"
            class="product-img default"
            width="300"
          />
          <img
            src="./img/products/watch-4.jpg"
            alt="Pocket Watch Leather Pouch"
            class="product-img hover"
            width="300"
          />

          <p class="showcase-badge angle black">venta</p>

          <div class="showcase-actions">
            <button class="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div class="showcase-content">
          <a href="#" class="showcase-category">Reloj</a>

          <h3>
            <a href="#" class="showcase-title"
              >Funda de cuero para reloj de bolsillo</a
            >
          </h3>

          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <div class="price-box">
            <p class="price">$150.00</p>
            <del>$170.00</del>
          </div>
        </div>
      </div>

      <div class="showcase">
        <div class="showcase-banner">
          <img
            src="./img/products/watch-1.jpg"
            alt="Smart watche Vital Plus"
            class="product-img default"
            width="300"
          />
          <img
            src="./img/products/watch-2.jpg"
            alt="Smart watche Vital Plus"
            class="product-img hover"
            width="300"
          />

          <div class="showcase-actions">
            <button class="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div class="showcase-content">
          <a href="#" class="showcase-category">reloj</a>

          <h3>
            <a href="#" class="showcase-title">Reloj inteligente Vital Plus</a>
          </h3>

          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <div class="price-box">
            <p class="price">$100.00</p>
            <del>$120.00</del>
          </div>
        </div>
      </div>

      <div class="showcase">
        <div class="showcase-banner">
          <img
            src="./img/products/party-wear-1.jpg"
            alt="Womens Party Wear Shoes"
            class="product-img default"
            width="300"
          />
          <img
            src="./img/products/party-wear-2.jpg"
            alt="Womens Party Wear Shoes"
            class="product-img hover"
            width="300"
          />

          <p class="showcase-badge angle black">venta</p>

          <div class="showcase-actions">
            <button class="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div class="showcase-content">
          <a href="#" class="showcase-category">ropa de fiesta</a>

          <h3>
            <a href="#" class="showcase-title">Zapatos de fiesta para mujer</a>
          </h3>

          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <div class="price-box">
            <p class="price">$25.00</p>
            <del>$30.00</del>
          </div>
        </div>
      </div>

      <div class="showcase">
        <div class="showcase-banner">
          <img
            src="./img/products/jacket-1.jpg"
            alt="Mens Winter Leathers Jackets"
            class="product-img default"
            width="300"
          />
          <img
            src="./img/products/jacket-2.jpg"
            alt="Mens Winter Leathers Jackets"
            class="product-img hover"
            width="300"
          />

          <div class="showcase-actions">
            <button class="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div class="showcase-content">
          <a href="#" class="showcase-category">chaqueta</a>

          <h3>
            <a href="#" class="showcase-title"
              >Chaquetas de cuero de invierno para hombre</a
            >
          </h3>

          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <div class="price-box">
            <p class="price">$32.00</p>
            <del>$45.00</del>
          </div>
        </div>
      </div>

      <div class="showcase">
        <div class="showcase-banner">
          <img
            src="./img/products/sports-2.jpg"
            alt="Trekking & Running Shoes - black"
            class="product-img default"
            width="300"
          />
          <img
            src="./img/products/sports-4.jpg"
            alt="Trekking & Running Shoes - black"
            class="product-img hover"
            width="300"
          />

          <p class="showcase-badge angle black">venta</p>

          <div class="showcase-actions">
            <button class="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div class="showcase-content">
          <a href="#" class="showcase-category">sports</a>

          <h3>
            <a href="#" class="showcase-title"
              >Zapatillas de trekking y running - negro</a
            >
          </h3>

          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <div class="price-box">
            <p class="price">$58.00</p>
            <del>$64.00</del>
          </div>
        </div>
      </div>

      <div class="showcase">
        <div class="showcase-banner">
          <img
            src="./img/products/shoe-1.jpg"
            alt="Men's Leather Formal Wear shoes"
            class="product-img default"
            width="300"
          />
          <img
            src="./img/products/shoe-1_1.jpg"
            alt="Men's Leather Formal Wear shoes"
            class="product-img hover"
            width="300"
          />

          <div class="showcase-actions">
            <button class="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div class="showcase-content">
          <a href="#" class="showcase-category">formal</a>

          <h3>
            <a href="#" class="showcase-title"
              >Zapatos de vestir de cuero para hombres</a
            >
          </h3>

          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <div class="price-box">
            <p class="price">$50.00</p>
            <del>$65.00</del>
          </div>
        </div>
      </div>

      <div class="showcase">
        <div class="showcase-banner">
          <img
            src="./img/products/shorts-1.jpg"
            alt="Better Basics French Terry Sweatshorts"
            class="product-img default"
            width="300"
          />
          <img
            src="./img/products/shorts-2.jpg"
            alt="Better Basics French Terry Sweatshorts"
            class="product-img hover"
            width="300"
          />

          <p class="showcase-badge angle black">venta</p>

          <div class="showcase-actions">
            <button class="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div class="showcase-content">
          <a href="#" class="showcase-category">shorts</a>

          <h3>
            <a href="#" class="showcase-title"
              >Shorts de chándal de rizo francés Better Basics</a
            >
          </h3>

          <div class="showcase-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <div class="price-box">
            <p class="price">$78.00</p>
            <del>$85.00</del>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
              `;
  
    return $product;
  }


  