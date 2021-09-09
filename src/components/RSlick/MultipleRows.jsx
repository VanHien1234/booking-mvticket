import React, { Component } from "react";
import Slider from "react-slick";
import MovieCard from 'components/MovieCard/MovieCard'

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

export default class MultipleRows extends Component {
    

    render() {
        
        const {arrFilm} = this.props;

        const renderFilm = ()=>{
            return arrFilm.map((film,index)=>{
                return <div key={index}>
                    <MovieCard />
                </div>  
                
            })
        }



        
        const settings = {
            /* className: "center", */
            centerMode: false,
            infinite: true,
            /* centerPadding: "30px", */
            slidesToShow: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div>
                <h2>Multiple Rows</h2>
                <Slider {...settings}>
                    {renderFilm()}
                    {renderFilm()}
                    {renderFilm()}
                    {renderFilm()}
                    {renderFilm()}
                </Slider>
            </div>
        );
    }
}
