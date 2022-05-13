import { message } from "antd";
import { USER_INFO } from "../Utils/config";

const localServices = {
  setUserInfo: (values) => {
    let userInfo = JSON.stringify(values);
    localStorage.setItem(USER_INFO, userInfo);
  },
  getUserInfo: () => {
    if (localStorage.getItem(USER_INFO)) {
      return JSON.parse(localStorage.getItem(USER_INFO));
    }
  },
  removeUserInfo: () => {
    localStorage.setItem(USER_INFO, "");
    message.warning("Bạn đã đăng xuất !!!");
  },
  getGroupID() {
    if (localStorage.getItem(USER_INFO)) {
      return JSON.parse(localStorage.getItem(USER_INFO)).maNhom;
    } else {
      this.removeUserInfo();
      return 0;
    }
  },
};

export default localServices;
