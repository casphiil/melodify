import {combineReducers, compose, legacy_createStore as createStore} from 'react-redux'
import {playerReducer} from './player/rplayer.reducer.js'

const rootReducer = combineReducers({
  playerModule: playerReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(playerReducer, composeEnhancers())

//* For debugging
window.gStore = store
