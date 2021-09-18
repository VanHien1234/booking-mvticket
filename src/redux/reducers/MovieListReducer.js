import { FETCH_ALL_MOVIE, FETCH_PHIM_DANG_CHIEU, FETCH_PHIM_HOT,FETCH_PHIM_SAP_CHIEU } from "redux/types/MovieListType"
import { SET_CHI_TIET_PHIM } from '../types/QuanLyRapType'
 
const stateDefault ={
    arrFilm : [{
        /* "maPhim": 5030,
        "tenPhim": "Godzilla vs. Kong",
        "biDanh": "godzilla-vs-kong",
        "trailer": "https://www.youtube.com/embed/odM92ap8_c0",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/godzilla-vs-kong_gp01.jpg",
        "moTa": "King Kong is transported out of his containment zone after Godzilla resurfaces and creates mayhem. Humans need his help to reach Hollow Earth and find a way to subdue the king of the monsters.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2021-08-29T20:12:07.403",
        "danhGia": 10,
        "hot": true,
        "dangChieu": false,
        "sapChieu": true */
    }],
    arrFilmBackup:[],
    filmDetail:{},

    thongTinPhim:{}
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

        case SET_CHI_TIET_PHIM:{
            state.filmDetail = action.filmDetail;
            return {...state};
        }
        default : return{... state}
    }
}