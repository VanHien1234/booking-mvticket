import React, { useState, useEffect } from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import { useFormik } from 'formik';
import { GROUP_ID } from 'settingAPI/apiConfig';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import { UserListAction,UpdateUserAction } from 'redux/actions/QuanLyUserAction'
import { useSelector } from 'react-redux';

export default function EditUser(props) {
    //setting ant
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    //
    
    const dispatch = useDispatch()
    const { arrUserList } = useSelector(state => state.UserReducer)

    useEffect(() => {
        
        dispatch(UserListAction())
        
        
    }, [])
    /* console.log('arrUser', arrUserList) */
    let { id } = props.match.params;
    const arrUserDetail = arrUserList?.find((e=>e.taiKhoan===id))
    console.log('UserDeatail',arrUserDetail)    


    
    
    const  formik =  useFormik({
        enableReinitialize: true,
        initialValues: {
           /*  maLoaiNguoiDung:  arrUserDetail?.maLoaiNguoiDung, */
            maLoaiNguoiDung:  '',
            taiKhoan:arrUserDetail?.taiKhoan,
            hoTen:arrUserDetail?.hoTen,
            matKhau:arrUserDetail?.matKhau,
            email:arrUserDetail?.email,
            soDt:arrUserDetail?.soDt,
        },

        onSubmit: (values) => {
            
            values.maNhom = GROUP_ID;
            //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
            /* let formData = new FormData();
            for (let key in values) {
                formData.append(key, values[key]);
        
            } */
            console.log('values', values);
            //Cập nhật phim upload hình
            dispatch(UpdateUserAction(values));

        }
    })

    

    //xu ly true false switch
    const handleChangeRadio = (name) => {
        
        return (value) => {

            console.log('value22awdawdawd',value)
            formik.setFieldValue( name,value.target.value)
            
        }
    }




    return (
        <>
             <Form onSubmitCapture={formik.handleSubmit}

                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item label="Ma Loai Nguoi Dung" name="default">
                    <Radio.Group name="maLoaiNguoiDung" onChange={handleChangeRadio('maLoaiNguoiDung')} checked={formik.values.maLoaiNguoiDung}>
                        <Radio  value="KhachHang">KhachHang</Radio>
                        <Radio  value="QuanTri">QuanTri</Radio>
                        
                    </Radio.Group>
                </Form.Item>
                
               
                <Form.Item >
                    <Button style={{ marginLeft: '25%' }} type="primary" htmlType="submit">UPDATE</Button>
                </Form.Item> 

            </Form>

            
        </>
    );
}
