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
    layThongTinCumRap = (maHeThongRap) => {
        return this.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`);
    }
    layThongtinLichChieuTheoFilm = (maPhim) =>{
        return this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
    
}
export const QLRapApi = new QuanLyRapApi()
export const layThongTinHeThongRap  = new QuanLyRapApi().layThongTinHeThongRap
export const layDanhSachHeThongRap  = new QuanLyRapApi().layDanhSachHeThongRap
export const fetchMovieDetailApi  = new QuanLyRapApi().fetchMovieDetailApi
export const layThongTinCumRap  = new QuanLyRapApi().layThongTinCumRap