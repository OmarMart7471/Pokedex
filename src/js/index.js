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


let list = []

//funcion  fetch para traer u pokemon por ID
const getPokemon = async (id) => {
    try {
      const response = await fetch(`${url_base}pokemon/${id}`)
      const data = await response.json()
      /*let pokemonObj = {
        "name":data.name,
        "image":data.sprites.front_default,
        "id":data.id,
        "base_experience":data.base_experience,
        "types":data.types,
        "abilities": data.abilities
      }
      list.push(pokemonObj)*/

      let divContainer = document.createElement("div")
          divContainer.setAttribute("class","w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col")
      let aHref = document.createElement("a")
          aHref.setAttribute("href","#")
        divContainer.appendChild(aHref)
      let imgElement = document.createElement("img")
          imgElement.setAttribute("class","hover:grow hover:shadow-lg rounded-lg shadow-inner border-4 border-red-500")
          imgElement.setAttribute("src",data.sprites.front_default)
          imgElement.setAttribute("data-bs-toggle","offcanvas")
          imgElement.setAttribute("href","#offcanvasBottom")
          imgElement.setAttribute("role","button")
          imgElement.setAttribute("aria-controls","offcanvasBottom")
        aHref.appendChild(imgElement)
       let divItemsCenter = document.createElement("div")
           divItemsCenter.setAttribute("class","pt-3 flex items-center")
        aHref.appendChild(divItemsCenter)
        let aElements = document.createElement("a")
          aElements.setAttribute("clas","flex justify-between py-1.5 px-1.5 flex-wrap grow text-black border-4 border-red-500 text-sm shadow-lg gap-3 rounded-lg")
        divItemsCenter.appendChild(aElements)
        let divP = document.createElement("div")
            divP.setAttribute("class","order-first mt-1")
        aElements.appendChild(divP)
        let pELement = document.createElement("p")
            pELement.setAttribute("class","font-semibold uppercase")
            pELement.innerText = data.name
        divP.appendChild(pELement)
        let divSpan = document.createElement("span")
            divSpan.setAttribute("class","order-last mt-1")
        aElements.appendChild(divSpan)
        let spanXp = document.createElement("span")
            spanXp.setAttribute("class","badge text-bg-secondary")
            spanXp.innerText = "XP: "+data.base_experience
        divSpan.appendChild(spanXp)
        let spanID = document.createElement("span")
            spanID.setAttribute("class","badge text-bg-secondary")
            spanID.innerText = "ID: "+data.id
        divSpan.appendChild(spanID)


      document.querySelector("#mainContent").appendChild(divContainer)      

      return data
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


getPokemons(offset, limit);

//funcion para traer los colores por pokemon

const getPokemonColor = async (id) => {
  const response = await fetch(`${url_base}pokemon-color/${id}`)
  const data = await response.json()

  return console.log(data.pokemon_species)
}
getPokemonColor(1);


getPokemons(offset,limit);
//console.log(list)
renderList()
