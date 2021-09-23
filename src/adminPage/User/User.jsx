import React,{useEffect,Fragment} from 'react'
import { NavLink } from 'react-router-dom';
import { Table,Space,Input,Button } from 'antd'
import {SearchOutlined,EditOutlined,DeleteOutlined,CalendarOutlined,PlusSquareOutlined,PlusOutlined } from '@ant-design/icons';
import { useSelector,useDispatch } from 'react-redux';
import { UserListAction,DeleteUserAction } from 'redux/actions/QuanLyUserAction';


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
                <span className="ml-3" style={{ cursor: 'pointer' }} key={2}  onClick={() => {
                    //Gọi action xoá
                    if (window.confirm('Bạn có chắc muốn xoá  ' + tk.taiKhoan)) {
                        dispatch(DeleteUserAction(tk.taiKhoan));
                    }


                }}><DeleteOutlined style={{ color: 'red',fontSize:'25px' }} /> </span> 

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
            <Button type="primary" shape="round" >
                <NavLink to={`/admin/user/addnewUser`}>
                + Add New User
                </NavLink>
                </Button>
            <Table className="mt-3" columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}
