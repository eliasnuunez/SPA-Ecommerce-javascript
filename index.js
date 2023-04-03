import { app } from "./app.js";

document.addEventListener("DOMContentLoaded", root);

export function root() {
  const root = document.getElementById("root");

  root.innerHTML = null;
  root.appendChild(app());
}

window.addEventListener("DOMContentLoaded", () => {
  import("./js/script.js");
});
