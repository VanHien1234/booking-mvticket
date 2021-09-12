import { GROUP_ID } from "settingAPI/apiConfig";
import {baseService} from "util/callApi";


export class QuanLyRapApi extends baseService {

    constructor(){
        super();
    }
    layThongTinHeThongRap =()=>{
        return this.get(`QuanLyRap/LayThongTinHeThongRap`)
    }
    layDanhSachHeThongRap = () => {
        return this.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`)
    }
    
    fetchMovieDetailApi = (movieId) => {
        return this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
    }
}

export const layThongTinHeThongRap  = new QuanLyRapApi().layThongTinHeThongRap
export const layDanhSachHeThongRap  = new QuanLyRapApi().layDanhSachHeThongRap