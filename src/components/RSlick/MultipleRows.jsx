import React, { Component } from "react";
import Slider from "react-slick";
import MovieCard from 'components/MovieCard/MovieCard'
import {useSelector,useDispatch} from 'react-redux'
import {fetchPhimDangChieuAct,fetchPhimHotAct,fetchPhimSapChieuAct} from 'redux/actions/MovieListAction'
import { Button, Radio } from 'antd';



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function MultipleRows(props) {

  

  const { arrFilm } = props;

  const dispatch = useDispatch()

  const renderFilm = () => {
    return arrFilm.map((film, index) => {
      return <div key={index}>
        <MovieCard film={film} />
      </div>

    })
  };




  const settings = {
    /* className: "center",
    centerMode: false, */
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    /* slidesPerRow: 1, */
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="container">

      <h2 className="text-center">
        <Button className="mr-5 PhimDangChieu" style={{backgroundColor:'green',borderColor:'white'}} type="primary"  shape="round" size="large" onClick={()=>{dispatch(fetchPhimDangChieuAct())} } >
          Phim Đang Chiếu
        </Button>
        <Button className="ml-3 mr-3 PhimHot" style={{backgroundColor:'red',borderColor:'white'}} type="primary"  shape="round" size="large" onClick={()=>{dispatch(fetchPhimHotAct())} } >
          Phim Hot
        </Button>
        <Button className="ml-5 PhimSapChieu" type="primary" style={{borderColor:'white'}} shape="round" size="large" onClick={()=>{dispatch(fetchPhimSapChieuAct())} }>
          Phim Sắp Chiếu
        </Button>
      </h2>



      <Slider {...settings}>
        {renderFilm()}
      </Slider>
    </div>
  );
}

