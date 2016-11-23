import axios from 'axios'

export default fetchPokemon(id) {
  let url = `http://pokeapi.co/api/v2/pokemon/${id}`
  return {
    type: 'FETCH_POKEMON',
    payload: axiso.get(url).then(res => res.data)
  }
}