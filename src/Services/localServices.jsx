import { USER_INFO } from "../Utils/config";

export const localServices = {
    setUserInfo: (values) => {
        let data = JSON.stringify(values);
        localStorage.setItem(USER_INFO, data);
    },
    getUserInfo: () => {
        if (localStorage.getItem(USER_INFO)) {
            return JSON.parse(localStorage.getItem(USER_INFO));
        }
    },
    removeUserInfo: () => {
        localStorage.setItem(USER_INFO, "");
    },
};
