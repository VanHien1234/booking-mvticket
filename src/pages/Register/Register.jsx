import React from 'react'
import './Register.css'
import { useFormik } from 'formik';
import {useDispatch,useSelector } from 'react-redux'
import { DangKyAction } from 'redux/actions/QuanLyUserAction';
import { Link } from 'react-router-dom';

export default function Register() {
    
    const {arrResponse} = useSelector(state=>state.UserReducer) 
    console.log('arrResponse',arrResponse) 
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            taiKhoan:'',
            matKhau:'',
            email:'',
            soDt:'',
            hoTen:'',
            maNhom: 'GP01'

        },
        onSubmit: values =>{
            dispatch(DangKyAction(values))
            console.log('values',values);

        }
    })



    return (
        <div className="signupPage row">
            <div className="col-sm-4 col-lg-3  signupForm ml-auto " >
                <form onSubmit={formik.handleSubmit}
                className="auth-container text-center" >
                    {/*  <a href="/"><img className="mb-4" src="https://saasbase-auth-advanced.herokuapp.com/images/saasbase.png" alt width={72} height={72} /></a> */}
                    <h1 className="h3 mb-3 font-weight-normal">Sign up </h1>

                    <div className="text-left">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">ID User</label>
                            <input name="taiKhoan" type="text"  className="form-control" placeholder="ID USER" required onChange={formik.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Full Name</label>
                            <input name="hoTen" type="text"  className="form-control" placeholder="Musk" required onChange={formik.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Phone Number</label>
                            <input name="soDt" type="text" aria-label="Last name" className="form-control" placeholder="123456" required onChange={formik.handleChange} />
                        </div>
                        
                        <div className="form-group">
                            <label name="email" htmlFor="exampleInputEmail1">Email Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="email"  placeholder="elon.musk@gmail.com" required onChange={formik.handleChange}/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name="matKhau" className="form-control" id="exampleInputPassword1" placeholder="elonmusk79!" required onChange={formik.handleChange} />
                        </div>
                    </div>
                    <p className="error-text mt-3">{arrResponse.content}  Vui Lòng Thử Lại</p>
                    <button className="btn btn-primary btn-block mt-3" type="submit">Sign Up</button>
                    
                    <div className="mt-3 mb-3 text-center" style={{color:'white'}}>
                        Have Account?<Link to="/login">Login Here</Link>
                    </div>
                </form>
            </div>
        </div>



    )
}



