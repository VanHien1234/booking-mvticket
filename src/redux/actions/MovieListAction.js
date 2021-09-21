import {fecthAllMovieApi,deleteMovieApi, QLMovieApi} from 'Api/MovieApi'
import { FETCH_ALL_MOVIE, FETCH_PHIM_DANG_CHIEU, FETCH_PHIM_SAP_CHIEU,FETCH_PHIM_HOT, GET_MOVIE_DETAIL } from 'redux/types/MovieListType'
import { history } from 'App'

export const MovieListAction =(tenPhim='')=>{
    
    return async (dispatch) =>{
        try {
            const result = await fecthAllMovieApi(tenPhim)
            /* console.log('all movie',result.data.content ) */
            dispatch({
                type : FETCH_ALL_MOVIE,
                arrFilm : result.data.content
            })
            

        }catch(errors){
            console.log('error',errors)
        }
    }
    
}
export const deleteMovieAction = (maPhim) => {
    

    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await deleteMovieApi(maPhim);
            console.log('result',result.data.content);
            alert('Xoá phim thành công !');
            //Sau khi xoá load lại danh sách phim mới;
            dispatch(MovieListAction())


            
        }catch (errors) {
            console.log('errors',errors.response?.data)
        }
    }
}
export const addNewMovieAction = (formData) =>{
    return async (dispatch) =>{
        try{
            const result = await QLMovieApi.addNewMovieApi(formData)
            console.log('addnewmovie',result)
            alert('Them phim thành công !');
            dispatch()
        }
        catch(error){
            console.log('error-addnew')
        }
    }
    
}
export const updateMovieAction =(formData)=>{
    return async(dispatch)=>{
        try{
            const result = await QLMovieApi.updateMovieApi(formData)
            console.log('updataMovie',result)
            alert('update Film Thanh Cong');
            dispatch(MovieListAction());
            history.push('/admin/films')
        }
        catch(error){
            console.log('update Film error',error.response)
        }
    }
}
export const getMovideDetailAction = (maPhim) =>{
    return async (dispatch) =>{
        try{
            const result = await QLMovieApi.movieDetailApi(maPhim)
            console.log('getmoviedetail',result)
            dispatch({
                type : GET_MOVIE_DETAIL,
                arrMovieDetail : result.data.content
            }
            )
        }
        catch(error){
            console.log('error movie detail',error.response.data)
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

