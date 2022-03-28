import Axios from "axios";
import store from "../Redux/store";
import { BASE_URL, TOKEN_CYBERSOFT } from "../Utils/config";
import { startLoading, stopLoading } from "../Redux/Slice/loadingAnimSlice";
import localServices from "./localServices";

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
    // const token = _token
    //   ? _token
    //   : localServices.getUserInfo.accessToken;
    this.axiosConfig = {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYW5oMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiSFYiLCJuYmYiOjE2NDg0MzI2NTAsImV4cCI6MTY0ODQzNjI1MH0.n8CS3YBLg7LgXI0AY-Cy7JFwuHUvbPVXSSErRwd6JMA`,
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

  deleteMothod(uri, loading = true) {
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
