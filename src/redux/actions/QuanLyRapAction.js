import { layThongTinHeThongRap,layDanhSachHeThongRap} from'Api/QuanLyRapApi'
import {LAY_DANH_SACH_HE_THONG_RAP} from '../types/QuanLyRapType'

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