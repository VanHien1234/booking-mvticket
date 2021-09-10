import {fecthAllMovieApi} from 'Api/MovieApi'
import { FETCH_ALL_MOVIE, FETCH_PHIM_DANG_CHIEU, FETCH_PHIM_SAP_CHIEU,FETCH_PHIM_HOT } from 'redux/types/MovieListType'


export const MovieListAction =()=>{
    
    return async (dispatch) =>{
        try {
            const result = await fecthAllMovieApi()
            console.log('result111111',result.data.content )
            dispatch({
                type : FETCH_ALL_MOVIE,
                arrFilm : result.data.content
            })
            

        }catch(errors){
            console.log('error',errors)
        }
    }
    
}

export const fetchPhimDangChieuAct =()=>({
    type: FETCH_PHIM_DANG_CHIEU
    
})
export const fetchPhimSapChieuAct =() =>({
    type : FETCH_PHIM_SAP_CHIEU
})
export const fetchPhimHotAct= ()=>({
    type : FETCH_PHIM_HOT
})

