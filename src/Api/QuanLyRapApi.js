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