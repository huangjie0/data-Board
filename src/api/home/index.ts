import request from "@/config/request/index";

export const getTopData = () => {
  return request.get('/api/view/getData');
};

export const pieGetData = (params:any) => {
  return request.post('/api/view/getBtData',params)
}

export const getKytgl = ()=>{
  return request.get('/api/view/getKytgl');
}

export const getKyxmTimeData = (params:any)=>{
  return request.post('/api/kyxm/getKyxmTimeData',params);
}
