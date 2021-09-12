import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {CarouselReducer} from './reducers/CarouselReducer'
import {MovieListReducer} from './reducers/MovieListReducer'
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer'

const rootReducer = combineReducers({
    //state app
    CarouselReducer,
    MovieListReducer,
    QuanLyRapReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk));