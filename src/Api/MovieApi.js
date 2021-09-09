import { GROUP_ID } from "settingAPI/apiConfig";
import {baseService} from "util/callApi";




export class MovieApi extends baseService {

        constructor(){
            super();
        }
        fecthAllMovieBanner =()=>{
            return this.get(`QuanLyPhim/LayDanhSachBanner`)
        }
        fecthAllMovieApi=()=> {
            return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
        }
        fetchMovieDetailApi = (movieId) => {
            return this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
        }
}

export const fecthAllMovieBanner = new MovieApi().fecthAllMovieBanner
export const fecthAllMovieApi = new MovieApi().fecthAllMovieApi

/* 
const MovieApi = {
   

    fecthAllMovieBanner(){
        return this.get(`QuanLyPhim/LayDanhSachBanner`);
        
    },

    fecthAllMovieApi() {
        return baseService.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
    },

    fetchMovieDetailApi(movieId) {
        return baseService.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
    },
    
}
console.log('apilink',MovieApi.fecthAllMovieBanner())



export default MovieApi; */