import { GROUP_ID } from "settingAPI/apiConfig";
import {baseService} from "util/callApi";


export class QuanLyUserApi extends baseService {

    constructor(){
        super();
    }
    dangNhap=(thongTinDangNhap)=>{    //thongTinDangNhap:ID,Password
        return this.post(`QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
    }
    UserList=(tuKhoa='')=>{
        if(tuKhoa.trim()!=''){
            return this.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${tuKhoa}`)
        }
        return this.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`)    
        
    }
    dangKy=(thongTinDangKy) =>{
        return this.post(`QuanLyNguoiDung/DangKy`,thongTinDangKy)
    }
    UserProffile=()=>{
        return this.get(`QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
}

export const UserApi = new QuanLyUserApi();

export const dangNhap  = new QuanLyUserApi().dangNhap;

