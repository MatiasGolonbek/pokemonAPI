function CargarDatos() {
  axios
    .get("https://randomuser.me/api/")
    .then((result) => {
      console.log(result.data.results[0]);
    })
    .catch((error) => {
      console.log(error);
    });
}

function CargarPokemones() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then((result) => {
      const pokemones = result.data.results;

      pokemones.map((pokemon) => {
        const { name, url } = pokemon;

        document.querySelector("#listado").innerHTML += `<li>${name}</li>`;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
