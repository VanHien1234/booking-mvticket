import { GROUP_ID } from "settingAPI/apiConfig";
import {baseService} from "util/callApi";




export class MovieApi extends baseService {

        constructor(){
            super();
        }
        fecthAllMovieBanner =()=>{
            return this.get(`QuanLyPhim/LayDanhSachBanner`)
        }
        fecthAllMovieApi=(tenPhim='')=> {
            if(tenPhim.trim()!=''){
                return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenPhim}`);
            }
            return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
        }
        
        deleteMovieApi = (maPhim) => {
            return this.delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
        }
        addNewMovieApi = (formData) =>{
            return this.post(`QuanLyPhim/ThemPhimUploadHinh`,formData)
        }
        movieDetailApi = (maPhim ) =>{
            return this.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
        } 
        updateMovieApi = (formData)=>{
            return this.post(`QuanLyPhim/CapNhatPhimUpload`,formData)
        }
}

/* export const MovieApi = new MovieApi() */
export const fecthAllMovieBanner = new MovieApi().fecthAllMovieBanner
export const fecthAllMovieApi = new MovieApi().fecthAllMovieApi
export const deleteMovieApi = new MovieApi().deleteMovieApi
export const QLMovieApi = new MovieApi()
