
import React from 'react'
import HomeCarousel from '../../components/Carousel/HomeCarousel'
import { Carousel } from 'antd'
import HomeMenu from './HomeMenu'
import MovieList from './MovieList'

export default function Home(props) {
    return (
        <div>
            <HomeCarousel/>
            {/* <HomeMenu/> */}
            <MovieList/>
        </div>
    )
}
