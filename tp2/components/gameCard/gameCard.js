let indexes = {}; 

function moverCarrusel(direccion, carouselId) {
  const imagenes = document.querySelector(
    `.carrousel-block__carrousel[data-carousel-id="${carouselId}"] .cards__container`
  );
  const totalImagenes = document.querySelectorAll(
    `.carrousel-block__carrousel[data-carousel-id="${carouselId}"] .card`
  ).length;

  if (!indexes[carouselId]) {
    indexes[carouselId] = 0;
  }

  indexes[carouselId] += direccion;

  if (indexes[carouselId] < 0) {
    indexes[carouselId] = totalImagenes - 1;
  } else if (indexes[carouselId] >= totalImagenes) {
    indexes[carouselId] = 0;
  }

  const desplazamiento = -indexes[carouselId] * 300; 
  imagenes.style.transform = `translateX(${desplazamiento}px)`;
}
