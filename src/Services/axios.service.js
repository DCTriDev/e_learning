import Axios from "axios";
import store from "../Redux/store";
import {BASE_URL, TOKEN_CYBERSOFT} from "../Utils/config";
import {startLoading, stopLoading} from "../Redux/Slice/loadingAnimSlice";

class AxiosService {
    axios;
    axiosConfig;
    authService;
    constructor(params) {
        this.axios = Axios.create({
            baseURL: this.getBaseUrl(),
        });
        this.getAxiosConfig();
    }

    getBaseUrl() {
        return BASE_URL;
    }

    getAxiosConfig = (_token) => {
        // const token = _token ? _token : localStorageServ.accessToken.get();
        this.axiosConfig = {
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT
            },
        };
    };

    removeAxiosConfig = () => {
        this.axiosConfig = {
            headers: {
                iKeapy: ``,
                "Content-Type": "application/json",
            },
        };
    };

    getMethod(uri, loading = true) {
        return this.handleFlow(this.axios.get(uri, this.axiosConfig), loading);
    }

    postMethod(uri, data, loading = true) {
        return this.handleFlow(
            this.axios.post(uri, data, this.axiosConfig),
            loading
        );
    }

    putMethod(uri, data, loading = true) {
        return this.handleFlow(
            this.axios.put(uri, data, this.axiosConfig),
            loading
        );
    }

    patchMethod(uri, data, loading = true) {
        return this.handleFlow(
            this.axios.patch(uri, data, this.axiosConfig),
            loading
        );
    }

    deleteMethod(uri, loading = true) {
        return this.handleFlow(this.axios.delete(uri, this.axiosConfig), loading);
    }

    handleFlow(method, loading = true) {
        loading && store.dispatch(startLoading());
        return new Promise((resolve, reject) => {
            method
                .then((res) => {
                    loading && store.dispatch(stopLoading());
                    resolve({
                        data: res.data,
                        status: res.status,
                        isSuccess: true,
                    });
                })
                .catch((err) => {
                    loading && store.dispatch(startLoading());

                    this.handleError(err);
                    reject({
                        err: err,
                    });
                });
        });
    }

    handleError = (err) => {
        const status = err.response?.status;
        switch (
            status
            // case 400:
            // case 401:
            // case 403:
            //   window.location.assign("/lms");
            //   break;
            // default:
            //   break;
            ) {
        }
    };

    axiosInstance = (req) => {
        this.axios(req, this.axiosConfig);
    };
}

const AxiosServ = new AxiosService();
export default AxiosServ;
