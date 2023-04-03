export function mainCategory() {
  const $category = document.createElement("div");
  $category.classList.add("container");
  $category.innerHTML = `

  <div class="category-item-container has-scrollbar">
  <div class="category-item">
    <div class="category-img-box">
      <img
        src="./img/icons/dress.svg"
        alt="dress & frock"
        width="30"
      />
    </div>

    <div class="category-content-box">
      <div class="category-content-flex">
        <h3 class="category-item-title">Vestido y bata</h3>

        <p class="category-item-amount">(53)</p>
      </div>

      <a href="#" class="category-btn">Mostrar todo</a>
    </div>
  </div>

  <div class="category-item">
    <div class="category-img-box">
      <img src="./img/icons/coat.svg" alt="winter wear" width="30" />
    </div>

    <div class="category-content-box">
      <div class="category-content-flex">
        <h3 class="category-item-title">Ropa de invierno</h3>

        <p class="category-item-amount">(58)</p>
      </div>

      <a href="#" class="category-btn">Mostrar todo</a>
    </div>
  </div>

  <div class="category-item">
    <div class="category-img-box">
      <img
        src="./img/icons/glasses.svg"
        alt="glasses & lens"
        width="30"
      />
    </div>

    <div class="category-content-box">
      <div class="category-content-flex">
        <h3 class="category-item-title">Gafas y lentes</h3>

        <p class="category-item-amount">(68)</p>
      </div>

      <a href="#" class="category-btn">Mostrar todo</a>
    </div>
  </div>

  <div class="category-item">
    <div class="category-img-box">
      <img
        src="./img/icons/shorts.svg"
        alt="shorts & jeans"
        width="30"
      />
    </div>

    <div class="category-content-box">
      <div class="category-content-flex">
        <h3 class="category-item-title">Shorts & jeans</h3>

        <p class="category-item-amount">(84)</p>
      </div>

      <a href="#" class="category-btn">Mostrar todo</a>
    </div>
  </div>

  <div class="category-item">
    <div class="category-img-box">
      <img src="./img/icons/tee.svg" alt="t-shirts" width="30" />
    </div>

    <div class="category-content-box">
      <div class="category-content-flex">
        <h3 class="category-item-title">camisetas</h3>

        <p class="category-item-amount">(35)</p>
      </div>

      <a href="#" class="category-btn">Mostrar todo</a>
    </div>
  </div>

  <div class="category-item">
    <div class="category-img-box">
      <img src="./img/icons/jacket.svg" alt="jacket" width="30" />
    </div>

    <div class="category-content-box">
      <div class="category-content-flex">
        <h3 class="category-item-title">Chaqueta</h3>

        <p class="category-item-amount">(16)</p>
      </div>

      <a href="#" class="category-btn">Mostrar todo</a>
    </div>
  </div>

  <div class="category-item">
    <div class="category-img-box">
      <img src="./img/icons/watch.svg" alt="watch" width="30" />
    </div>

    <div class="category-content-box">
      <div class="category-content-flex">
        <h3 class="category-item-title">Reloj</h3>

        <p class="category-item-amount">(27)</p>
      </div>

      <a href="#" class="category-btn">Mostrar todo</a>
    </div>
  </div>

  <div class="category-item">
    <div class="category-img-box">
      <img src="./img/icons/hat.svg" alt="hat & caps" width="30" />
    </div>

    <div class="category-content-box">
      <div class="category-content-flex">
        <h3 class="category-item-title">Sombrero y gorras</h3>

        <p class="category-item-amount">(39)</p>
      </div>

      <a href="#" class="category-btn">Mostrar todo</a>
    </div>
  </div>
</div>

  
            `;

  return $category;
}
