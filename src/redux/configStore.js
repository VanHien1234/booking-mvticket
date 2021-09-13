import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {CarouselReducer} from './reducers/CarouselReducer'
import {MovieListReducer} from './reducers/MovieListReducer'
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer'
import {UserReducer} from './reducers/UserReducer'

const rootReducer = combineReducers({
    //state app
    CarouselReducer,
    MovieListReducer,
    QuanLyRapReducer,
    UserReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk));