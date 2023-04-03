export function mainTestimonial() {
  const $mainTestimonial = document.createElement("div");
  $mainTestimonial.innerHTML = `
    <h2 class="title">testimonial</h2>

    <div class="testimonial-card">
      <img
        src="./img/profile.jpg"
        alt="Elias Nuñez"
        class="testimonial-banner"
        width="80"
        height="80"
      />
    
      <p class="testimonial-name">Elias Nuñez</p>
    
      <p class="testimonial-title">Software Developer • Marketing Digital</p>
    
      <img
        src="./img/icons/quotes.svg"
        alt="quotation"
        class="quotation-img"
        width="26"
      />
    
      <p class="testimonial-desc">
      Soy Elias, un apasionado desarrollador de software con 5 años de experiencia en el sector.
      </p>
    </div>
              `;

  return $mainTestimonial;
}
