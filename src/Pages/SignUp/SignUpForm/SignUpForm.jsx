import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userServices } from "../../../Services/userServices";
export default function SignUpForm() {
    let history = useHistory();
    const onFinish = (values) => {
        handleSignUp(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const handleSignUp = (values) => {
        let cloneValues = { ...values, maNhom: "GP01" };
        userServices
            .dangKi(cloneValues)
            .then((res) => {
                console.log("res");

                history.push("/login");
            })
            .catch((err) => {
                message.error(err.message);
            });
    };
    return (
        <Form
            name="basic"
            layout="vertical"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 24,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item
                label="Tài Khoản"
                name="taiKhoan"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập tên tài khoản!",
                    },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Mật khẩu"
                name="matKhau"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập mật khẩu!",
                    },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item
                label="Họ Tên"
                name="hoTen"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập họ tên!",
                    },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Please input your email!",
                    },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item
                label="Số điện thoại"
                name="soDT"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập số điện thoại!",
                    },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    span: 24,
                }}>
                <Button
                    className=" bg-red-600 text-white border-none"
                    htmlType="submit">
                    Đăng ký
                </Button>
            </Form.Item>
        </Form>
    );
}
