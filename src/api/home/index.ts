import request from "@/config/request/index";

// 基本信息
export const getTopData = () => {
  return request.get('/api/view/getData');
};
