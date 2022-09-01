const url_base = "https://pokeapi.co/api/v2/"


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