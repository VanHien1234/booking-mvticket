import { dangNhap, UserApi} from 'Api/QuanLyUserApi'
import { POST_LOGIN,LOGIN_FAIL,POST_SIGNUP,SIGNUP_FAIL,GET_USER_LIST,GET_USER_PROFILE,SET_THONG_TIN_NGUOI_DUNG } from 'redux/types/UserType'
import { history } from 'App'
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const DangNhapAction =(thongTinDangNhap )=>{
    return async (dispatch) =>{
        try {
            dispatch(displayLoadingAction)
            const result = await dangNhap(thongTinDangNhap)
            dispatch({
                type : POST_LOGIN,
                thongTinDangNhap : result.data.content
            })
            history.goBack();
            await dispatch(hideLoadingAction);
        }
        catch(error){
            console.log('error',error.response.data);
            const {data} = error.response;
            dispatch({
                type : LOGIN_FAIL,
                errorthongTinDangNhap : data
            })
            dispatch(hideLoadingAction);
        }
    }
}
export const DangKyAction =(thongTinDangKy)=>{
    return async (dispatch) =>{
        try {
            dispatch(displayLoadingAction)

            const result = await UserApi.dangKy(thongTinDangKy)
            
            dispatch({
                type: POST_SIGNUP,
                thongTinDangKy : result.data.content
            })
            history.push('/login')
            await dispatch(hideLoadingAction);
        }
        catch(error){

            console.log('error dang ky',error.response.data)
            
            dispatch({
                type:SIGNUP_FAIL,
                errorthongTinDangKy: error.response.data
            })
            
            
            dispatch(hideLoadingAction)
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
export const UpdateUserAction =(formData)=>{
    return async (dispatch)=>{
        try{
            const result = await UserApi.UpdateUser(formData)
            console.log('updateUser',result)
            alert('update User Thanh Cong');
            dispatch(UserListAction())
            history.push('/admin')
        }
        catch(error){
            console.log('error update User',error.response.data)
        }
    }
}
export const DeleteUserAction = (taiKhoan)=>{
    return async (dispatch)=>{
        try{
            const result =await UserApi.DeleteUser(taiKhoan)
            alert('xoa User Thanh Cong')
            dispatch(UserListAction())
            history.push('/admin')
        }
        catch(error){
            console.log('error delete user',error.response.data)
        }
    }
}
export const AdminAddNewUserAction = (thongTinDangKy)=>{
    return async (dispatch)=>{
        try{

            const result = await UserApi.AdminAddNewUser(thongTinDangKy)
            console.log('addnew User',result)
            alert('Them User Thanh Cong')
            dispatch(UserListAction())
            history.push('/admin')
        }
        catch(error){
            console.log('adduser addmin fail',error.response.data)
            const {data} = error.response
            alert( `error add new user" ${data.content}" vui long thu lai"`)
            window.location.reload(false);
            
        }
    }
}
export const layThongTinNguoiDungAction = (thongTinDangNhap) => {



    return async (dispatch) => {

        try {
            const result = await UserApi.UserProffile(thongTinDangNhap);


            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });

            }

            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}