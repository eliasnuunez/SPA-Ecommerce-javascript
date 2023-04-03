export function mainBlog() {
    const $blog = document.createElement("div");
    $blog.classList.add("container");
    $blog.innerHTML = `
    <div class="blog-container has-scrollbar">
    <div class="blog-card">
      <a href="#">
        <img
          src="./img/blog-1.jpg"
          alt="Clothes Retail KPIs 2021 Guide for Clothes Executives"
          width="300"
          class="blog-banner"
        />
      </a>
  
      <div class="blog-content">
        <a href="#" class="blog-category">Moda</a>
  
        <a href="#">
          <h3 class="blog-title">
            Guía de KPI de venta de ropa 2021 para ejecutivos de ropa.
          </h3>
        </a>
  
        <p class="blog-meta">
          Por <cite>Mr Admin</cite> /
          <time datetime="2022-04-06">Apr 06, 2023</time>
        </p>
      </div>
    </div>
  
    <div class="blog-card">
      <a href="#">
        <img
          src="./img/blog-2.jpg"
          alt="Curbside fashion Trends: How to Win the Pickup Battle."
          class="blog-banner"
          width="300"
        />
      </a>
  
      <div class="blog-content">
        <a href="#" class="blog-category">Ropa</a>
  
        <h3>
          <a href="#" class="blog-title"
            >Tendencias de la moda en la acera: cómo ganar la batalla de las
            camionetas.</a
          >
        </h3>
  
        <p class="blog-meta">
          Por <cite>Mr Robin</cite> /
          <time datetime="2022-01-18">Jan 18, 2023</time>
        </p>
      </div>
    </div>
  
    <div class="blog-card">
      <a href="#">
        <img
          src="./img/blog-3.jpg"
          alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
          class="blog-banner"
          width="300"
        />
      </a>
  
      <div class="blog-content">
        <a href="#" class="blog-category">Zapatos</a>
  
        <h3>
          <a href="#" class="blog-title"
            >Proveedores de EBT: Reclame su parte de los ingresos en línea de
            SNAP.</a
          >
        </h3>
  
        <p class="blog-meta">
          Por <cite>Mr Selsa</cite> /
          <time datetime="2022-02-10">Feb 10, 2023</time>
        </p>
      </div>
    </div>
  
    <div class="blog-card">
      <a href="#">
        <img
          src="./img/blog-4.jpg"
          alt="Curbside fashion Trends: How to Win the Pickup Battle."
          class="blog-banner"
          width="300"
        />
      </a>
  
      <div class="blog-content">
        <a href="#" class="blog-category">Electrónica</a>
  
        <h3>
          <a href="#" class="blog-title"
            >Tendencias de la moda en la acera: cómo ganar la batalla de las
            camionetas.</a
          >
        </h3>
  
        <p class="blog-meta">
          Por <cite>Mr Pawar</cite> /
          <time datetime="2022-03-15">Mar 15, 2023</time>
        </p>
      </div>
    </div>
  </div>
  
              `;
  
    return $blog;
  }