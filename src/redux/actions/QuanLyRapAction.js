import { layDanhSachHeThongRap, fetchMovieDetailApi } from'Api/QuanLyRapApi'
import {LAY_DANH_SACH_HE_THONG_RAP, SET_CHI_TIET_PHIM} from '../types/QuanLyRapType'

export const QuanLyRapAction =()=>{
    
    return async (dispatch) =>{
        try {
            const result = await layDanhSachHeThongRap()
            console.log('thong tin he thong',result.data.content )
            dispatch({
                type : LAY_DANH_SACH_HE_THONG_RAP,
                heThongRapChieu : result.data.content
            })
            

        }catch(errors){
            console.log('error',errors)
        }
    }
    
}


export const layThongTinChiTietPhim = (id) => {
    return async dispatch => {
        try{
            const result = await fetchMovieDetailApi(id);

            console.log('result', result);
            //Lấy được dữ liệu từ api về  => reducer

            dispatch({
                type:SET_CHI_TIET_PHIM,
                filmDetail: result.data.content
            })


        }catch(errors) {
            console.log('error', errors)

        }
    }


}