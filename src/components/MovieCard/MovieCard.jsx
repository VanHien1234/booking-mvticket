import React from 'react'
/* import './MovieCard.css'
 */
export default function MovieCard(props) {

    const {film } = props;

    return (

        <div className="movie-card text-center" style={{padding:'10px'}} >
                <div className="movie-header" style={{backgroundColor : 'red'}} /* style={{backgroundImage : "url()"}} */>
                    <div className="header-icon-container">
                        <a href="#">
                            <i className="material-icons header-icon"></i>
                        </a>
                    </div>
                </div>{/*movie-header*/}
                <div className="movie-content" style={{backgroundColor : 'red'}}>
                    <div className="movie-content-header">
                        <a href="#">
                            <h3 className="movie-title">Man of Steel</h3>
                        </a>
                        <div className="imax-logo" />
                    </div>
                    <div className="movie-info">
                        <div className="info-section">
                            <label>Date &amp; Time</label>
                            <span>Sun 8 Sept - 10:00PM</span>
                        </div>{/*date,time*/}
                        <div className="info-section">
                            <label>Screen</label>
                            <span>03</span>
                        </div>{/*screen*/}
                        <div className="info-section">
                            <label>Row</label>
                            <span>F</span>
                        </div>{/*row*/}
                        <div className="info-section">
                            <label>Seat</label>
                            <span>21,22</span>
                        </div>{/*seat*/}
                    </div>
                </div>{/*movie-content*/}
            </div>
    )
}
