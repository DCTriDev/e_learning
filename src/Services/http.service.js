import AxiosServ from "./axios.service";

class HttpRequestService {
  constructor() {}

  login(data, setLoading = true) {
    const uri = "/api/QuanLyNguoiDung/DangNhap";
    return AxiosServ.postMethod(uri, data, setLoading);
  }

  signUp(data, setLoading = true) {
    const uri = "/api/QuanLyNguoiDung/DangKy";
    return AxiosServ.postMethod(uri, data, setLoading);
  }

  getCoursesList = (data, setLoading = true) => {
    const uri = '/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP05'
    return AxiosServ.getMethod(uri, data, setLoading)
  }

  getCourseCatalog = (data, setLoading = true) => {
    const uri = '/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc'
    return AxiosServ.getMethod(uri, data, setLoading)
  }

  getCourseListByCatalog = (values, data, setLoading = true) => {
    const uri = `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${values}&MaNhom=GP05`
    return AxiosServ.getMethod(uri, data, setLoading)
  }

  getCourseDetail = (values, data, setLoading = true) => {
    const uri = `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${values}`;
    return AxiosServ.getMethod(uri, data, setLoading);
  };

  getUserList = (setLoading = true) => {
    const uri = `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05`;
    return AxiosServ.getMethod(uri, setLoading);
  };

  getUserDetail = (data, setLoading = true) => {
    const uri = "/api/QuanLyNguoiDung/ThongTinTaiKhoan";
    return AxiosServ.postMethod(uri, data, setLoading);
  };

  updateUserDetail = (data, setLoading = true) => {
    const uri = "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    return AxiosServ.putMethod(uri, data, setLoading);
  };

  cancleCourse = (data, setLoading = true) => {
    const uri = "/api/QuanLyKhoaHoc/HuyGhiDanh";
    return AxiosServ.postMethod(uri, data, setLoading);
  };
}

const httpService = new HttpRequestService();

export default httpService;
