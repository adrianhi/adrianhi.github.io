
async function searchPokemonFromInput(event) {
  event.preventDefault(); 

  const searchInput = document.getElementById("search-input");
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm === "") {
    return;
  }

  try {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
      errorMessage("No se encontró ningún Pokémon con ese nombre.");
      return;
    }

    const pokemonData = await response.json();
    showPokemonModal(pokemonData);
    searchInput.value = "";
  } catch (error) {
    console.error("Error al buscar el Pokémon:", error);
    errorMessage("Ocurrió un error al buscar el Pokémon.");
  }
}

const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", searchPokemonFromInput);
