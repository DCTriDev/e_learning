import AxiosServ from "./axios.service";

class CourseManagementService {
  constructor() {}
  deleteCourse(MaKhoaHoc, setLoading = true) {
    const uri = `/api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${MaKhoaHoc} `;
    return AxiosServ.deleteMethod(uri, setLoading);
  }
  getUsersWaitingApproval(maKhoaHoc, setLoading = true) {
    const uri = "/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet";
    return AxiosServ.postMethod(uri, { maKhoaHoc: maKhoaHoc }, setLoading);
  }
  cancleUsersWaitingApproval(maKhoaHoc, taiKhoan, setLoading = true) {
    const uri = "/api/QuanLyKhoaHoc/HuyGhiDanh";
    return AxiosServ.postMethod(
      uri,
      { maKhoaHoc: maKhoaHoc, taiKhoan: taiKhoan },
      setLoading
    );
  }
  getUsersRegisted(maKhoaHoc, setLoading = true) {
    const uri = "/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc";
    return AxiosServ.postMethod(uri, { maKhoaHoc: maKhoaHoc }, setLoading);
  }
  getUnregisteredUssers(maKhoaHoc, setLoading = true) {
    const uri = "/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh";
    return AxiosServ.postMethod(uri, { maKhoaHoc: maKhoaHoc }, setLoading);
  }
  registerUser(maKhoaHoc, taiKhoan, setLoading = true) {
    const uri = "/api/QuanLyKhoaHoc/GhiDanhKhoaHoc";
    return AxiosServ.postMethod(
      uri,
      { maKhoaHoc: maKhoaHoc, taiKhoan: taiKhoan },
      setLoading
    );
  }

  addCourse(data, setLoading = true){
    const uri = "/api/QuanLyKhoaHoc/ThemKhoaHoc";
    return AxiosServ.postMethod(uri, data,setLoading);
  }

  uploadImage(data, setLoading = true){
    const uri = "/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc";
    return AxiosServ.postMethod(uri, data,setLoading);
  }

  editCourse(data, setLoading = true){
    const uri = "/api/QuanLyKhoaHoc/CapNhatKhoaHoc";
    return AxiosServ.putMethod(uri, data,setLoading);
  }
}
const CourseManagementSrv = new CourseManagementService();
export default CourseManagementSrv;
