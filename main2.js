const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'


function convertPokemonToLi(pokemon) {
    return `
    
    
    `
}


const pokemonList = document.getElementById('pokemonList')



fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemon) => {

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
    })
    .catch((error) => console.error(error))