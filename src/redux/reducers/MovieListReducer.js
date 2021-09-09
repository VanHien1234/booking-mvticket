 
const stateDefault ={
    arrFilm : [{
        "maPhim": 5030,
        "tenPhim": "Godzilla vs. Kong",
        "biDanh": "godzilla-vs-kong",
        "trailer": "https://www.youtube.com/embed/odM92ap8_c0",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/godzilla-vs-kong_gp01.jpg",
        "moTa": "King Kong is transported out of his containment zone after Godzilla resurfaces and creates mayhem. Humans need his help to reach Hollow Earth and find a way to subdue the king of the monsters.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2021-08-29T20:12:07.403",
        "danhGia": 10,
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
    }]
}

export const MovieListReducer = (state = stateDefault,action) =>{
    switch(action.type){

        default : return{... state}
    }
}