import axios from "axios";
import type { AxiosInstance } from "axios";

const instance = initInstance();

function initInstance() {
  const axiosInstance: AxiosInstance = axios.create({
    // baseURL 需要设置为反向代理前缀，不能设置绝对路径URL
    baseURL: import.meta.env.VITE_BASE_API_URL,
    timeout: 60000,
    withCredentials: false,
  });
  // 实例添加请求拦截器
  axiosInstance.interceptors.request.use(
    (config: any) => {
      return config;
    },
    (error :any) => {
      return error;
    }
  );

  // 响应拦截器
  axiosInstance.interceptors.response.use(
    (response :any) => {
      if (response.status === 200) {
        if (typeof response.data.stream === "function") {
          return Promise.resolve(response);
        }
        return Promise.resolve(response.data);
      } else {
        return Promise.reject(response);
      }
    },
    (error :any) => {
      if (error.response?.status) {
        return Promise.reject(error.response);
      }
      return Promise.reject(error.message);
    }
  );
  return axiosInstance;
}

export default instance;