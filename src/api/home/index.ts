import request from "@/config/request/index";

export const getTopData = () => {
  return request.get('/api/view/getData');
};

export const pieGetData = (params:any) => {
  return request.post('/api/view/getBtData',params)
}

export const getGdgsEntry = ()=>{
  return request.get('/api/view/getGdgsEntry');
}

export const getSjdwEntry = ()=>{
  return request.get('/api/view/getSjdwEntry');
}

export const getKhjlEntry = ()=>{
  return request.get('/api/view/getKhjlEntry');
}

export const getKyxmData = (params:any)=>{
  return request.post('/api/kyxm/getKyxmData',params);
}
