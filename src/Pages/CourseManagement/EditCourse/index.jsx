import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, DatePicker, Form, Input, message, Select, Upload} from "antd";
import {fetchCourseCatalog} from "../../../Redux/Slice/courseSlice";
import {UploadOutlined} from "@ant-design/icons";
import localServices from "../../../Services/localServices";
import moment from "moment";
import courseMangementService from "../../../Services/courseMangement.service";

const {Option} = Select;

function EditCourse(props) {
    const [image, setImage] = useState()
    const dispatch = useDispatch()
    const {courseCatalog, editCourseData} = useSelector((state) => state.courseSlice)
    const [courseForm] = Form.useForm();

    const getFile = (e) => {
        console.log('Upload event:', e.file);
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

    const onFinish = (values) => {
        const maNhomLocal = localServices.getGroupID()
        let newValues = {
            ...values,
            ngayTao: moment(values.ngayTao).format('DD/MM/YYYY'),
            hinhAnh: values.tenKhoaHoc,
            maNhom: maNhomLocal,
            danhGia: values.danhGia * 1,
        }
        console.log("newValues", newValues)
        courseMangementService.editCourse(newValues)
            .then((res) => {
                console.log(res)
                !image ? message.success('Sửa khóa học thành công') : handleUpdateImage(image, res.data.tenKhoaHoc)

                // image&&handleUpdateImage(image, res.data.tenKhoaHoc)
                //     .then((res) => {
                //         message.success('Thêm khóa học thành công')
                //         props.history.push('/course-management')
                //     })
                //     .catch((err) => {
                //         message.error('Thêm khóa học thất bại')
                //         console.log('err upload image', err)
                //     }):message.success('Sửa khóa học thành công')
            })
            .catch((err) => {
                console.log(err)
                message.error(err.err.response.data)
            })
    };

    const handleUpdateImage = (img, tenKhoaHoc) => {
        let frm = new FormData();
        frm.append('file', img)
        frm.append('tenKhoaHoc', tenKhoaHoc)
        console.log('img',image)
        console.log('tenKhoaHoc',tenKhoaHoc)
        courseMangementService.uploadImage(frm)
            // .then((res) => {
            //     console.log(res)
            //     // message.success(res.data)
            //     message.success('Thêm khóa học thành công')
            //     courseForm.resetFields()
            // })
            // .catch((err) => {
            //     console.log(err)
            //     message.error(`${err.err.response}, vui lòng cập nhật lại hình ảnh sau!`)
            //     courseForm.resetFields()
            // })
            .then((res) => {
                console.log(res)
                message.success('Sửa khóa học thành công')
                window.location.reload(false);
            })
            .catch((err) => {
                message.warn(`Sửa thông tin khóa học thành công nhưng ${err.err.response.data}, vui lòng thử lại sau!`)
                console.log('err upload image', err)
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
        <h1 className='text-center'>Sửa khóa học</h1>
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
                    rules={[{required: true, message: 'Không được để trống!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Lượt xem"
                    name="luotXem"
                    rules={[{required: true, message: 'Không được để trống!'}]}
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
                    rules={[{required: true, message: 'Không được để trống!'}]}
                    getValueFromEvent={getFile}
                >
                    <Upload beforeUpload={() => {
                        return false
                    }}
                            listType="picture"
                            maxCount={1}
                            defaultFileList={[{
                                uid: '1',
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
            <Button type="primary" htmlType="submit">Thêm</Button>
        </Form.Item>
    </Form>);
}

export default EditCourse;