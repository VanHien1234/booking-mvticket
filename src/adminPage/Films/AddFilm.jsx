import React, { useState } from 'react';
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
import {addNewMovieAction} from 'redux/actions/MovieListAction'

const AddFilm = () => {

    //setting ant
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    //

    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {},

        },
        onSubmit: (values) => {
            console.log('values', values);
            values.maNhom = GROUP_ID;
            //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name);
                }
            }
    

        
            dispatch(addNewMovieAction(formData));

        }
    })


    //format datepicker
    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);      //setFieldValue

    }

    //xu ly true false switch
    const handleChangeSwitch = (name) => {

        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    //xu ly lay inputNumber danh gia
    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    //xu ly lay file img
    const [imgSrc, setImgSrc] = useState('')
    const handleChangeFile = (e) => {
        //Lấy file ra từ e
        let file = e.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
            //Tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                //console.log(e.target.result);
                setImgSrc(e.target.result);

            }

            formik.setFieldValue('hinhAnh', file);
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
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Ten Phim">
                    <Input name="tenPhim" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Mo Ta">
                    <Input name="moTa" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item label="Ngay Cong Chieu">
                    <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
                </Form.Item>

                <Form.Item label="Dang Chieu" >
                    <Switch onChange={handleChangeSwitch('dangChieu')} />
                </Form.Item>

                <Form.Item label="Sap Chieu" >
                    <Switch onChange={handleChangeSwitch('sapChieu')} />
                </Form.Item>

                <Form.Item label="Phim Hot" >
                    <Switch onChange={handleChangeSwitch('hot')} />
                </Form.Item>
                <Form.Item label="So Sao">
                    <InputNumber min={1} max={10} onChange={handleChangeInputNumber('danhGia')} />
                </Form.Item>
                <Form.Item label="Hinh Anh">
                    <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg,image/gif,image/png" />
                    <br />
                    <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
                </Form.Item>
                <Form.Item >
                    <Button  style={{marginLeft:'25%'}} type="primary"  htmlType="submit">Them Phim</Button>
                </Form.Item>    
                
            </Form>
        </>
    );
};

export default AddFilm;