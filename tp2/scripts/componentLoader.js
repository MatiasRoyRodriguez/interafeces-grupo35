"use strict";

const loadComponent = (containerId, componentPath) => {
  const baseComponentPath = "components";
  const baseComponentUrl =
    baseComponentPath + "/" + componentPath + "/" + componentPath;

  // HTML component
  fetch(`${baseComponentUrl}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(containerId).innerHTML = html;

      //CSS component
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `${baseComponentUrl}.css`;
      document.head.appendChild(link);

      // JS  component
      const script = document.createElement("script");
      script.src = `${baseComponentUrl}.js`;
      document.body.appendChild(script);
    })
    .catch((err) =>
      console.error(`Error load component ${componentPath}:`, err)
    );
};

const loadPage = (containerId, componentPath) => {
  const baseComponentPath = "pages";
  const baseComponentUrl = baseComponentPath + "/" + componentPath;

  // page HTML
  fetch(`${baseComponentUrl}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(containerId).innerHTML = html;

      //  page CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `${baseComponentUrl}.css`;
      document.head.appendChild(link);

      //  page JS
      const script = document.createElement("script");
      script.src = `${baseComponentUrl}.js`;
      document.body.appendChild(script);
    })
    .catch((err) => console.error(`Error load page ${componentPath}:`, err));
};
