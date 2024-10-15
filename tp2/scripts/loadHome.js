document.addEventListener("DOMContentLoaded", () => {
  const loaderContainer = document.getElementById("loaderContainer");
  const loadingText = document.getElementById("loadingText");
  const hiddenElements = document.querySelectorAll(".hidden");

  let progress = 0;
  const interval = setInterval(() => {
    progress += 1;
    loadingText.textContent = `Loading... ${progress}%`;

 
    if (progress >= 100) {
      clearInterval(interval);
      loaderContainer.style.display = "none";

      // Show hidden page elements
      hiddenElements.forEach((element) => element.classList.remove("hidden"));

      // Load page components
      loadComponent("navbarContainer", "navbar");
      loadComponent("footerContainer", "footer");
      loadComponent("mainCarrouselContainer", "mainCarousel");
      loadComponent("gameCard", "gameCard");
    }
  }, 0); 
});
