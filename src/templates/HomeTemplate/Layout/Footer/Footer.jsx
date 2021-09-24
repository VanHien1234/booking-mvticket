import React, { Fragment } from 'react'
import './Footer.scss'
export default function Footer(props) {
    return (
        <Fragment>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <h3>Theaters</h3>
                            
                            <ul className="list-unstyled socila-list mt-5">
                                <li><img style={{height:50,width:50}} src="http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png" alt /></li>
                                <li><img style={{height:50,width:50}} src="http://movieapi.cyberlearn.vn/hinhanh/cgv.png" alt /></li>
                                <li><img style={{height:50,width:50}} src="http://movieapi.cyberlearn.vn/hinhanh/cinestar.png" alt /></li>
                                <li><img style={{height:50,width:50}} src="http://movieapi.cyberlearn.vn/hinhanh/galaxy-cinema.png" alt /></li>
                                <li><img style={{height:50,width:50}} src="http://movieapi.cyberlearn.vn/hinhanh/lotte-cinema.png" alt /></li>
                                <li><img style={{height:50,width:50}} src="http://movieapi.cyberlearn.vn/hinhanh/megags.png" alt /></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <h3>Latest News</h3>
                            <div className="media pt-3">
                                <a href="#" className="pull-left">
                                    <img style={{height:64,width:64}} src="https://t3.ftcdn.net/jpg/03/07/93/88/360_F_307938835_NChzYE26DIyfzHdAdW722BTaOnjaHSqV.jpg" alt className="media-object" />
                                </a>
                                <div className="ml-3 media-body">
                                    <h4 style={{color:'white'}} className="media-heading">Movie</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="media">
                                <a href="#" className="pull-left">
                                    <img style={{height:64,width:64}} src="https://t3.ftcdn.net/jpg/03/07/93/88/360_F_307938835_NChzYE26DIyfzHdAdW722BTaOnjaHSqV.jpg" alt className="media-object" />
                                </a>
                                <div className="ml-3 media-body">
                                    <h4 style={{color:'white'}} className=" media-heading">Ticket</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-4">
                            <h3>Our Work</h3>
                            <img style={{width:150,height:100}} className="img-thumbnail" src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="" />
                            <img style={{width:150,height:100}} className="img-thumbnail" src="https://pbs.twimg.com/media/EV-qDo8XQAAQ_He.png" alt />
                            <img style={{width:150,height:100}} className="img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgK2YaK6BK8A-c18yHjc5tKUlfr70EKQTS2w&usqp=CAU" alt />
                            <img style={{width:150,height:100}} className="img-thumbnail" src="https://media.istockphoto.com/vectors/cinema-ticket-isolated-on-white-background-vector-id921532564?k=20&m=921532564&s=612x612&w=0&h=x-rkXTqgvCgPR44rtdfYfsVOtnRGy5EwhGzNINpfQCk=" alt />
                        </div>
                    </div>
                </div>
                <div className="copyright text-center">
                    Copyright © 2021 <span>@Your  Name</span>
                </div>
            </footer>


        </Fragment>
    )
}
