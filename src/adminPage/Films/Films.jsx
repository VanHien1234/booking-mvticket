import React,{useEffect,Fragment} from 'react'
import { NavLink } from 'react-router-dom';
import { Table,Space,Input } from 'antd'
/* import { Input, Space } from 'antd'; */
import {EditOutlined,DeleteOutlined,CalendarOutlined,PlusSquareOutlined} from '@ant-design/icons';
import { useSelector,useDispatch } from 'react-redux';
import { MovieListAction,deleteMovieAction } from 'redux/actions/MovieListAction';


const { Search } = Input;

export default function Films() {

    const {arrFilmBackup} = useSelector(state=>state.MovieListReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(MovieListAction())
    }, [])
    console.log('arrfilmbackup',arrFilmBackup)

    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend', 'ascend'],
            width: '15%'
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: (text, film, index) => {
                return <Fragment>
                    <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/50/50` }} />
                </Fragment>
            },
            width: '15%'
            
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '25%'
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            render: (text, film) => {
                return <Fragment>
                    {film.moTa.length > 50 ? film.moTa.substr(0, 50) + ' ...' : film.moTa}
                </Fragment>
            },
            sortDirections: ['descend', 'ascend'],
            width: '25%'
        },
        {
            title: 'Hành động',
            dataIndex: 'maPhim',
            render: (text, film) => {
                return <div className="text-center">

                   {/*  Edit-button */}
                    <NavLink key={1} className=" mr-3" to={`/admin/films/editMovie/${film.maPhim}`}><EditOutlined style={{ color: 'blue',fontSize:'25px' }} /> </NavLink>

                    {/*  Delete-button */}
                    <span style={{ cursor: 'pointer' }} key={2}  onClick={() => {
                        //Gọi action xoá
                        if (window.confirm('Bạn có chắc muốn xoá phim ' + film.tenPhim)) {
                            //Gọi action
                            dispatch(deleteMovieAction(film.maPhim));
                        }


                    }}><DeleteOutlined style={{ color: 'red',fontSize:'25px' }} /> </span>


                    {/*  LichChieu-button */}
                    <NavLink key={1} className=" ml-3 " to={`/admin/films/addshowtime/${film.maPhim}`} onClick={()=>{
                        localStorage.setItem('filmParams',JSON.stringify(film));
                    }}><PlusSquareOutlined  style={{ color: 'green',fontSize:'25px' }} /> </NavLink>
                    <NavLink key={1} className=" ml-3 " to={`/admin/films/showtime/${film.maPhim}`} onClick={()=>{
                        localStorage.setItem('filmParams',JSON.stringify(film));
                    }}><CalendarOutlined  style={{ color: 'green',fontSize:'25px' }} /> </NavLink>
                </div>
            },
            sortDirections: ['descend', 'ascend'],
            width: '25%'
        },
    ];

    const data = arrFilmBackup;

    const onSearch = (value) => {
        console.log(value);

        dispatch(MovieListAction(value));
    }
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    return (
        <div>
            <h3> Quan Ly Film</h3>
            <Search 
            className= "my-3"
            placeholder="input search text" 
            onSearch={onSearch} 
            allowClear
            size="large"   
            enterButton ="Search" />
    
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}
