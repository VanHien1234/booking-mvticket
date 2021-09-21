import React,{useEffect,Fragment} from 'react'
import { NavLink } from 'react-router-dom';
import { Table,Space,Input } from 'antd'
import {EditOutlined,DeleteOutlined,CalendarOutlined,PlusSquareOutlined } from '@ant-design/icons';
import { useSelector,useDispatch } from 'react-redux';
import { UserListAction } from 'redux/actions/QuanLyUserAction';


const { Search } = Input;

export default function User() {
    const {arrUserList} = useSelector(state=>state.UserReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(UserListAction())
    }, [])
    console.log('arrUserList',arrUserList)

    const columns = [
        {
            title: 'User ID',
            dataIndex: 'taiKhoan',
            sorter: (a, b) =>  {
                let IDA = a.taiKhoan.toLowerCase().trim();
                let IDB = b.taiKhoan.toLowerCase().trim();
                if (IDA > IDB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '15%'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => {
                let EmailA = a.email.toLowerCase().trim();
                let EmailB = b.email.toLowerCase().trim();
                if (EmailA > EmailB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '15%'
            
        },
        {
            title: 'Loại Người Dùng',
            dataIndex: 'maLoaiNguoiDung',
            
            /* sorter: (a, b) => a.email - b.email,
            sortDirections: ['descend', 'ascend'], */
            width: '15%'
            
        },
        {title: 'Hành động',
        dataIndex: 'taiKhoan',
        render: (text, tk) => {
            return <div className="text-center">

               {/*  Edit-button */}
                <NavLink key={1} className=" mr-3" to={`/admin/user/editUser/${tk.taiKhoan}`}><EditOutlined style={{ color: 'blue',fontSize:'25px' }} /> </NavLink>

                {/*  Delete-button */}
                <span style={{ cursor: 'pointer' }} key={2}  onClick={() => {
                    //Gọi action xoá
                    if (window.confirm('Bạn có chắc muốn xoá  ' + tk.taiKhoan)) {
                        //Gọi action
                       /*  dispatch(deleteMovieAction(film.maPhim)); */
                    }


                }}><DeleteOutlined style={{ color: 'red',fontSize:'25px' }} /> </span>


                {/*  LichChieu-button */}
                <NavLink key={1} className=" ml-3 " to={`/admin/user/inforUser/${tk.taiKhoan}`} onClick={()=>{
                    localStorage.setItem('UserParams',JSON.stringify(tk));
                }}><PlusSquareOutlined  style={{ color: 'green',fontSize:'25px' }} /> </NavLink>

            </div>
        },
        sortDirections: ['descend', 'ascend'],
        width: '25%'
    }
        
    ]


    const data = arrUserList;

    const onSearch = value =>{
        console.log(value)
        dispatch(UserListAction(value))
    } ;

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    return (
        <div>
            <h3>Quan ly User</h3>
            <Search 
            className= "my-3"
            placeholder="input search text" 
            onSearch={onSearch} 
            allowClear
            size="large"   
            enterButton ="Search" />
            day la dashboard
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}
