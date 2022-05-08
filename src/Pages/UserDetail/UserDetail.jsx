import React, {useEffect, useState} from "react";
import {Form, Input, Tabs} from "antd";
import {Modal} from 'antd'
import Layout from "../../Layouts";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserDetail} from "../../Redux/Slice/userSlice";
import CourseList from "./Course/CourseList";
import Profile from "./Profile/Profile";
import "./index.css";

const {TabPane} = Tabs;

function UserDetail() {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const dispatch = useDispatch();
    const userDetail = useSelector((state) => state.userSlice.userDetail);

    const showModal = () => {
        setVisible(true);
    };
    useEffect(() => {
        if (!userDetail) {
            showModal()
        }else{
            hideModal()
        }
    }, [userDetail]);

    const handleOk = () => {
        setConfirmLoading(true);
    };

    const hideModal = () => {
        if (userDetail) {
            setVisible(false);
            setConfirmLoading(false);
        }
    }


    return (
        <div className=" mt-20">
            <Modal
                title={<span className='text-red-600 italic bold'>Vui lòng đăng nhập để tiếp tục!</span>}
                visible={visible}
                confirmLoading={confirmLoading}
                closable={false}
                okButtonProps={{htmlType: 'submit', className: 'btn', form: 'identity'}}
                footer={[
                    <button onClick={() => {
                        window.location.href = '/'
                    }} className='btn btn-red mr-3'>Thoát</button>,
                    <button onClick={handleOk} form='identity' className='btn btn-green' type='submit'>Đăng Nhập</button>
                ]}
            >
                <Form
                    name="identity"
                    labelCol={{span: 24}}
                    wrapperCol={{span: 24}}
                    onFinish={(values) => {
                        console.log(values);
                        dispatch(fetchUserDetail(values));
                    }}
                    onFinishFailed={() => {
                        setVisible(true);
                        setConfirmLoading(false)
                    }}
                    autoComplete="off">
                    <Form.Item label="Tài khoản"
                               name="taiKhoan"
                               rules={[
                                   {
                                       required: true,
                                       message: 'Không được để trống',
                                   },
                               ]}>
                        <Input type="text" placeholder="Tài khoản"/>
                    </Form.Item>

                    <Form.Item label="Mật khẩu"
                               name='matKhau'
                               rules={[
                                   {
                                       required: true,
                                       message: 'Không được để trống',
                                   },
                               ]}>
                        <Input.Password type="password" placeholder="Mật khẩu"/>
                    </Form.Item>
                </Form>
            </Modal>

            <h2 className=" bg-yellow-400 font-semibold font-sans text-white pl-32  text-3xl lg:leading-[200px]">
                THÔNG TIN CÁ NHÂN
            </h2>
            <div
                className=" md:w-5/6 md:min-height-[600px]  mx-auto  border-2  xl:h-screen lg:container lg:h-screen  shadow-xl ">
                <Tabs type="card" className="tab_detail">
                    <TabPane
                        tab={<p className="lg:text-lg">Thông tin cá nhân</p>}
                        key="1"
                    >
                        <Profile/>
                    </TabPane>
                    <TabPane
                        className=""
                        tab={<p className="lg:text-lg">Khoá học của tôi</p>}
                        key="2"
                    >
                        <CourseList/>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default Layout(UserDetail);
