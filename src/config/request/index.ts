import axios from "axios";
import mockApi from '@/mock/index.ts'
import type { AxiosInstance } from "axios";

// 开关：控制是否启用 mock
const USE_MOCK = true

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
      // 开启 mock 且接口存在，则终止真实请求，返回模拟数据
      if (USE_MOCK && mockApi[config.url as keyof typeof mockApi]) {
        // 挂载 mock 标记，响应拦截器识别
        config.adapter = async () => {
          const res = mockApi[config.url as keyof typeof mockApi](config.data || config.params)
          return { data: res, status: 200, statusText: 'OK' }
        }
      }
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