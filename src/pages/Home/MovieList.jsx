import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import MovieCard from 'components/MovieCard/MovieCard'
import MultipleRows from 'components/RSlick/MultipleRows'


export default function MovieList(props) {

    const {arrFilm} = useSelector(state=>state.MovieListReducer)


    console.log('arrfilm ', arrFilm)

    const renderFilm = ()=>{
        return arrFilm.map((film,index)=>{
            return <div key={index}>
                <MovieCard film={film} />
            </div>
          
            
        })
    }

    return (
        
        <div className ="container">
            <MultipleRows arrFilm={arrFilm}/>
            {/* {renderFilm()} */}
        </div>

    )
}
