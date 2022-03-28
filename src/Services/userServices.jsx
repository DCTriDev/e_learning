import axios from "axios";
import { BASE_URL, USER_INFO, TOKEN_CYBERSOFT } from "../Utils/config";

export const userServices = {
    dangKi: (values) => {
        return axios({
            url: `${BASE_URL}/api/QuanLyNguoiDung/DangKy`,
            method: "POST",
            data: values,
            headers: { TokenCybersoft: TOKEN_CYBERSOFT },
        });
    },
    dangNhap: (values) => {
        return axios({
            url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
            method: "POST",
            data: values,
            headers: { TokenCybersoft: TOKEN_CYBERSOFT },
        });
    },
};
