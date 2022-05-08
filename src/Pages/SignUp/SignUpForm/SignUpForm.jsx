import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useHistory } from "react-router-dom";
import httpService from "../../../Services/http.service";
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
        // userServices
        //     .dangKi(cloneValues)
        //     .then((res) => {
        //         console.log("res");

        //         history.push("/login");
        //     })
        //     .catch((err) => {
        //         message.error(err.message);
        //     });.
        return httpService
            .signUp(cloneValues)
            .then((res) => {
                history.push("/login");
            })
            .catch(({ err }) => {
                message.error(err.response.data);
            });
    };
    return (
        <div className="row col-6">
            <Form
                name="basic"
                layout="vertical"
                labelCol={{
                    span: 32,
                }}
                wrapperCol={{
                    span: 32,
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
                        { whitespace: true },
                        { min: 3, message: "Tên tài khoản ít nhất 3 ký tự" },
                    ]}
                    hasFeedback>
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
                            message:
                                "Password can't be lower than 6 characters",
                        },
                    ]}
                    hasFeedback>
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Nhập lại mật khẩu"
                    name="xacNhanMatKhau"
                    dependencies={["matKhau"]}
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mật khẩu!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("matKhau") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    "Xác nhận mật khẩu không khớp"
                                );
                            },
                        }),
                    ]}
                    hasFeedback>
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Họ Tên"
                    name="hoTen"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập họ tên!",
                        },
                        { whitespace: true },
                    ]}
                    hasFeedback>
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
                        {
                            type: "email",
                            message: "Vui lòng nhập email đúng định dạng",
                        },
                        { whitespace: true },
                    ]}
                    hasFeedback>
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
                        {
                            min: 10,
                            message: "Số điện thoại không thể ít hơn 10 số",
                        },
                        {
                            max: 10,
                            message: "Số điện thoại không thể nhiều hơn 10 số",
                        },
                        { whitespace: true },
                    ]}
                    hasFeedback>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="dieuKhoan"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value
                                    ? Promise.resolve()
                                    : Promise.reject(
                                          "Để tiếp tục, bạn cần chấp nhận điều khoản sử dụng"
                                      ),
                        },
                    ]}>
                    <Checkbox>
                        Chấp nhận <a href="#"> điều khoản sử dụng</a> của chúng
                        tôi
                    </Checkbox>
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
        </div>
    );
}
