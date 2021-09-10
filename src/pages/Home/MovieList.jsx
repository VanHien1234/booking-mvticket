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


    const {arrFilm} = useSelector(state=>state.MovieListReducer)



    console.log('arrfilm ', arrFilm)
 /*
    const renderFilm = ()=>{
        return arrFilm.map((film,index)=>{
            return <div key={index}>
                <MovieCard film={film} />
            </div>
          
            
        })
    } */

    return (
        
        <div className ="container mt-5">
            <MultipleRows arrFilm={arrFilm}/>
            {/* {renderFilm()} */}
        </div>

    )
}
