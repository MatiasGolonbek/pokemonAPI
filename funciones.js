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
         <div class="col-4">
          <div class="colorCard card border-success mb-3 cardPokemon" style="max-width: 20rem;">
            <div class="card-header bg-colorCard headCard  ">${name} </div>
             <div class="card-body text-success card-group">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png ">
          
          
        </div>
        <div class="card-footer bg-transparent border-success"> 
        <div id="${url}"> 
        <button class="btn boton" onclick="DetallePokemon('${url}')">Ver detalle</button>
        </div>
              </div>
            </div>
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
      const { abilities, stats } = result.data;
      console.log(stats);
      document.getElementById(url).innerHTML += `<h4> Habilidades</h4>`;
      abilities.map(item=>{
        document.getElementById(url).innerHTML += `<h6>- ${item.ability.name}</h6>`;
      })
      document.getElementById(url).innerHTML += `<h4> Estadisticas</h4>`;
      stats.map(item=>{
        document.getElementById(url).innerHTML += `<h6>- ${item.stat.name}:  ${item.base_stat}</h6>`;
      })


      
    }); 
}

