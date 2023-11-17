let pokemonCount = 0;
const loadMoreButton = document.getElementById("load-more-button");
loadMoreButton.addEventListener("click", loadPokemon);
const loadingOverlay = document.getElementById("loading-overlay");
const loadingMessage = document.querySelector(".loading-message");

window.addEventListener("load", loadPokemon);

async function loadPokemon() {
  try {
    loadingOverlay.style.display = "block";

    const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${pokemonCount}`;
    const data = await fetchAndParsePokemonData(apiUrl);

    if (data) {
      const pokemonArray = data.results;
      const app = document.querySelector(".app");

      for (const pokemon of pokemonArray) {
        try {
          const pokemonData = await fetchAndParsePokemonData(pokemon.url);
          createCard(app, pokemonData);
        } catch (error) {
          console.error("Error al cargar los datos del Pokémon:", error);
        }
      }

      pokemonCount += 12;
    }

    loadingOverlay.style.display = "none";
  } catch (error) {
    errorMessage();
  }
}

async function fetchAndParsePokemonData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }
  return response.json();
}


function createCard(app, pokemonData) {
  const card = document.createElement("div");
  card.classList.add("card", "col-12", "col-sm-6", "col-md-4", "col-lg-3");
  const name = document.createElement("h5");
  name.classList.add("card-title");
  name.textContent = pokemonData.name;

  
  const image = document.createElement("img");
  image.classList.add("card-img-top", "img-fluid");
  image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`;
  
  const button = document.createElement("a");
  button.href = "#";
  button.classList.add("btn-ver", "btn", "btn-outline-primary", "rounded-pill");
  button.textContent = "Más";

  button.addEventListener("click", () => {
    showPokemonModal(pokemonData);
  });

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(button);
  app.appendChild(card);
}
