const url_base = "https://pokeapi.co/api/v2/"

let limit = 5;
let offset = 1;

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

      let generalAbilitieslist = []
      let abilitieslist = []
      generalAbilitieslist = data.abilities
      generalAbilitieslist.forEach(element => {
            abilitieslist.push(element.ability.name)
      });

      let divContainer = document.createElement("div")
          divContainer.setAttribute("class","w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col")
      let aHref = document.createElement("a")
          aHref.setAttribute("href","#")
        divContainer.appendChild(aHref)
      let imgElement = document.createElement("img")
          imgElement.setAttribute("class","hover:grow hover:shadow-lg rounded-lg shadow-inner border-4 border-red-500")
          imgElement.setAttribute("src",data.sprites.front_default)
          imgElement.setAttribute("data-bs-toggle","offcanvas")
          imgElement.setAttribute("href","#offcanvasBottom-"+data.id)
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

      let divOffcanvasBottom = document.createElement("div")
          divOffcanvasBottom.setAttribute("class","offcanvas offcanvas-bottom")
          divOffcanvasBottom.setAttribute("tabindex","-1")
          divOffcanvasBottom.setAttribute("id","offcanvasBottom-"+data.id)
          divOffcanvasBottom.setAttribute("aria-labelledby","offcanvasBottomLabel")

      let divOffcanvasHeader = document.createElement("div")
          divOffcanvasHeader.setAttribute("class","offcanvas-header")
            let h5OffcanvasTitle = document.createElement("h5")
            h5OffcanvasTitle.setAttribute("class","offcanvas-title font-sans text-2xl font-black uppercase")
            h5OffcanvasTitle.setAttribute("id","ooffcanvasBottomLabel")
            h5OffcanvasTitle.innerText = data.name
            let buttonElement = document.createElement("button")
            buttonElement.setAttribute("type","button")
            buttonElement.setAttribute("class","btn-close")
            buttonElement.setAttribute("data-bs-dismiss","offcanvas")
            buttonElement.setAttribute("aria-label","Close")
        divOffcanvasHeader.appendChild(h5OffcanvasTitle)
        divOffcanvasHeader.appendChild(buttonElement)

        let divOffcanvasBody = document.createElement("div")
            divOffcanvasBody.setAttribute("class","offcanvas-body small flex flex-grow flex-row mx-3 justify-center")

                let divOffcanvasBodyPhoto = document.createElement("div")
                    divOffcanvasBodyPhoto.setAttribute("class","basis-40 flex justify-center p-1 object-cover")
                        let imgOffCanvasBody = document.createElement("img")
                            imgOffCanvasBody.setAttribute("src",data.sprites.front_default)
                            imgOffCanvasBody.setAttribute("class","d-block rounded-lg border-2 border-red-500")
                    divOffcanvasBodyPhoto.appendChild(imgOffCanvasBody)
                    
                let divOffcanvasBodyContentDefault  = document.createElement("div")
                    divOffcanvasBodyContentDefault.setAttribute("class","basis-64 flex flex-wrap")

                        let spanIDElement = document.createElement("span")
                            spanIDElement.setAttribute("class","d-flex mt-1 list-group-item list-group-item-action justify-content-between align-items-center text-sm text-left px-4 py-2 border-2 border-rose-500 rounded-pill w-32 h-10")
                                let pIDElement = document.createElement("p")
                                    pIDElement.innerText = "ID:"
                            spanIDElement.appendChild(pIDElement)
                                let spanBadgeID = document.createElement("span")
                                    spanBadgeID.setAttribute("class","badge rounded-pill text-bg-danger")
                                    spanBadgeID.innerText = data.id
                            spanIDElement.appendChild(spanBadgeID)
                    divOffcanvasBodyContentDefault.appendChild(spanIDElement)

                        let spanBaseXP = document.createElement("span")
                                spanBaseXP.setAttribute("class","d-flex mt-1 list-group-item list-group-item-action justify-content-between align-items-center text-sm text-left px-4 py-2 border-2 border-rose-500 rounded-pill w-32 h-10")
                                    let pBaseXPElement = document.createElement("p")
                                        pBaseXPElement.innerText = "Base xp:"
                                spanBaseXP.appendChild(pBaseXPElement)
                                    let spanBadgeXP = document.createElement("span")
                                        spanBadgeXP.setAttribute("class","badge rounded-pill text-bg-danger")
                                        spanBadgeXP.innerText = data.base_experience
                                spanBaseXP.appendChild(spanBadgeXP)
                        divOffcanvasBodyContentDefault.appendChild(spanBaseXP)

                        let spanPeso = document.createElement("span")
                                spanPeso.setAttribute("class","d-flex mt-1 list-group-item list-group-item-action justify-content-between align-items-center text-sm text-left px-4 py-2 border-2 border-rose-500 rounded-pill w-32 h-10")
                                    let pPesoElement = document.createElement("p")
                                        pPesoElement.innerText = "Peso:"
                                spanPeso.appendChild(pPesoElement)
                                    let spanBadgePeso = document.createElement("span")
                                        spanBadgePeso.setAttribute("class","badge rounded-pill text-bg-danger")
                                        spanBadgePeso.innerText = data.weight
                                spanPeso.appendChild(spanBadgePeso)
                        divOffcanvasBodyContentDefault.appendChild(spanPeso)

                        let spanOrder = document.createElement("span")
                                spanOrder.setAttribute("class","d-flex mt-1 list-group-item list-group-item-action justify-content-between align-items-center text-sm text-left px-4 py-2 border-2 border-rose-500 rounded-pill w-32 h-10")
                                    let pOrderElement = document.createElement("p")
                                        pOrderElement.innerText = "Order:"
                                spanOrder.appendChild(pOrderElement)
                                    let spanBadgeOrder = document.createElement("span")
                                        spanBadgeOrder.setAttribute("class","badge rounded-pill text-bg-danger")
                                        spanBadgeOrder.innerText = data.order
                                spanOrder.appendChild(spanBadgeOrder)
                        divOffcanvasBodyContentDefault.appendChild(spanOrder)
                        
        let divOffcanvasBodyContentAbilities  = document.createElement("div")
        divOffcanvasBodyContentAbilities.setAttribute("class","basis-64 mx-3 flex flex-wrap")

            abilitieslist.forEach(ability => {
                
                let spanAbility = document.createElement("span")
                    spanAbility.setAttribute("class","mt-1 list-group-item list-group-item-action justify-content-between align-items-center text-sm px-4 py-2 bg-gradient-to-r from-yellow-400 to-green-500 border-2 border-yellow-500 rounded-pill w-32 h-10")
                    let pHability = document.createElement("p")
                        pHability.setAttribute("class","text-center text-xs")
                        pHability.innerText = ability
                    spanAbility.appendChild(pHability)
            divOffcanvasBodyContentAbilities.appendChild(spanAbility)
            
            });

        divOffcanvasBody.appendChild(divOffcanvasBodyPhoto)
        divOffcanvasBody.appendChild(divOffcanvasBodyContentDefault)
        divOffcanvasBody.appendChild(divOffcanvasBodyContentAbilities)

      divOffcanvasBottom.appendChild(divOffcanvasHeader)
      divOffcanvasBottom.appendChild(divOffcanvasBody)
    
       document.querySelector("#mainContent").appendChild(divOffcanvasBottom)

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



getPokemons(offset,limit);
//console.log(list)
renderList()

