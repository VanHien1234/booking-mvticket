import { dangNhap, UserApi} from 'Api/QuanLyUserApi'
import { POST_LOGIN,LOGIN_FAIL,POST_SIGNUP,SIGNUP_FAIL,GET_USER_LIST,GET_USER_PROFILE } from 'redux/types/UserType'
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
            const {data} = error.response;
            dispatch({
                type : LOGIN_FAIL,
                thongTinDangNhap : data
            })

        }
    }
}
export const DangKyAction =(thongTinDangKy)=>{
    return async (dispatch) =>{
        try {
            const result = await UserApi.dangKy(thongTinDangKy)

            dispatch({
                type: POST_SIGNUP,
                thongTinDangKy : result.data.content
            })
            history.push('/')
        }
        catch(error){
            console.log('error dang ky',error.response.data)
            
            dispatch({
                type:SIGNUP_FAIL,
                thongTinDangKy: error.response.data
            })
        }
    }
}
export const UserProfileAction = ()=>{
    return async(dispatch)=>{
        try{
            const result  = await UserApi.UserProffile()
            dispatch({
                type:GET_USER_PROFILE,
                arrProfile: result.data.content
            })
        }
        catch(error){
            console.log('error user profile',error.response)
        }
    }
}
export const UserListAction = (tuKhoa='')=>{
    return async (dispatch) =>{
        try{
            const result = await UserApi.UserList(tuKhoa)
            
            dispatch({
                type : GET_USER_LIST,
                arrUserList : result.data.content
            })
    
        }
        catch(error){
            console.log('error',error.data)
        }
    }
}