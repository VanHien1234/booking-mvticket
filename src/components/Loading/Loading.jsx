import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Loading.css'

export default function Loading(props) {

    const { isLoading } = useSelector(state => state.LoadingReducer);
    console.log('213213123', isLoading)


    return (
        <Fragment>
        {isLoading ?
            <div className="loading-page" >
                <div className="loading-screen">
                    <div className="loading-animation">
                        <img src="https://imgur.com/FsvEuM2.png" alt="logo" className="logo" />
                        <div className="loading-bar" />
                    </div>
                </div>
            </div>: ''

        }
        </Fragment>
    )
}