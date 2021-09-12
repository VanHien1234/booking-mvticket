import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import MovieCard from 'components/MovieCard/MovieCard'
import MultipleRows from 'components/RSlick/MultipleRows'
import { MovieListAction } from 'redux/actions/MovieListAction'


export default function MovieList(props) {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(MovieListAction())
    },[])


    /* const {arrFilm} = useSelector(state=>state.MovieListReducer) */

    const {arrFilm} = props

    
    return (
        
        <div className ="container mt-5">
            <MultipleRows arrFilm={arrFilm}/>
            {/* {renderFilm()} */}
        </div>

    )
}
