import React, { Fragment } from 'react'
import './MovieCard.css'
import { Button, Radio } from 'antd';
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import { Link } from 'react-router-dom';



export default function MovieCard(props) {
    
    const { film } = props;

    /* console.log('propshinhanh', film) */

     
    
    return (

        <div className="movie-card text-center" style={{ padding: '10px' }} >
            <div className="movie-header" style={{ backgroundImage: `url(${film.hinhAnh})` }} >
                <div className="header-icon-container">
                    <a href={film.trailer} data-fancybox={film.maPhim}>
                        <i className="fas fa-play header-icon"></i>
                    </a>
                </div>
            </div>{/*movie-header*/}
            <div className="movie-content" /* style={{backgroundColor : 'red'}} */>
                <div className="movie-content-header">
                    <Link to={`/detail/${film.maPhim}`}>
                        <h3 className="movie-title">{`${film.tenPhim}`.length > 17 ? <span>{film.tenPhim.slice(0, 17)} ...</span> : <span>{film.tenPhim}</span>}</h3>
                    </Link>
                    <div className="row mt-2 " >
                        <Link to={`/checkout/${film.maPhim}`} className="col-5 mx-auto">
                        <Button  style={{backgroundColor:"#ffcc00",border:'none'}}  type="primary" shape="round"  size='medium'>Đặt vé</Button>
                        </Link>
                        
                        {/* <div className="col-2"></div> */}
                        <Link to={`/detail/${film.maPhim}`} className="col-5 mx-auto">
                        <Button   type="primary" shape="round"  size='medium'>Chi Tiet</Button>
                        </Link>
                        
                    </div>

                </div>
                <div className="movie-info">
                    <div className="info-section">
                        <label>Date &amp; Time</label>
                        <span>{film.ngayKhoiChieu}</span>
                    </div>{/*date,time*/}
                    
                    <div className="info-section text-center">
                        <label >Rate</label>
                        <span> {film.danhGia}<i className="fas fa-star " style={{color:'#ffcc00',fontSize:'17px'}}> </i></span>
                        
                    </div>{/*row*/}
                    
                </div>
            </div>{/*movie-content*/}
        </div>
    )
}
