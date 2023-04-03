export function mainService() {
    const $service = document.createElement("div");
    $service.innerHTML = `
    <h2 class="title">Nuestros servicios</h2>

    <div class="service-container">
      <a href="#" class="service-item">
        <div class="service-icon">
          <ion-icon name="boat-outline"></ion-icon>
        </div>
    
        <div class="service-content">
          <h3 class="service-title">Envíos a todo el mundo</h3>
          <p class="service-desc">Para pedidos superiores a $100</p>
        </div>
      </a>
    
      <a href="#" class="service-item">
        <div class="service-icon">
          <ion-icon name="rocket-outline"></ion-icon>
        </div>
    
        <div class="service-content">
          <h3 class="service-title">Entrega al día siguiente</h3>
          <p class="service-desc">Solo pedidos de Argentina</p>
        </div>
      </a>
    
      <a href="#" class="service-item">
        <div class="service-icon">
          <ion-icon name="call-outline"></ion-icon>
        </div>
    
        <div class="service-content">
          <h3 class="service-title">Mejor soporte en línea</h3>
          <p class="service-desc">Hora: 8AM - 11PM</p>
        </div>
      </a>
    
      <a href="#" class="service-item">
        <div class="service-icon">
          <ion-icon name="arrow-undo-outline"></ion-icon>
        </div>
    
        <div class="service-content">
          <h3 class="service-title">Política de devoluciones</h3>
          <p class="service-desc">Devolución fácil y gratuita</p>
        </div>
      </a>
    
      <a href="#" class="service-item">
        <div class="service-icon">
          <ion-icon name="ticket-outline"></ion-icon>
        </div>
    
        <div class="service-content">
          <h3 class="service-title">30% de devolución de dinero</h3>
          <p class="service-desc">Para pedidos superiores a $100</p>
        </div>
      </a>
    </div>
              `;
  
    return $service;
  }
  