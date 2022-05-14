import { Select, message, Form, Input } from "antd";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import validator from "validator";
import "./index.css";
import AdminSrv from "../../../Services/admin.service";
import { RollbackOutlined } from "@ant-design/icons";

export const ModalUser = (props) => {
  const type = props.path === "/UserManagement/themNguoiDung";
  let location = useLocation();
  const history = useHistory();
  const dataUser = type
    ? ""
    : { ...location.state.data, soDT: location.state.data.soDt };
  const styleInput = " rounded-lg h-[40px]";
  const onFinish = (values) => {
    type
      ? AdminSrv.addUser({ ...values, maNhom: "GP01" })
          .then((res) => {
            message.success("Thêm người dùng thành công");
          })
          .catch((err) => {
            message.error(err.err.response.data);
          })
      : AdminSrv.updateUser({ ...values, maNhom: "GP01" })
          .then((res) => {
            message.success("Cập nhật thông tin thành công");
          })
          .catch((err) => {
            message.error(err.err.response.data);
          });
  };
  const onFinishFailed = (errorInfo) => {
  };
  return (
    <div className="  h-screen bg-yellow-400">
      <div className=" flex  space-x-2 items-center bg-yellow-500  shadow-lg  h-24">
        <div className="h-full w-[4%] flex justify-end hover:justify-start bg-yellow-400">
          <button
            className=" shadow-lg  h-full bg-yellow-500 border-transparent border-r-white border-r-2  border-solid  text-white rounded-md px-4 py-2  cursor-pointer"
            onClick={() => {
              history.goBack();
            }}
          >
            <RollbackOutlined className=" text-xl " />
          </button>
        </div>
        <h1 className=" header-user-mng  text-white m-0">
          {type ? "Thêm người dùng" : "Chỉnh sửa thông tin người dùng"}
        </h1>
      </div>
      <Form
        initialValues={type ? null : dataUser}
        values={dataUser}
        className="p-5 w-full grid grid-cols-1  lg:grid-cols-2 gap-x-14  overflow-hidden"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Tài khoản"
          name="taiKhoan"
          rules={[
            { required: true, message: "Không được bỏ trống" },
            type ? { min: 10, message: "ít nhất 8 kí tự " } : "",
          ]}
          hasFeedback
        >
          <Input disabled={type ? false : true} className={`${styleInput}`} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Không được bỏ trống" },
            {
              validator: (_, value) => {
                if (value === undefined) {
                  value = "";
                }
                return validator.isEmail(value)
                  ? Promise.resolve()
                  : Promise.reject(new Error(" email không hợp lệ"));
              },
            },
          ]}
          hasFeedback
        >
          <Input className={`${styleInput}`} />
        </Form.Item>
        <Form.Item
          label="Họ tên"
          name="hoTen"
          rules={[{ required: true, message: "Không được bỏ trống" }]}
          hasFeedback
        >
          <Input className={`${styleInput}`} />
        </Form.Item>
        <Form.Item
          className=" "
          label="Mật khẩu "
          name="matKhau"
          rules={[
            { required: true, message: "Không được bỏ trống" },
            {
              validator: (_, value) => {
                if (value === undefined) {
                  value = "";
                }
                return validator.isStrongPassword(value, {
                  minLength: 8,
                  minLowercase: 1,
                  minUppercase: 1,
                  minNumbers: 1,
                  minSymbols: 1,
                  returnScore: false,
                })
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error(
                        "Mật khẩu ít nhất 8 kí tự bao gồm : kí tự in hoa , thường , số , kí tự đặc biệt"
                      )
                    );
              },
            },
          ]}
          hasFeedback
        >
          <Input className={`${styleInput}`} />
        </Form.Item>
        <Form.Item
          className=" "
          label="Số điện thoại"
          name="soDT"
          rules={[
            { required: true, message: "Không được bỏ trống" },
            {
              validator: (_, value) => {
                if (value === undefined) {
                  value = "";
                }
                return validator.isMobilePhone(value, "vi-VN")
                  ? Promise.resolve()
                  : Promise.reject(new Error("Số điện thoại không hợp lệ"));
              },
            },
          ]}
          hasFeedback
        >
          <Input className={`${styleInput}`} />
        </Form.Item>
        <Form.Item
          label="Loại người dùng"
          name="maLoaiNguoiDung"
          rules={[{ required: true, message: "Không được bỏ trống" }]}
          hasFeedback
        >
          <Select>
            <Select.Option value="HV">Học viên</Select.Option>
            <Select.Option value="GV">Giáo viên</Select.Option>
          </Select>
        </Form.Item>
        <div className=" mt-5 w-screen flex justify-center">
          {type ? (
            <button
              className=" bg-green-500 text-white border-none rounded-md px-4 py-2 hover:-translate-y-2 cursor-pointer"
              type="submit"
            >
              Thêm
            </button>
          ) : (
            <button
              className=" mt-5 bg-green-500 text-white border-none rounded-md px-4 py-2 hover:-translate-y-2 cursor-pointer"
              type="submit"
            >
              Lưu
            </button>
          )}
        </div>
      </Form>
    </div>
  );
};
