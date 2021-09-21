import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { UserProfileAction } from 'redux/actions/QuanLyUserAction'

export default function UserProfile(props) {
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(UserProfileAction())
    },[])
    const {thongTinNguoiDung}=useSelector(state=>state.UserReducer)
    console.log('userProfile',thongTinNguoiDung)
    return (
        <div>
            awdawd
        </div>
    )
}
