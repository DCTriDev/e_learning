import AxiosServ from "./axios.service";

class CourseManagementService {
  constructor() {}
  getCourseList(setLoading = true) {
    const uri = "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP05";
    return AxiosServ.getMethod(uri, { tenKoaHoc: "" }, setLoading);
  }
  deleteCourse(MaKhoaHoc, setLoading = true) {
    const uri = `/api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${MaKhoaHoc} `;
    return AxiosServ.deleteMethod(uri, setLoading);
  }
}
const CourseManagementSrv = new CourseManagementService();
export default CourseManagementSrv;
