import { GROUP_ID } from "settingAPI/apiConfig";
import {baseService} from "util/callApi";
import { ThongTinDatVe } from "_core/models/ThongTinDatVe";

export class TicketApi extends baseService {

    constructor(){
        super();
    }
    layChiTietPhongVe = (maLichChieu) => { // mã lịch chiếu lấy từ url 
        return this.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    } 
    
    datVe = (thongTinDatVe = new ThongTinDatVe()) => { 
        return this.post(`QuanLyDatVe/DatVe`,thongTinDatVe);
    }
    taoLichChieu =(thongTinLichChieu)=>{
        return this.post(`QuanLyDatVe/TaoLichChieu`,thongTinLichChieu)
    }
    
}
export const QLTicket = new TicketApi()
