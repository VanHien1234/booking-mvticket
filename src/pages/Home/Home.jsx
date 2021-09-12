
import React from 'react'
import HomeCarousel from '../../components/Carousel/HomeCarousel'
import {useSelector,useDispatch} from 'react-redux'
import { Carousel } from 'antd'
import MenuCumRap from './MenuCumRap'
import MovieList from './MovieList'

export default function Home(props) {

    //Truyen arr cho Carousel
    const {arrImg} = useSelector(state=>state.CarouselReducer) ;

    //Truyen arr cho MovieList
    const {arrFilm} = useSelector(state=>state.MovieListReducer);

    //Truyen arr cho MenuCumRap
    const {heThongRapChieu} =useSelector(state=>state.QuanLyRapReducer);

    return (
        <div>
            <HomeCarousel arrImg={arrImg}/>
            
            <MovieList arrFilm ={arrFilm}/>

            <MenuCumRap heThongRapChieu={heThongRapChieu}/>
        </div>
    )
}
