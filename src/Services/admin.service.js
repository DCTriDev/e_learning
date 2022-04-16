import AxiosServ from "./axios.service";

class AdminService {
  constructor() {}
  getUserList = (setLoading = true) => {
    const uri = `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;
    return AxiosServ.getMethod(uri, setLoading);
  };
  addUser = (data, setLoading = true) => {
    const uri = "/api/QuanLyNguoiDung/ThemNguoiDung";
    return AxiosServ.postMethod(uri, data, setLoading);
  };
  updateUser = (data, setLoading = true) => {
    const uri = "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    return AxiosServ.putMethod(uri, data, setLoading);
  };
  deleteUser = (taiKhoan, setLoading = true) => {
    const uri = `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    return AxiosServ.deleteMethod(uri, setLoading);
  };
  getListCourseUnregistered = (taiKhoan, setLoading = true) => {
    const uri = `/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`;
    return AxiosServ.postMethod(uri, {}, setLoading);
  };
  registerCourse = (maKhoaHoc, taiKhoan, setLoading = true) => {
    const uri = "/api/QuanLyKhoaHoc/GhiDanhKhoaHoc";
    return AxiosServ.postMethod(
      uri,
      {
        maKhoaHoc: maKhoaHoc,
        taiKhoan: taiKhoan,
      },
      setLoading
    );
  };
  getCourseListWaitingApproval = (data, setLoading = true) => {
    const uri = "/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet";
    return AxiosServ.postMethod(uri, { taiKhoan: data }, setLoading);
  };
  cancleCourse = (taiKhoan, maKhoaHoc, setLoading = true) => {
    const uri = "/api/QuanLyKhoaHoc/HuyGhiDanh";
    return AxiosServ.postMethod(
      uri,
      { maKhoaHoc: maKhoaHoc, taiKhoan: taiKhoan },
      setLoading
    );
  };
  getCourseListRegistered = (taiKhoan, setloading = true) => {
    const uri = "/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet";
    return AxiosServ.postMethod(uri, { taiKhoan: taiKhoan }, setloading);
  };
}
const AdminSrv = new AdminService();
export default AdminSrv;
