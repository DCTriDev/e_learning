import React, {useEffect, useState} from 'react';
import {Form, Input, message, Modal} from "antd";
import {Upload, Button, Select, DatePicker,} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {fetchCourseCatalog} from "../../../Redux/Slice/courseSlice";
import moment from "moment";
import courseMangementService from "../../../Services/courseMangement.service";
import localServices from "../../../Services/localServices";

const { Option } = Select;

function PopupAddCourse(props) {
    const [image, setImage] = useState()
    const dispatch = useDispatch()
    const courseData = props.data

    const isAdding = !Boolean(courseData)


    const getFile = (e) => {
        console.log('Upload event:', e.file);
        setImage(e.file)
        return e.file
    };

    useEffect(() => {
        dispatch(fetchCourseCatalog())
    }, []);

    const courseCatalog = useSelector(state => state.courseSlice.courseCatalog)

    const renderCourseCatalogOption= () => {
        return courseCatalog?.map((item, key)=> {
            return (
                    <Option key={key} value={item.maDanhMuc}>{item.tenDanhMuc}</Option>
            )
        })
    }

    const onFinish = (values) => {
        let maNhomLocal = localServices.getGroupID()
        let newValues = {...values, maNhom : maNhomLocal, biDanh:'hello'}
        newValues.ngayTao = moment(newValues.ngayTao).format('DD/MM/YYYY')

        newValues.hinhAnh = newValues.hinhAnh.name
        courseMangementService.addCourseUploadImg(newValues)
            .then(res => {
                console.log(res)
                handleUpdateImage(image, newValues.tenKhoaHoc)
            })
            .catch(err => {
                console.log(err)
            })
    };

    const handleUpdateImage = (img, tenKhoaHoc) => {
        let frm = new FormData();
        frm.append('file', img)
        frm.append('tenKhoaHoc', tenKhoaHoc)
        courseMangementService.uploadImage(frm)
            .then(res => {
                console.log(res.data)
                message.success(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Modal
            title="Thêm Khóa Học"
            centered
            visible={props.isAddCourse}
            onOk={() => props.setIsAddCourse(false)}
            onCancel={() => props.setIsAddCourse(false)}
            width={1000}
        >
            <Form name="add_course"
                  labelCol={{span:24}}
                  wrapperCol={{span:24}}
                  onFinish={onFinish}>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='col-span-1'>
                        <Form.Item
                            label="Mã khóa học"
                            name="maKhoaHoc"
                            rules={[{ required: true, message: 'Không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Tên khóa học"
                            name="tenKhoaHoc"
                            rules={[{ required: true, message: 'Không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Danh mục khóa học"
                            name="maDanhMucKhoaHoc"
                            rules={[{ required: true, message: 'Không được để trống!' }]}
                        >
                            <Select defaultValue='Chọn danh mục'>
                                {renderCourseCatalogOption()}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Ngày tạo"
                            name="ngayTao"
                            rules={[{ required: true, message: 'Không được để trống!' }]}
                        >
                            <DatePicker placeholder='Chọn ngày tạo' format='DD/MM/YYYY'/>
                        </Form.Item>
                    </div>
                    <div className='col-span-1'>
                        <Form.Item
                            label="Đánh giá"
                            name="danhGia"
                            rules={[{ required: true, message: 'Không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Lượt xem"
                            name="luotXem"
                            rules={[{ required: true, message: 'Không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Người tạo"
                            name="taiKhoanNguoiTao"
                            rules={[{ required: true, message: 'Không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Hình ảnh"
                            name="hinhAnh"
                            rules={[{ required: true, message: 'Không được để trống!' }]}
                            getValueFromEvent={getFile}
                        >
                            <Upload beforeUpload={() => {return false}}
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
                    rules={[{ required: true, message: 'Không được để trống!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    {isAdding ? <Button type="primary" htmlType="submit">Thêm</Button> : <Button type="primary" htmlType="submit">Cập nhập</Button>}
                </Form.Item>

            </Form>
        </Modal>
    );
}

export default PopupAddCourse;