import React, { Fragment,useEffect } from 'react'
import { Carousel } from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import './imgHomeCarousel.css'
import {getCarouselAct} from 'redux/actions/HomeCarouselAction'

export default function HomeCarousel(props) {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCarouselAct())
    },[])

    const {arrImg} = props

    

    

    const renderImg = () =>{
        return arrImg.map((item,index)=>{
            return <div key={index} style={{width:"1000px"}}>
            
            <img className="imgCarousel" src={item.hinhAnh} alt="" />

        </div>
        })
    }


    

    return (
        <Fragment>
            <Carousel autoplay>
                {renderImg()}
                
            </Carousel>
        </Fragment>
    )
}
