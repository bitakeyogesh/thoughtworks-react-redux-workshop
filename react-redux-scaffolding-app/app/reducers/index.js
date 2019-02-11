import {combineReducers} from 'redux-loop'
import {routerReducer} from 'react-router-redux'

import sampleReducer from './sample.js'
import movieReducer from'./movie.js'

const rootReducer = combineReducers({
	sample: sampleReducer,
	movie:movieReducer,
	router: routerReducer
})

export default rootReducer
