

import { FETCH_ALL_MOVIE, FETCH_PHIM_DANG_CHIEU,FETCH_PHIM_HOT,FETCH_PHIM_SAP_CHIEU, GET_MOVIE_DETAIL,FETCH_CHI_TIET_PHIM } from "redux/types/MovieListType"


 
const stateDefault ={
    arrFilm : [{
        
    }],
    arrFilmBackup:[],

    filmDetail:{},

    arrMovieDetailAdmin:[{
        
    }],


    
}

export const MovieListReducer = (state = stateDefault,action) =>{
    switch(action.type){
        case FETCH_ALL_MOVIE :{
            state.arrFilm= action.arrFilm
            state.arrFilmBackup= state.arrFilm
            return {... state}
        }
        case FETCH_PHIM_DANG_CHIEU:{
            state.arrFilm=state.arrFilmBackup.filter(film=>film.dangChieu=== true);
            console.log('phim dang chieu',state.arrFilm)
            return{...state}
        }
        case FETCH_PHIM_SAP_CHIEU:{
            state.arrFilm=state.arrFilmBackup.filter(film=>film.sapChieu=== true&&film.dangChieu===false);
            console.log('phim sap chieu',state.arrFilm)
            return{...state}
        }
        case FETCH_PHIM_HOT:{
            state.arrFilm=state.arrFilmBackup.filter(film=>film.hot===true);
            
            return{...state}
        }


        case FETCH_CHI_TIET_PHIM:{
            state.filmDetail = action.filmDetail;
            return {...state};}

        case GET_MOVIE_DETAIL:{
            state.arrMovieDetailAdmin = action.arrMovieDetail
            return{...state}

        }
        default : return{... state}
    }
}