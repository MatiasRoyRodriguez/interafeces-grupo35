const slidesData = [
  {
    image: "./assets/images/gamesBanners/spacemarine-banner.png",
    title: "Warhammer 40,000: Space Marine 2",
    description:
      "Embody the superhuman skill and brutality of a Space Marine. Unleash deadly abilities and weaponry to obliterate the relentless Tyranid swarms.",
    price: "$34.99",
    type: "pay",
  },
  {
    image: "./assets/images/gamesBanners/starcraft-banner.png",
    title: "Starcraft II",
    description:
      "StarCraft II is a real-time strategy game set in the distant future. Command one of three unique races—the Terran, Zerg, or Protoss—each with its own campaign. Engage in epic battles, strategic gameplay, and competitive multiplayer action in a richly detailed sci-fi universe.",
    price: "$29.99",
    type: "free",
  },
  {
    image: "./assets/images/gamesBanners/cyberpunk-banner.png",
    title: "Cyberpunk 2077",
    description:
      "Cyberpunk 2077 is an open-world RPG set in the dystopian Night City. Play as V, a customizable mercenary with cybernetic enhancements, as you explore a richly detailed future metropolis. Engage in deep narrative choices, intense combat, and hacking in a vibrant, high-tech world.",
    price: "$59.99",
    type: "pay",
  },
  {
    image: "./assets/images/gamesBanners/nomanssky-banner.png",
    title: "No Man's Sky",
    description:
      "No Man's Sky is an exploration game set in a vast, procedurally generated universe. Discover unique planets, gather resources, and uncover galactic mysteries.",
    price: "$49.99",
    type: "pay",
  },
  {
    image: "./assets/images/gamesBanners/horizonzero-banner.png",
    title: "Horizon Zero Dawn",
    description:
      "Horizon Zero Dawn is an action RPG set in a post-apocalyptic world. Play as Aloy, a hunter in a land overrun by robotic creatures, and explore a stunning open world while uncovering ancient secrets.",
    price: "$39.99",
    type: "pay",
  },
];

const getCarrouselButton = (type = "pay") => {
  switch (type) {
    case "pay":
      return `
           <button class="btn btn--main btn--big">
          Buy now
          <img src="./assets/images/icons/icon-carr.png" alt="Icon Cart">
        </button>`;
    case "free":
      return `
        <button class="btn btn--main btn--big">
          Play Free
          <img src="./assets/images/icons/play.svg" alt="Icon Play">
        </button>`;
  }
};

const carouselSlidesContainer = document.querySelector(".carousel-slides");

slidesData.forEach((slide, index) => {
  const slideElement = document.createElement("div");
  slideElement.classList.add("carousel-slide");
  slideElement.setAttribute("data-slide", index + 1);

  slideElement.innerHTML = `
    <img src="${slide.image}" alt="Slide ${index + 1}" />
    <div class="overlay"></div>
    <div class="carousel-caption">
      <h2>${slide.title}</h2>
      <p>${slide.description}</p>
      <span>${slide.price}</span>
      <div class="buttons__container">
       ${getCarrouselButton(slide.type)}
               <button class="btn btn--wishlist btn--big">
                  <img src="./assets/images/icons/plus-circle.svg" alt="Plus circle">
        Add to Wishlist
        </button>
      </div>
    </div>
  `;

  carouselSlidesContainer.appendChild(slideElement);
});

const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;



const showSlide = (index) => {
  // Handle wrapping of slides
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  // Move the slides container
  const offset = -currentSlide * 100;
  document.querySelector(
    ".carousel-slides"
  ).style.transform = `translateX(${offset}%)`;

  // Update active slide class
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === currentSlide) {
      slide.classList.add("active");
    }
  });

  // Update active dot
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
};

showSlide(currentSlide);

document.querySelector(".next").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

let slideInterval = setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

document.querySelector(".carousel").addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});
document.querySelector(".carousel").addEventListener("mouseleave", () => {
  slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
});
