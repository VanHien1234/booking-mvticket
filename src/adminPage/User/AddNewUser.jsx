import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { useFormik } from 'formik';
import { AdminAddNewUserAction } from 'redux/actions/QuanLyUserAction';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function AddNewUser() {
    //antd setting
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 4,
                },
            }
            : null;

            //formik setting

            


            const dispatch = useDispatch()

            const formik = useFormik({
                initialValues:{
                    taiKhoan:'',
                    matKhau:'',
                    email:'',
                    soDt:'',
                    hoTen:'',
                    maLoaiNguoiDung:'',
                    maNhom: 'GP01'
        
                },
                onSubmit: values =>{
                    dispatch(AdminAddNewUserAction(values))
                    console.log('values submit',values);
                    
                }
            })    
            
            const handleChangeRadio = (name) => {
        
                return (value) => {
        
                    console.log('value2',value)
                    formik.setFieldValue( name,value.target.value)
                    
                }
            }

            


    return (
        <>
            <Form
                onSubmitCapture={formik.handleSubmit}
                {...formItemLayout}
                layout={formLayout}
                form={form}
                initialValues={{
                    layout: formLayout,
                }}
                onValuesChange={onFormLayoutChange}
            >
                <Form.Item label="Tai Khoan (IDuser)">
                    <Input name="taiKhoan"  placeholder="input placeholder" required onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Ho Ten">
                    <Input name="hoTen"  placeholder="input placeholder"  required onChange={formik.handleChange}/>
                </Form.Item>
                <Form.Item label="email">
                    <Input type="email" name="email"  placeholder="input placeholder" required onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Phone">
                    <Input name="soDt"  placeholder="input placeholder" required onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Mat Khau">
                    <Input type="password"  name="matKhau"  placeholder="input placeholder" required onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Ma Loai Nguoi Dung" >
                    <Radio.Group name="maLoaiNguoiDung" onChange={handleChangeRadio('maLoaiNguoiDung')} checked={formik.values.maLoaiNguoiDung}>
                        <Radio  value="KhachHang">KhachHang</Radio>
                        <Radio  value="QuanTri">QuanTri</Radio>
                        
                    </Radio.Group>
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </>
    )
}
