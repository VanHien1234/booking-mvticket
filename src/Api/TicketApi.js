import { GROUP_ID } from "settingAPI/apiConfig";
import {baseService} from "util/callApi";


export class TicketApi extends baseService {

    constructor(){
        super();
    }
    taoLichChieu =(thongTinLichChieu)=>{
        return this.post(`QuanLyDatVe/TaoLichChieu`,thongTinLichChieu)
    }
    
}
export const QLTicket = new TicketApi()
