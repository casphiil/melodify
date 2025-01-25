export const SET_URL = 'SET_URL'

export const INCREASE_COUNTER = 'INCREASE_COUNTER'

const initialState = {
  url: null,
}

export function playerReducer(state = initialState, cmd) {
  switch (cmd.type) {
    case SET_URL:
      return {
        ...state,
        robots: cmd.url,
      }

    default:
      return state
  }
}
