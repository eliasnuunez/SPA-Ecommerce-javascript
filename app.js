import { topNav } from "./component/header/top.js";
import { mainNav } from "./component/header/main.js";
import { menuNav } from "./component/header/menu.js";
import { mobileNavigation } from "./component/header/navigation.js";
import { sidebarMenu } from "./component/header/sidebarMenu.js";

import { mainBanner } from "./component/main/banner.js";
import { mainCategory } from "./component/main/category.js";
import { mainProduct } from "./component/main/product.js";
import { mainTestimonial } from "./component/main/testimonial.js";
import { mainCTA } from "./component/main/cta.js";
import { mainService } from "./component/main/service.js";
import { mainBlog } from "./component/main/blog.js";

import { footerCategoryys } from "./component/footer/category.js";
import { footerNavv } from "./component/footer/nav.js";
import { footerBottomm } from "./component/footer/bottom.js";

export function app() {
  const $app = document.createElement("div");
  $app.innerHTML = `
  <div id="top"></div>
  <div id="main"></div>
  <div id="menu"></div>
  <div id="navigation"></div>
  <div id="sidebarMenu"></div>

  <div id="mainBanner"></div>
  <div class="category"></div>
  <div class="product-container"></div>

<div>
  <div class="container">
  <div class="testimonials-box">
   <div class="testimonial"></div>
   <div class="cta-container"></div>
   <div class="service"></div>
</div>
</div>
</div>
<div class="blog"></div>

<footer>
<div class="footer-category"></div>
<div class="footer-nav"></div>
<div class="footer-bottom"></div>
</footer>

 
  `;

  return $app;
}

window.addEventListener("DOMContentLoaded", () => {
  const top = document.getElementById("top");
  top.innerHTML = null;
  top.appendChild(topNav());

  const main = document.getElementById("main");
  main.innerHTML = null;
  main.appendChild(mainNav());

  const menu = document.getElementById("menu");
  menu.innerHTML = null;
  menu.appendChild(menuNav());

  const navigation = document.getElementById("navigation");
  navigation.innerHTML = null;
  navigation.appendChild(mobileNavigation());

  const navMenu = document.getElementById("sidebarMenu");
  navMenu.innerHTML = null;
  navMenu.appendChild(sidebarMenu());

  const banner = document.getElementById("mainBanner");
  banner.innerHTML = null;
  banner.appendChild(mainBanner());

  const category = document.querySelector(".category");
  category.innerHTML = null;
  category.appendChild(mainCategory());

  const product = document.querySelector(".product-container");
  product.innerHTML = null;
  product.appendChild(mainProduct());

  const testimonial = document.querySelector(".testimonial");
  testimonial.innerHTML = null;
  testimonial.appendChild(mainTestimonial());

  const cta = document.querySelector(".cta-container");
  cta.innerHTML = null;
  cta.appendChild(mainCTA());

  const service = document.querySelector(".service");
  service.innerHTML = null;
  service.appendChild(mainService());

  const blog = document.querySelector(".blog");
  blog.innerHTML = null;
  blog.appendChild(mainBlog());

  const footerCategory = document.querySelector(".footer-category");
  footerCategory.innerHTML = null;
  footerCategory.appendChild(footerCategoryys());

  const footerNav = document.querySelector(".footer-nav");
  footerNav.innerHTML = null;
  footerNav.appendChild(footerNavv());

  const footerBottom = document.querySelector(".footer-bottom");
  footerBottom.innerHTML = null;
  footerBottom.appendChild(footerBottomm());
});
