import { localServices } from "../../Services/localServices";
import { SET_USER_INFO } from "../../Utils/config";
let initialState = {
    userInfo: localServices.getUserInfo(),
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO: {
            state.userInfo = action.payload;
            return { ...state };
        }
        default:
            return state;
    }
};
