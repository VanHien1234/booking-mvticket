import { GROUP_ID } from "settingAPI/apiConfig";
import {baseService} from "util/callApi";


export class QuanLyRapApi extends baseService {

    constructor(){
        super();
    }

    layDanhSachHeThongRap = () => {
        return this.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`)
    }

    layThongTinHeThongRap =()=>{
        return this.get(`QuanLyRap/LayThongTinHeThongRap`)
    }

    layThongTinCumRap = (maHeThongRap) => {
        return this.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`);
    }
    
    fetchMovieDetailApi = (movieId) => {
        return this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
    }
}

export const layThongTinHeThongRap  = new QuanLyRapApi().layThongTinHeThongRap
export const layDanhSachHeThongRap  = new QuanLyRapApi().layDanhSachHeThongRap
export const fetchMovieDetailApi  = new QuanLyRapApi().fetchMovieDetailApi
export const layThongTinCumRap  = new QuanLyRapApi().layThongTinCumRap