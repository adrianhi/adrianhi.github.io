function showPokemonModal(pokemonData) {

  const modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.id = "pokemonModal";
  modal.tabIndex = -1;
  modal.setAttribute("aria-labelledby", "exampleModalLabel");
  modal.setAttribute("aria-hidden", "true");

  const typeColorMap = {
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dark: "#705848",
    dragon: "#7038F8",
    steel: "#B8B8D0",
    fairy: "#F0B6BC",
  };

  const typeColor = typeColorMap[pokemonData.types[0].type.name] || "black";

  createModal(pokemonData, typeColor, modal);
}

function createModal(pokemonData, typeColor, modal) {
  modal.innerHTML = `
  <div class="modal-dialog modal-dialog-centered modal-lg ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${pokemonData.name}</h5>
        <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
     <div class="modal-body">
<div class="row">
  <div class="col-md-6">
    <div class="pokemon-img">

                    <!-- Codigo en revision No obtiene la imagen "> -->
    <!-- <img id="modal-img" src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" "> -->
                    <!-- Codigo en revision No obtiene la imagen "> -->
    
      <img id="modal-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png ">
    </div>
  </div>
  <div class="col-md-6">
    <div class="stats">
      <p class="tipo" style="background-color: ${typeColor};"> ${pokemonData.types[0].type.name}</p>

      <!-------- Estadísticas del Pokémon ------------>
      <div class="table-responsive  ">
      <table class="table table-striped table-hover table-bordered caption-top">
      <caption>Estadísticas</caption>
        <thead>
          <tr>
            <th>HP</th>
            <th>Ataque</th>
            <th>Defensa</th>
            <th>Velocidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${pokemonData.stats[0].base_stat}</td>
            <td>${pokemonData.stats[1].base_stat}</td>
            <td>${pokemonData.stats[2].base_stat}</td>
            <td>${pokemonData.stats[5].base_stat}</td>
            <!-- Agrega más valores de estadísticas aquí si es necesario -->
          </tr>
        </tbody>
      </table>
    </div>
    <p class="info"><strong>Peso:</strong>  ${pokemonData.weight}Kg</p>
    <p class="info"><strong>Altura:</strong>  ${pokemonData.height}</p>
    <p class="info"><strong>habilidad:</strong>  ${pokemonData.abilities[0].ability.name}</p>
  </div>
</div>
</div>
</div>


`;

  document.body.appendChild(modal);
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
}
