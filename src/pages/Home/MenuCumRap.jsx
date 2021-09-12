import React, { useState, useEffect, Fragment } from 'react'
import { Tabs, Radio, Space,Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { QuanLyRapAction } from 'redux/actions/QuanLyRapAction'
import { NavLink } from 'react-router-dom';
import moment from 'moment';


const { TabPane } = Tabs;

export default function MenuCumRap(Props) {

    //setting cua antd

    const [state, setState] = useState({
        tabPosition: 'left',
    })

    /* const changeTabPosition = e => {
        setState({ tabPosition: e.target.value });
    }; */

    const { tabPosition } = state;


    // goi props,dispatch

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(QuanLyRapAction())
    }, [])

    const { heThongRapChieu } = Props;
    console.log('hethongrapchieu', heThongRapChieu)

    const renderMenu = () => {

        return heThongRapChieu?.map((heThongRapChieu, index) => {
            console.log('test?', heThongRapChieu)
            return <TabPane tab={<img src={heThongRapChieu.logo} style={{ border: '50%', width: '50px', height: '50px', objectFit: 'fill' }} />} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {heThongRapChieu.lstCumRap?.map((cumRap, index) => {
                        return <TabPane tab={
                            <div style={{ width: '300px', display: 'flex' }} >
                                <img src={heThongRapChieu.logo} style={{ border: '50%', width: '30px', height: '30px', objectFit: 'fill' }} /> <br />
                                <div className="text-left ml-3">
                                    {cumRap.tenCumRap}
                                </div>
                            </div>
                        } key={index}>
                            {/*Load phim tương ứng */}
                            {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className="my-5" >
                                        <div style={{ display: 'flex' }}>
                                            <img style={{ height: '100px', width: '100px', borderRadius: '10%' }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hRnFa6hgi_gyk70_uK5GN4ME14FibsjKdw&usqp=CAUassets/img/money-heist.jpg' }} />

                                            <div className="ml-2 ">
                                                <h1  >{phim.tenPhim}</h1>
                                                <h6>{cumRap.diaChi}</h6>
                                                <p style={{color:'red'}}>Xuat Chieu</p>
                                                <div className="row">
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="col py-1" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                            <Button style={{backgroundColor:'green',border:'none'}}  type="primary" shape="round" size='medium'>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                            </Button>
                                                            
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                    <hr />
                                </Fragment>
                            })}
                        </TabPane>


                    })}
                </Tabs>

            </TabPane>

        })
    }



    return (
        <div className="container">
            {/* <Space style={{ marginBottom: 24 }}>
                Tab position:
                <Radio.Group value={tabPosition} onChange={changeTabPosition}>
                    <Radio.Button value="top">top</Radio.Button>
                    <Radio.Button value="bottom">bottom</Radio.Button>
                    <Radio.Button value="left">left</Radio.Button>
                    <Radio.Button value="right">right</Radio.Button>
                </Radio.Group>
            </Space> */}
            <Tabs tabPosition={tabPosition}>
                {renderMenu()}
            </Tabs>
        </div>
    )
}
