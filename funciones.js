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

      pokemones.map((pokemon, index) => {
        const { name, url } = pokemon;

        document.querySelector("#listado").innerHTML += `
        
        <div class="card border-success mb-3" style="max-width: 20rem;">
        <div class="card-header bg-transparent border-success">${name} ${index+1}</div>
        <div class="card-body text-success card-group">
          <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index+1}.svg">
          
        </div>
        <div class="card-footer bg-transparent border-success">   
        <button onclick="DetallePokemon('${url}')">Ver detalle</button>
        <ulid="detalle"></ul>
          </div>
      </div>
      `;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
function DetallePokemon(url) {
  axios
  .get(url)
  .then((result) => {
    console.log(result.data);
    Habilidades = result.data.abilities;
    Estadisticas = result.data.stats;
    document.querySelector("#detalle").innerHTML += `${Habilidades}
    ${Estadisticas}`


    
  });

}

