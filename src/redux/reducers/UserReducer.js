import { POST_LOGIN,LOGIN_FAIL,GET_USER_LIST,POST_SIGNUP,SIGNUP_FAIL,GET_USER_PROFILE,SET_THONG_TIN_NGUOI_DUNG } from "redux/types/UserType"
import { USER_LOGIN,TOKEN } from "settingAPI/apiConfig";

let user = {};
if(localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const stateDefault = {
    userLogin: user,
    thongTinNguoiDung: {},
    arrUserList:[],
    arrResponse:[],
    arrResponseDK:[]
    
}

export const UserReducer = (state=stateDefault,action) =>{
    switch(action.type){
        case POST_LOGIN :{
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap))
            localStorage.setItem(TOKEN,thongTinDangNhap.accessToken);
            return {...state,userLogin:thongTinDangNhap}
        }
        case LOGIN_FAIL:{
            state.arrResponse = action.errorthongTinDangNhap
            return{...state}
        }
        case SIGNUP_FAIL:{
            state.arrResponseDK = action.errorthongTinDangKy
            return{...state}
        }

        case GET_USER_PROFILE:{
            state.thongTinNguoiDung =action.arrProfile
            return {...state}
        }
        case SET_THONG_TIN_NGUOI_DUNG :{ 
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return {...state};
        }



        case GET_USER_LIST :{
        state.arrUserList = action.arrUserList
            return {...state}

        }

        default : return{...state}
    }
}