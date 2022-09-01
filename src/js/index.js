const url_base = "https://pokeapi.co/api/v2/"
const previous = document.querySelector("#previous");
const next = document.querySelector("#next")

let limit = 100;
let offset = 1;
// funcion de botones para traer de 9 en 9
previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 9;
    getPokemons(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 9;
  getPokemons(offset, limit);
});

//funcion  fetch para traer u pokemon por ID
const getPokemon = async (id) => {
    try {
      const response = await fetch(`${url_base}pokemon/${id}`)
      const data = await response.json()
      return console.log(data)
    } catch (error) {
      console.error(error)
      return error  
  }

}

function getPokemons(offset, limit) {
  for (let i = offset; i <= offset + limit; i++) {
    getPokemon(i);
  }
}

getPokemons(offset,limit);

//funcio para traer tipo de api

const getTypes = async()=>{
  const types = await fetch(`${url_base}/type`)
}