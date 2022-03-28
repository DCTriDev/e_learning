import { localServices } from "../../Services/localServices";
import { userServices } from "../../Services/userServices";
import { SET_USER_INFO } from "../../Utils/config";

export const setUserAction = (values, onFailed = () => {}) => {
    return (dispatch) => {
        userServices
            .dangNhap(values)
            .then((res) => {
                dispatch({
                    type: SET_USER_INFO,
                    payload: res.data.content,
                });
                localServices.setUserInfo(res.data.content);
                window.location.href = "/";
            })
            .catch((err) => {
                // message.error(err.message);
                onFailed(err.response.data.content);
            });
    };
};
