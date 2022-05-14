import React, {useEffect, useState} from 'react';
import {Form, Input, message} from "antd";
import {Upload, Button, Select, DatePicker,} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {fetchCourseCatalog} from "../../../Redux/Slice/courseSlice";
import moment from "moment";
import courseMangementService from "../../../Services/courseMangement.service";
import localServices from "../../../Services/localServices";
import validator from "validator";

const {Option} = Select;

function AddCourse(props) {
    const [image, setImage] = useState()
    const dispatch = useDispatch()
    const [courseForm] = Form.useForm();
    const IMG_SIZE_LIMIT = 1048576 // 1MB

    const getFile = (e) => {
        setImage(e.file)
        return e.file
    };

    useEffect(() => {
        dispatch(fetchCourseCatalog())
    }, []);

    const courseCatalog = useSelector(state => state.courseSlice.courseCatalog)

    const renderCourseCatalogOption = () => {
        return courseCatalog?.map((item, key) => {
            return (
                <Option key={key} value={item.maDanhMuc}>{item.tenDanhMuc}</Option>
            )
        })
    }

    const onFinish = (values) => {
        const maNhomLocal = localServices.getGroupID()
        let newValues = {...values, maNhom: maNhomLocal}
        newValues.ngayTao = moment(newValues.ngayTao).format('DD/MM/YYYY')
        newValues.hinhAnh = newValues.hinhAnh.name
        courseMangementService.addCourse(newValues)
            .then((res) => {
                handleUpdateImage(image, res.data.tenKhoaHoc)
            })
            .catch((err) => {
                message.error(err.err.response.data)
            })
    };

    const handleUpdateImage = (img, tenKhoaHoc) => {
        let frm = new FormData();
        frm.append('file', img)
        frm.append('tenKhoaHoc', tenKhoaHoc)
        courseMangementService.uploadImage(frm)
            .then((res) => {
                message.success('Thêm khóa học thành công')
                courseForm.resetFields()
            })
            .catch((err) => {
                message.error(`${err.err.response?.data}, vui lòng cập nhật lại hình ảnh sau!`)
                courseForm.resetFields()
            })
    }

    return (
        <Form name="add_course"
              form={courseForm}
              labelCol={{span: 24}}
              wrapperCol={{span: 24}}
              onFinish={onFinish}>
            <h1 className='text-center text-3xl mb-6'>Thêm khóa học</h1>
            <div className='grid grid-cols-2 gap-6'>
                <div className='col-span-1'>
                    <Form.Item
                        label="Mã khóa học"
                        name="maKhoaHoc"
                        rules={[{required: true, message: 'Không được để trống!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Tên khóa học"
                        name="tenKhoaHoc"
                        rules={[{required: true, message: 'Không được để trống!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Danh mục khóa học"
                        name="maDanhMucKhoaHoc"
                        rules={[{required: true, message: 'Không được để trống!'}]}
                    >
                        <Select placeholder="Chọn danh mục">
                            {renderCourseCatalogOption()}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Ngày tạo"
                        name="ngayTao"
                        rules={[{required: true, message: 'Không được để trống!'}]}
                    >
                        <DatePicker placeholder='Chọn ngày tạo' format='DD/MM/YYYY'/>
                    </Form.Item>
                </div>
                <div className='col-span-1'>
                    <Form.Item
                        label="Đánh giá"
                        name="danhGia"
                        rules={[{required: true, message: 'Không được để trống!'},
                            {
                                validator: (rule, value) => {
                                    return validator.isNumeric(value)?
                                        Promise.resolve():
                                        Promise.reject('Đánh giá phải là số')
                                },message: 'Đánh giá phải là số!'
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Lượt xem"
                        name="luotXem"
                        rules={[{required: true, message: 'Không được để trống!'},
                            {validator: (rule, value) => {
                                    return validator.isNumeric(value)?
                                        Promise.resolve():
                                        Promise.reject('Lượt xem phải là số')
                                },message: 'Lượt xem phải là số!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Người tạo"
                        name="taiKhoanNguoiTao"
                        rules={[{required: true, message: 'Không được để trống!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Hình ảnh"
                        name="hinhAnh"
                        rules={[
                            {required: true, message: 'Không được để trống!'},
                            {validator:(_,value) => {
                                    return (value.size > IMG_SIZE_LIMIT) ?
                                        Promise.reject('Hình ảnh phải nhỏ hơn 1MB') :
                                        Promise.resolve()
                                }, message: 'Kích thước hình ảnh không được lớn hơn 1MB'}
                            ]}
                        getValueFromEvent={getFile}
                    >
                        <Upload beforeUpload={() => {
                            return false
                        }}
                                listType="picture"
                                maxCount={1}
                        >
                            <Button icon={<UploadOutlined/>}>Chọn hình ảnh</Button>
                        </Upload>
                    </Form.Item>
                </div>
            </div>

            <Form.Item
                label="Mô tả"
                name="moTa"
                rules={[{required: true, message: 'Không được để trống!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Bí danh"
                name="biDanh"
                rules={[{required: true, message: 'Không được để trống!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item>
                <Button type='primary' shape="round" className='btn btn-primary' htmlType="submit">Thêm</Button>
            </Form.Item>
        </Form>
    );
}

export default AddCourse;