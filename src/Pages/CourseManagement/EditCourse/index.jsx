import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, DatePicker, Form, Input, message, Select, Upload} from "antd";
import {fetchCourseCatalog} from "../../../Redux/Slice/courseSlice";
import {UploadOutlined} from "@ant-design/icons";
import localServices from "../../../Services/localServices";
import moment from "moment";
import courseMangementService from "../../../Services/courseMangement.service";
import validator from "validator";

const {Option} = Select;

function EditCourse(props) {
    const [image, setImage] = useState()
    const dispatch = useDispatch()
    const {courseCatalog, editCourseData} = useSelector((state) => state.courseSlice)
    const [courseForm] = Form.useForm();
    const IMG_SIZE_LIMIT = 1048576 // 1MB

    const getFile = (e) => {
        setImage(e.file)
        return e.file
    };

    const initialValues = {
        ...editCourseData,
        ngayTao: moment(editCourseData.ngayTao, 'DD/MM/YYYY'),
        taiKhoanNguoiTao: editCourseData.nguoiTao.taiKhoan,
        maDanhMucKhoaHoc: editCourseData.danhMucKhoaHoc.maDanhMucKhoahoc,
    }

    useEffect(() => {
        dispatch(fetchCourseCatalog())
    }, []);

    const isChanged = (values) => {
        return !values.nguoiTao === editCourseData.nguoiTao.taiKhoan
            && !values.tenKhoaHoc === editCourseData.tenKhoaHoc
            && !values.moTa === editCourseData.moTa
            && !values.luotXem == editCourseData.luotXem
            && !values.maDanhMucKhoaHoc === editCourseData.danhMucKhoaHoc.maDanhMucKhoaHoc
            && !values.biDanh === editCourseData.biDanh;
    }

    const onFinish = (values) => {
        const maNhomLocal = localServices.getGroupID()
        let newValues = {
            ...values,
            ngayTao: moment(values.ngayTao).format('DD/MM/YYYY'),
            hinhAnh: image?.name,
            maNhom: maNhomLocal,
            danhGia: values.danhGia * 1,
        }

        !isChanged(newValues)?
            courseMangementService.editCourse(newValues)
                .then((res) => {
                    !image ? message.success('Sửa khóa học thành công') : handleUpdateImage(image, res.data.tenKhoaHoc)
                })
                .catch((err) => {
                    message.error(err.err.response.data)
                })
            : message.warning('Bạn cần thay đổi ít nhất một thông tin!')
    };

    const handleUpdateImage = (img, tenKhoaHoc) => {
        let frm = new FormData();
        frm.append('file', img)
        frm.append('tenKhoaHoc', tenKhoaHoc)
        courseMangementService.uploadImage(frm)
            .then((res) => {
                message.success('Sửa khóa học thành công')
                window.location.reload(false);
            })
            .catch((err) => {
                message.warn(`Sửa thông tin khóa học thành công nhưng ${err.err.response.data}, vui lòng thử lại sau!`)
            })
    }

    const renderCourseCatalogOption = () => {
        return courseCatalog?.map((item, key) => {
            return (<Option key={key} value={item.maDanhMuc}>{item.tenDanhMuc}</Option>)
        })
    }

    return (<Form name="add_course"
                  form={courseForm}
                  labelCol={{span: 24}}
                  initialValues={initialValues}
                  wrapperCol={{span: 24}}
                  onFinish={onFinish}>
        <h1 className='text-center text-3xl mb-6'>Sửa khóa học</h1>
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
                    <Select defaultValue={editCourseData.danhMucKhoaHoc.maDanhMucKhoaHoc}
                            placeholder="Chọn danh mục">
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
                        {
                            validator: (rule, value) => {
                                return (value == editCourseData.hinhAnh)?
                                    Promise.reject('Không được để trống!'):
                                    Promise.resolve()
                            }, message: 'Không được để trống!'
                        },
                        {validator:(_,value) => {
                            return (value.size > IMG_SIZE_LIMIT) ?
                                Promise.reject('Hình ảnh phải nhỏ hơn 1MB') :
                                Promise.resolve()
                        }, message: 'Kích thước hình ảnh không được lớn hơn 1MB'}
                    ]}
                    getValueFromEvent={getFile}
                >
                    <Upload
                        accept={'image/*'}
                        beforeUpload={() => {
                        return false
                    }}
                            listType="picture"
                            maxCount={1}
                            defaultFileList={[{
                                uid: '-1',
                                name: 'Hình ảnh hiện tại',
                                status: 'done',
                                url: editCourseData.hinhAnh
                            }]}
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
            <Button type="primary" shape="round" htmlType="submit">Cập nhập</Button>
        </Form.Item>
    </Form>);
}

export default EditCourse;