import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { setUserAction } from "../../../Redux/Action/userAction";
import httpService from "../../../Services/http.service";
//Dùng redux toolkit rôì mà sao ông lại dùng readucer làm chi nữa

export default function LogInForm() {
    let dispatch = useDispatch();
    let history = useHistory();
    const onFinish = (values) => {
        handleSignIn(values);
    };
    let showErr = (err) => {
        message.error(err);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const handleSignIn = (values) => {
        // dispatch(setUserAction(values, showErr));
        return httpService
            .login(values)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response);
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
                label="Tài khoản"
                name="taiKhoan"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập tài khoản!",
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
