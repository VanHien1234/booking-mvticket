import { GROUP_ID } from "settingAPI/apiConfig";
import {baseService} from "util/callApi";


export class QuanLyUserApi extends baseService {

    constructor(){
        super();
    }
    dangNhap=(thongTinDangNhap)=>{    //thongTinDangNhap:ID,Password
        return this.post(`QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
    }
    layDanhSachHeThongRap = () => {
        return this.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`)
    }
    
    fetchMovieDetailApi = (movieId) => {
        return this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
    }
}

export const dangNhap  = new QuanLyUserApi().dangNhap
