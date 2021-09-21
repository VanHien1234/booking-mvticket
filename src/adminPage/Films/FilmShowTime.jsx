import React, { useEffect, useState } from 'react'
import { Table, Space, Input,Form } from 'antd'
import { EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import { QLRapApi } from 'Api/QuanLyRapApi';
import { Select } from 'antd';
import { Card } from 'antd';
import { QLMovieApi } from 'Api/MovieApi';



export default function FilmShowTime(props) {
    const [state, setState] = useState({
        arrLichChieu: [],
        arrDetailFim: [],
        cumRapChieu: [],
        arrLichChieuFilm: []
    })


    console.log('arrcumrapchieu', state.cumRapChieu)
    const { arrDetailFim } = state
    const { heThongRapChieu } = state.arrLichChieu
    /* const {arrLichChieuFilm} = state */

    console.log('arrcumrapchieu21212', state.arrLichChieuFilm)

    useEffect(

        async () => {
            let { id } = props.match.params;
            try {
                let result = await QLRapApi.layThongtinLichChieuTheoFilm(id);
                let result1 = await QLMovieApi.movieDetailApi(id)
                setState({
                    ...state,
                    arrLichChieu: result.data.content,
                    arrDetailFim: result1.data.content
                })

            } catch (error) {

            }


        }, [])

    const { Option } = Select;
    const { Meta } = Card;
    const handleChangeHeThongRap = async (value) => {
        try {
            let result = await heThongRapChieu.filter((htr) => {
                return htr.maHeThongRap === value
            })

            let listCumRap = result[0].cumRapChieu;
            setState({
                ...state,
                cumRapChieu: listCumRap,

            })

        }
        catch (error) {
            console.log('object error')
        }

    }
    const handleChangeRap = async (value) => {
        try {
            let result = await state.cumRapChieu.filter((crc) => {
                return crc.maCumRap === value
            })
            /* console.log('result',result[0].cumRapChieu) */
            let listCumRap = result;
            setState({
                ...state,
                arrLichChieuFilm: listCumRap[0].lichChieuPhim,

            })

        }
        catch (error) {
            console.log('object error')
        }
    }

    const RenderHTR = () => {
        return heThongRapChieu?.map((htr, index) => {
            return <Option key={index} value={htr.maHeThongRap}  >{htr.tenHeThongRap}</Option>

        })
    }
    const RenderCumRapChieu = () => {
        return state.cumRapChieu?.map((crc, index) => {
            return <Option key={index} value={crc.maCumRap}  >{crc.tenCumRap}</Option>
        })
    }


    const columns = [
        {
            title: 'Ma Rap',
            dataIndex: 'maRap',
            width: '10%'
            /* sorter: (a, b) =>  {
                let IDA = a.taiKhoan.toLowerCase().trim();
                let IDB = b.taiKhoan.toLowerCase().trim();
                if (IDA > IDB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'], */

        },
        {
            title: 'Ma Lich Chieu',
            dataIndex: 'maLichChieu',
            width: '10%'

        },
        {
            title: 'Ten Rap',
            dataIndex: 'tenRap',
            width: '10%'

        },
        {
            title: 'Ngay Khoi Chieu',
            dataIndex: 'ngayChieuGioChieu',
            width: '20%'

        },
        {
            title: 'Gia Ve',
            dataIndex: 'giaVe',
            width: '15%'

        },
        {
            title: 'Thoi Luong',
            dataIndex: 'thoiLuong',
            width: '15%'

        },
    ]

    const data = state.arrLichChieuFilm;


    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div>
            <h3>Thong Tin Lich Chieu Fim "{arrDetailFim.tenPhim}"</h3>
            <div className="row">
                <div className="col-7 mt-5">
                    <Form
                     name="basic"
                     labelCol={{ span: 5 }}
                     wrapperCol={{ span: 10 }}   >
                        <Form.Item label="He Thong Rap">
                            <Select
                                style={{ width: 500 }}
                                placeholder="Select a person"
                                onChange={handleChangeHeThongRap}>
                                {RenderHTR()}
                            </Select>
                        </Form.Item>
                        <Form.Item label="Cum Rap">
                            <Select
                                style={{ width: 500 }}
                                placeholder="Select a person"
                                onChange={handleChangeRap}>
                                {RenderCumRapChieu()}
                            </Select>
                        </Form.Item>
                    </Form>



                </div>
                <div className="col-5">
                    <Card
                        hoverable
                        style={{ width: 300 }}
                        cover={<img style={{ height: 200, objectFit: 'fill' }} alt={arrDetailFim.moTa} src={arrDetailFim.hinhAnh} />}>
                        <Meta title={arrDetailFim.tenPhim} description={`${arrDetailFim.moTa}`.length > 25 ? <span>{arrDetailFim.moTa.slice(0, 25)} ...</span> : <span>{arrDetailFim.moTa}</span>} />
                    </Card>,
                </div>
            </div>



            <Table columns={columns} dataSource={data} onChange={onChange} />

        </div>
    )
}
