import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserProfileAction } from 'redux/actions/QuanLyUserAction'
import { history } from "../../App";
import { Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from "settingAPI/apiConfig";
import { Button,Table } from 'antd';
import './UserProfile.css'

export default function UserProfile() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(UserProfileAction())
  }, [])
  const { thongTinNguoiDung } = useSelector(state => state.UserReducer)
  console.log('userProfile', thongTinNguoiDung)

  if (!localStorage.getItem(USER_LOGIN)) {
    alert('Bạn không có quyền truy cập vào trang này !')
    return <Redirect to='/' />
  }
  const {thongTinDatVe}= thongTinNguoiDung
  console.log('object',thongTinDatVe)

  const columns = [
    {
        title: 'Ma Ve',
        dataIndex: 'maVe',
        width: '15%'
    },
    {
      title: 'Ngay Dat',
      dataIndex: 'ngayDat',
      width: '15%'
  },
  {
    title: 'Ten Phim',
    dataIndex: 'tenPhim',
    width: '15%'
},
{
  title: 'Gia Ve',
  dataIndex: 'giaVe',
  width: '15%'
},
  ]
  const data = thongTinDatVe;
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

  return (

    <div className="profilePage">
      <div className="container pt-5">
        <div className="row profileOverview ">
          <div  className="col-md-4  my-auto">
            <div className="avatar ">
            <i className="fas fa-user-astronaut"></i> <br />
            <div className="row pt-3 px-2">
            <Button className="col-5" type="primary" shape="round">Edit Profile</Button>
            <div className="col-1"></div>
            <Button className="col-5" type="primary" shape="round">Change Password</Button></div> <br />
            
            </div>
          </div>
          
          <div className="col-md-7 mr-2">
            <div className="profile-content pt-2">
              <h3>OVERVIEW - {thongTinNguoiDung.taiKhoan}</h3>
              <div className="container">
                <b>Họ Tên</b> : <b className="ml-4">{thongTinNguoiDung.hoTen}</b> <br />
                <b>User ID</b> : <b className="ml-4">{thongTinNguoiDung.taiKhoan}</b> <br />
                <b>User email</b> : <b className="ml-4">{thongTinNguoiDung.email}</b> <br />
                <b>User Phone</b> : <b className="ml-4">{thongTinNguoiDung.soDT}</b> <br />

              </div>
            </div>
          </div>

          
        </div>
        
      </div>

      <div className="container lsdatve mt-3">
        <h3>Thông Tin Đặt Vé</h3>
        <Table columns={columns} dataSource={data} onChange={onChange} />


      </div>
    </div>


  )
}
