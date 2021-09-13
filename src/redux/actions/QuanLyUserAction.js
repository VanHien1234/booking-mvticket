import { dangNhap} from 'Api/QuanLyUserApi'
import { POST_LOGIN } from 'redux/types/UserType'
import { history } from 'App'

export const DangNhapAction =(thongTinDangNhap )=>{
    return async (dispatch) =>{
        try {
            const result = await dangNhap(thongTinDangNhap)
            
            dispatch({
                type : POST_LOGIN,
                thongTinDangNhap : result.data.content
            })
            history.goBack();
        }
        catch(error){
            console.log('error',error.response.data);

        }
    }
}