import { POST_LOGIN } from "redux/types/UserType"
import { USER_LOGIN,TOKEN } from "settingAPI/apiConfig";

let user = {};
if(localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const stateDefault = {
    userLogin: user,
    thongTinNguoiDung: {}
     
}

export const UserReducer = (state=stateDefault,action) =>{
    switch(action.type){
        case POST_LOGIN :{
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap))
            localStorage.setItem(TOKEN,thongTinDangNhap.accessToken);
            return {...state,userLogin:thongTinDangNhap}
        }

        default : return{...state}
    }
}