
import { LAY_DANH_SACH_HE_THONG_RAP} from '../types/QuanLyRapType'

const stateDefault = {
    heThongRapChieu : [{
       /*  "maHeThongRap": "CGV",
        "tenHeThongRap": "cgv",
        "biDanh": "cgv",
        "logo": "http://movieapi.cyberlearn.vn/hinhanh/cgv.png" */
    }
    ]
}


export const QuanLyRapReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case LAY_DANH_SACH_HE_THONG_RAP:{
            state.heThongRapChieu = action.heThongRapChieu
            return {...state}
        } 


        default: return { ...state }
    }
}