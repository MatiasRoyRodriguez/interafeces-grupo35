'use strict';

const loadComponent = (containerId, componentPath) => {
  const baseComponentPath = "components";
  const baseComponentUrl =
    baseComponentPath + "/" + componentPath + "/" + componentPath;

  // Carga el HTML del componente
  fetch(`${baseComponentUrl}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(containerId).innerHTML = html;

      // Carga el CSS del componente
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `${baseComponentUrl}.css`;
      document.head.appendChild(link);

      // Carga el JS del componente
      const script = document.createElement("script");
      script.src = `${baseComponentUrl}.js`;
      document.body.appendChild(script);
    })
    .catch((err) =>
      console.error(`Error al cargar el componente ${componentPath}:`, err)
    );
};

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbarContainer", "navbar");
  loadComponent("footerContainer", "footer");
});
