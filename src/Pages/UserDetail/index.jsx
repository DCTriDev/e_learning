import React, { useEffect, useState } from "react";
import { Form, Input, Tabs, message } from "antd";
import { Modal } from "antd";
import Layout from "../../Layouts";
import { useDispatch, useSelector } from "react-redux";
import {fetchUserDetail, setUserDetail} from "../../Redux/Slice/userSlice";
import CourseList from "./Course/CourseList";
import Profile from "./Profile";
import "./index.css";

const { TabPane } = Tabs;

function UserDetail() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();
  let userDetail = useSelector((state) => state.userSlice.userDetail);
  const showModal = () => {
    setVisible(true);
  };

  useEffect(() => {
    if (!userDetail) {
      showModal();
    } else {
      hideModal();
    }
  }, []);

  const handleOk = () => {
    setConfirmLoading(true);
  };

  const hideModal = () => {
    if (userDetail) {
      setVisible(false);
      setConfirmLoading(false);
    }
  };

  return (
    <div className=" mt-20 ">
      <Modal
        visible={visible}
        confirmLoading={confirmLoading}
        closable={false}
        okButtonProps={{
          htmlType: "submit",
          className: "btn",
          form: "identity",
        }}
        footer={false}
      >
        <div
          className=" bg-cover bg-center "
          style={{
            backgroundImage:
              "url(https://cdn.dribbble.com/users/538183/screenshots/4455410/media/e28c4f10bbcc32a9771be27af90dafef.gif)",
          }}
        >
          <p className=" text-red-500 font-semibold uppercase text-lg  ">
            Vui lòng đăng nhập để tiếp tục !!!
          </p>
          <Form
            name="identity"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            onFinish={(values) => {
              dispatch(fetchUserDetail(values))
                  .then((res) => {
                    if (res.payload.matKhau === values.matKhau) {
                      setVisible(false);
                      message.success("Đăng nhập thành công");
                    } else {
                      dispatch(setUserDetail(null));
                      message.error("Tài khoản hoặc mật khẩu không đúng");
                    }
                  })
            }}
            onFinishFailed={() => {
              setVisible(true);
              setConfirmLoading(false);
            }}
          >
            <Form.Item
              label="Tài khoản"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Không được để trống",
                },
              ]}
            >
              <Input type="text" placeholder="Tài khoản" />
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Không được để trống",
                },
              ]}
            >
              <Input.Password type="password" placeholder="Mật khẩu" />
            </Form.Item>
          </Form>
          <div className=" text-center space-x-5">
            <button
              onClick={() => {
                window.location.href = "/";
              }}
              className=" px-2 py-1 bg-red-500 text-white border-white uppercase"
            >
              Thoát
            </button>

            <button
              onClick={handleOk}
              form="identity"
              className=" px-2 py-1 bg-green-500 text-white border-white uppercase"
              type="submit"
            >
              Đăng Nhập
            </button>
          </div>
        </div>
      </Modal>

      <h2 className=" bg-yellow-400 font-semibold font-sans text-white pl-32  text-3xl lg:leading-[200px]">
        THÔNG TIN CÁ NHÂN
      </h2>
      <div className=" md:w-5/6 md:min-height-[600px]  mx-auto  border-2  xl:h-screen lg:container lg:h-screen  shadow-xl ">
        <Tabs type="card" className="tab_detail">
          <TabPane
            tab={<p className="lg:text-lg">Thông tin cá nhân</p>}
            key="1"
          >
            <Profile />
          </TabPane>
          <TabPane
            className=""
            tab={<p className="lg:text-lg">Khoá học của tôi</p>}
            key="2"
          >
            <CourseList />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Layout(UserDetail);
