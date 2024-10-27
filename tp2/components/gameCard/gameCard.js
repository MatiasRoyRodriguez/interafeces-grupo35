const gamesData = [
  {
    category: "Trending Games",
    icon: "./assets/images/categoryIcons/icon-fire.png",
    games: [
      {
        title: "Four in a Row",
        price: "Free",
        image: "./assets/images/gamesCards/trending/4inrow.png",
        type: "play",
      },
      {
        title: "Half-Life",
        price: "$29.99",
        image: "./assets/images/gamesCards/trending/half-lift.png",
        type: "buy",
      },
      {
        title: "Assasin’s Creed",
        price: "Free",
        image: "./assets/images/gamesCards/trending/assasin-creed.png",
        type: "play",
      },
      {
        title: "Grand Theft Auto V: Premium Edition",
        price: "$139.99",
        image: "./assets/images/gamesCards/trending/gtaV.png",
        type: "buy",
      },
      {
        title: "Dead Island 2 Gold Edition",
        price: "$50.00",
        image: "./assets/images/gamesCards/trending/dead-island2.png",
        type: "buy",
      },
      {
        title: "God Of War II",
        price: "$50.00",
        image: "./assets/images/gamesCards/trending/godofwar2.png",
        type: "buy",
      },
      {
        title: "Black Myth Wukong",
        price: "$34.99",
        image: "./assets/images/gamesCards/trending/wukong.png",
        type: "buy",
      },
    ],
  },
  {
    category: "Adventure Games",
    icon: "./assets/images/categoryIcons/Icon-adventure.png",
    games: [
      {
        title: "Baldur's Gate 3",
        price: "$39.99",
        image: "./assets/images/gamesCards/adventure/baldur-gate3.png",
        type: "buy",
      },
      {
        title: "Marvel’s Spider-Man Remastered",
        price: "$39.99",
        image: "./assets/images/gamesCards/adventure/spider-man.png",
        type: "buy",
      },
      {
        title: "Final Fantasy XVI",
        price: "Free",
        image: "./assets/images/gamesCards/adventure/ffxvi.png",
        type: "play",
      },
      {
        title: "Monster Hunter: World",
        price: "$150.00",
        image: "./assets/images/gamesCards/adventure/monster-hunter.png",
        type: "buy",
      },
      {
        title: "Rust",
        price: "$50.00",
        image: "./assets/images/gamesCards/adventure/rust.png",
        type: "buy",
      },
      {
        title: "Don't Starve Together",
        price: "$50.00",
        image: "./assets/images/gamesCards/adventure/dont-starve-together.png",
        type: "buy",
      },
      {
        title: "Red Dead Redemption 2",
        price: "$34.99",
        image: "./assets/images/gamesCards/adventure/read-dead-redemption2.png",
        type: "buy",
      },
    ],
  },
  {
    category: "Action Games",
    icon: "./assets/images/categoryIcons/Icon-swords.png",
    games: [
      {
        title: "Grand Theft Auto VI",
        price: "$39.99",
        image: "./assets/images/gamesCards/action/gtavi.jpg",
        type: "buy",
      },
      {
        title: "Assassin's Creed Shadows",
        price: "$29.99",
        image: "./assets/images/gamesCards/action/assassins-creed-shadows.jpg",
        type: "buy",
      },
      {
        title: "Assasin’s Creed",
        price: "Free",
        image: "./assets/images/gamesCards/action/assasing-creed.png",
        type: "play",
      },
      {
        title: "Grand Theft Auto V: Premium Edition",
        price: "$29.99",
        image: "./assets/images/gamesCards/action/gtaV.png",
        type: "buy",
      },
      {
        title: "Call of Duty: Black Ops 6",
        price: "$29.99",
        image: "./assets/images/gamesCards/action/call-of-duty.jpg",
        type: "buy",
      },
      {
        title: "S.T.A.L.K.E.R. 2: Heart of Chernobyl",
        price: "$29.99",
        image: "./assets/images/gamesCards/action/stalker2.jpg",
        type: "buy",
      },
      {
        title: "Indiana Jones Great Circle",
        price: "$29.99",
        image: "./assets/images/gamesCards/action/indianajones.jpg",
        type: "buy",
      },
    ],
  },
  {
    category: "Strategy Games",
    icon: "./assets/images/categoryIcons/Icon-strategy.png",
    games: [
      {
        title: "The Precinct",
        price: "$39.99",
        image: "./assets/images/gamesCards/strategy/the-precinct-dxnzu.png",
        type: "buy",
      },
      {
        title: "Satisfactory",
        price: "$29.99",
        image: "./assets/images/gamesCards/strategy/satisfactory.jpg",
        type: "buy",
      },
      {
        title: "Commandos",
        price: "Free",
        image:
          "./assets/images/gamesCards/strategy/commandos-origins-4f9pf.jpg",
        type: "play",
      },
      {
        title: "Memoriapolis",
        price: "$139.99",
        image: "./assets/images/gamesCards/strategy/memoriapolis.jpeg",
        type: "buy",
      },
      {
        title: "Tropico 4",
        price: "$50.00",
        image: "./assets/images/gamesCards/strategy/tropico4.jpg",
        type: "buy",
      },
      {
        title: "Minecraft",
        price: "$50.00",
        image: "./assets/images/gamesCards/strategy/minecraft.jpg",
        type: "buy",
      },
      {
        title: "Frostpunk 2",
        price: "$34.99",
        image: "./assets/images/gamesCards/strategy/frospunk2.jpg",
        type: "buy",
      },
    ],
  },
];

const createCategory = (title, iconUrl) => {
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("game-category");

  const categoryTitle = document.createElement("h2");
  categoryTitle.classList.add("category-title");
  categoryTitle.innerHTML = `
          <img src="${iconUrl}" alt="Icono de categoría" class="category-icon">
          ${title}
      `;

  categoryDiv.appendChild(categoryTitle);
  return categoryDiv;
};

const addDragFunctionality = (innerCardsContainer, totalGames) => {
  let currentIndex = 0;
  let isDragging = false;
  let startX;
  let currentX;

  const updateCarousel = () => {
    const offset = -currentIndex * (300 + 30); // 300: width of card, 30: margin
    innerCardsContainer.style.transform = `translateX(${offset}px)`;
    innerCardsContainer.style.transition = "transform 0.3s ease"; // Reactiva la transición al soltar el mouse
  };

  innerCardsContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
    currentX = startX;
    innerCardsContainer.style.transition = "none"; // Desactiva la transición durante el arrastre
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      const deltaX = currentX - startX;
      if (deltaX > 50) {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : 0; // No volver al último si ya está en el primero
      } else if (deltaX < -50) {
        currentIndex =
          currentIndex < totalGames - 1 ? currentIndex + 1 : totalGames - 1; // No ir al primero si ya está en el último
      }
      updateCarousel();
    }
    isDragging = false;
  });

  innerCardsContainer.addEventListener("mousemove", (e) => {
    if (isDragging) {
      currentX = e.pageX;
      const deltaX = currentX - startX;
      innerCardsContainer.style.transform = `translateX(${
        deltaX - currentIndex * (300 + 30)
      }px)`;
    }
  });

  // Asegura que el arrastre se detenga si el usuario sale de la ventana del navegador
  document.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      updateCarousel();
    }
  });
};

const createGameCards = (games) => {
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("gameCardCarousel");
  const innerCardsContainer = document.createElement("div");
  innerCardsContainer.id = "cards-container";
  innerCardsContainer.classList.add("cardsContainer");

  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (game.type === "play") {
      card.classList.add("cardFree");
    }
    card.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div class="game-card__body">
            <h3>${game.title}</h3>
            <p class="price">${game.price}</p>
            </div>
            <div class="buttons">
                <button class="btn btn--wishlist btn--small btn--small-padding">
                 <img src="./assets/images/icons/plus-circle.svg" alt="Plus circle">
                Add to Wishlist
                </button>
                <button class="btn btn--main btn--small gameRedirect">
                    ${
                      game.type === "buy"
                        ? `
                        Buy Now
                        <img src="./assets/images/icons/icon-carr.png" alt="Icon Cart">
                        `
                        : `
                        Play Free
                        <img src="./assets/images/icons/play.svg" alt="Icon Cart">
                        `
                    }
                </button>
            </div>
            ${
              game.type === "play"
                ? `    <div class="ribbon">Free</div>`
                : ""
            }
        `;

    innerCardsContainer.appendChild(card);
  });

  cardsContainer.appendChild(innerCardsContainer);
  addDragFunctionality(innerCardsContainer);
  return cardsContainer;
};

const gameCategoriesContainer = document.getElementById(
  "game-categories-container"
);

gamesData.forEach((categoryData) => {
  const categoryTitle = createCategory(
    categoryData.category,
    categoryData.icon
  );
  const gameCards = createGameCards(categoryData.games);

  gameCategoriesContainer.appendChild(categoryTitle);
  gameCategoriesContainer.appendChild(gameCards);
});

document.querySelectorAll(".gameRedirect").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "./game.html";
  });
});
