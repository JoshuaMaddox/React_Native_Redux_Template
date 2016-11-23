export default function pokemon(state = {}, action) {
  switch(action.type) {
    case 'FETCH_POKEMON_FULFILLED':
      return action.payload
    default
      return state
  }
}