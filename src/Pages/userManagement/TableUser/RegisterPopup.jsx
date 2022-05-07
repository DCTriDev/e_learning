import React, { useState } from "react";
import { Modal, message, Pagination } from "antd";
import AdminSrv from "../../../Services/admin.service";
export default function RegisterPopup(props) {
  let taiKhoan = props.data.taiKhoan;
  let [courseListWaitingApproval, setCourseListWaitingApproval] = useState([]);
  let [dskhChuaGhiDanh, setDskhChuaGhiDanh] = useState([]);
  let [valueSelect, setValue] = useState("");
  let [courseListRegisited, setCourseListRegisited] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const pageSize = 5;
  let [stateTable2, setStateTable2] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  let handleChange2 = (page) => {
    setStateTable2({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  let handleChange1 = (page) => {
    setStateTable1({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  let [stateTable1, setStateTable1] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  const showModal = async () => {
    // await setTaiKhoan(props.data.taiKhoan);
    await AdminSrv.getListCourseUnregistered(taiKhoan)
      .then((res) => {
        setDskhChuaGhiDanh(res.data);
        setValue(res.data[0]?.maKhoaHoc);
      })
      .catch((err) => console.log(err));
    await AdminSrv.getCourseListWaitingApproval(taiKhoan)
      .then((res) => {
        setCourseListWaitingApproval(res.data);
      })
      .catch((err) => console.log(err));
    await AdminSrv.getCourseListRegistered(taiKhoan)
      .then((res) => {
        setCourseListRegisited(res.data);
      })
      .catch((err) => console.log(err));
    setStateTable1({
      data: courseListWaitingApproval,
      totalPage: courseListWaitingApproval.length / pageSize,
      minIndex: 0,
      current: 1,
      maxIndex: pageSize,
    });
    setStateTable2({
      data: courseListRegisited,
      totalPage: courseListRegisited.length / pageSize,
      minIndex: 0,
      current: 1,
      maxIndex: pageSize,
    });
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleRegisterCourse = (maKhoaHoc, TaiKhoan) => {
    AdminSrv.registerCourse(maKhoaHoc, TaiKhoan)
      .then((res) => {
        message.success(res.data);
        let newDskh = [...dskhChuaGhiDanh].filter(
          (item) => item.maKhoaHoc !== maKhoaHoc
        );
        let KhMoiGhiDanh = [...dskhChuaGhiDanh].find(
          (e) => e.maKhoaHoc === maKhoaHoc
        );
        setDskhChuaGhiDanh(newDskh);
        setValue(newDskh[0].maKhoaHoc);
        setCourseListRegisited([...courseListRegisited, KhMoiGhiDanh]);
      })
      .catch((err) => {
        console.log(err);
        message.error(err.err.response.data);
      });
  };
  const handleRegisterCourseWait = (maKhoaHoc, TaiKhoan) => {
    console.log(taiKhoan);
    AdminSrv.registerCourse(maKhoaHoc, TaiKhoan)
      .then((res) => {
        console.log(res);
        message.success(res.data);
        let newDskh = [...courseListWaitingApproval].filter(
          (item) => item.maKhoaHoc !== maKhoaHoc
        );
        setCourseListWaitingApproval(newDskh);
      })
      .catch((err) => {
        console.log(err);
        message.error(err.err.response.data);
      });
  };
  const handleCancelCourse = (taiKhoan, maKhoaHoc) => {
    AdminSrv.cancleCourse(taiKhoan, maKhoaHoc)
      .then((res) => {
        message.success(res.data);
        console.log(res);
        let newDskh = [...courseListWaitingApproval].filter(
          (item) => item.maKhoaHoc !== maKhoaHoc
        );
        let courseCancle = [...courseListWaitingApproval].find(
          (item) => item.maKhoaHoc === maKhoaHoc
        );
        console.log(courseCancle);
        setDskhChuaGhiDanh([...dskhChuaGhiDanh, courseCancle]);
        setCourseListWaitingApproval(newDskh);
      })
      .catch((err) => console.log(err));
  };
  const handleCancelCourseRegisted = (taiKhoan, maKhoaHoc) => {
    AdminSrv.cancleCourse(taiKhoan, maKhoaHoc)
      .then((res) => {
        message.success(res.data);
        console.log(res);
        let newDskh = [...courseListRegisited].filter(
          (item) => item.maKhoaHoc !== maKhoaHoc
        );
        let courseCancle = [...courseListRegisited].find(
          (item) => item.maKhoaHoc === maKhoaHoc
        );
        console.log(courseCancle);
        setDskhChuaGhiDanh([...dskhChuaGhiDanh, courseCancle]);
        setCourseListRegisited(newDskh);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <button
        className="cursor-pointer  text-white lg:px-4 lg:py-2 rounded-lg border-none shadow-lg  bg-green-400 w-16 lg:w-auto  "
        onClick={showModal}
      >
        Ghi danh
      </button>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        className=" w-screen"
        footer={false}
      >
        <div className=" h-screen lg:h-[90vh] ">
          <div>
            <p className=" text-2xl">Ghi danh khóa học</p>
            {dskhChuaGhiDanh.length === 0 ? (
              <p className=" italic text-red-500">
                Đã ghi danh tất cả khóa học
              </p>
            ) : (
              <div>
                <form>
                  <select
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  >
                    {dskhChuaGhiDanh.map((item, i) => {
                      return (
                        <option value={item.maKhoaHoc} key={i}>
                          {item.tenKhoaHoc}
                        </option>
                      );
                    })}
                  </select>
                </form>
                <button
                  onClick={() => {
                    handleRegisterCourse(valueSelect, taiKhoan);
                  }}
                >
                  Ghi Danh
                </button>
              </div>
            )}
          </div>
          <div className="  ">
            <div className="relative h-[270px]">
              <p className=" text-2xl ">Khoá học chờ xác thực</p>
              {courseListWaitingApproval.length === 0 ? (
                <p className=" italic text-red-500 ">
                  Không có khóa học nào chờ xác nhận
                </p>
              ) : (
                <table className="w-full border-2 border-black border-solid">
                  <thead>
                    <tr>
                      <th className=" border-r-2 border-solid border-black w-1/6">
                        STT
                      </th>
                      <th className=" border-r-2 border-solid border-black w-3/6">
                        Tên khóa học
                      </th>
                      <th className=" border-r-2 border-solid border-black w-2/6">
                        Chờ xác nhận
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseListWaitingApproval.map((item, i) => {
                      return (
                        i >= stateTable1.minIndex &&
                        i < stateTable1.maxIndex && (
                          <tr key={i} className=" text-center">
                            <td className=" border-r-2 border-solid border-black">
                              {i + 1}
                            </td>
                            <td className=" border-r-2 border-solid border-black">
                              {item.tenKhoaHoc}
                            </td>
                            <td className=" border-r-2 border-solid border-black space-x-3">
                              <button
                                onClick={() => {
                                  handleRegisterCourseWait(
                                    item.maKhoaHoc,
                                    taiKhoan
                                  );
                                }}
                              >
                                Xác nhận
                              </button>
                              <button
                                onClick={() => {
                                  handleCancelCourse(taiKhoan, item.maKhoaHoc);
                                }}
                              >
                                Hủy
                              </button>
                            </td>
                          </tr>
                        )
                      );
                    })}
                  </tbody>
                </table>
              )}
              {courseListWaitingApproval.length === 0 ? (
                ""
              ) : (
                <Pagination
                  className=" w-fit absolute top-0 left-1/2 -translate-x-1/2 mt-[260px] "
                  showSizeChanger={false}
                  pageSize={pageSize}
                  defaultCurrent={stateTable1.current}
                  current={stateTable1.current}
                  total={courseListWaitingApproval.length}
                  onChange={handleChange1}
                />
              )}
            </div>
            <div className=" relative">
              <p className=" text-2xl">Khóa học đã ghi danh</p>
              {courseListRegisited.length === 0 ? (
                <p className=" italic text-red-500">
                  Không có khóa học nào đã ghi danh
                </p>
              ) : (
                <table className="w-full border-2 border-black border-solid">
                  <thead>
                    <tr>
                      <th className=" border-r-2 border-solid border-black w-1/6">
                        STT
                      </th>
                      <th className=" border-r-2 border-solid border-black w-3/6">
                        Tên khóa học
                      </th>
                      <th className=" border-r-2 border-solid border-black w-2/6">
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" min-h-[200px]">
                    {courseListRegisited.map((item, i) => {
                      return (
                        i >= stateTable2.minIndex &&
                        i < stateTable2.maxIndex && (
                          <tr key={i} className=" text-center">
                            <td className=" border-r-2 border-solid border-black">
                              {i + 1}
                            </td>
                            <td className=" border-r-2 border-solid border-black">
                              {item.tenKhoaHoc}
                            </td>
                            <td className=" border-r-2 border-solid border-black ">
                              <button
                                onClick={() => {
                                  handleCancelCourseRegisted(
                                    taiKhoan,
                                    item.maKhoaHoc
                                  );
                                }}
                              >
                                Hủy
                              </button>
                            </td>
                          </tr>
                        )
                      );
                    })}
                  </tbody>
                </table>
              )}
              {courseListRegisited.length === 0 ? (
                ""
              ) : (
                <Pagination
                  className=" w-fit absolute top-0 left-1/2 -translate-x-1/2 mt-[260px] "
                  showSizeChanger={false}
                  pageSize={pageSize}
                  defaultCurrent={stateTable2.current}
                  current={stateTable2.current}
                  total={courseListRegisited.length}
                  onChange={handleChange2}
                />
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
