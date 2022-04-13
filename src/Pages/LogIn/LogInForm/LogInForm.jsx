import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import httpService from "../../../Services/http.service";

export default function LogInForm() {
    let dispatch = useDispatch();
    let history = useHistory();
    const onFinish = (values) => {
        handleLogIn(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const handleLogIn = (values) => {
        return httpService
            .login(values)
            .then((res) => {
                console.log(handleLogIn);
                history.push("/");
            })
            .catch(({ err }) => {
                message.error(err.response.data);
            });
    };

    return (
        <Form
            name="basic"
            layout="vertical"
            labelCol={{
                span: 24,
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
                label="Tài khoản"
                name="taiKhoan"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập tài khoản!",
                    },
                    { whitespace: true },
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
                    { whitespace: true },
                    {
                        min: 6,
                        message: "Mật khẩu không thể ít hơn 6 ký tự",
                    },
                ]}>
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    span: 24,
                }}>
                <Button
                    className=" bg-green-theme text-white border-none"
                    htmlType="submit">
                    Đăng nhập
                </Button>
            </Form.Item>
        </Form>
    );
}