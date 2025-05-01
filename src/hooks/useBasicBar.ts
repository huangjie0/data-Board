import { getPf } from '@/api/home/index.ts';

export default function useBasicBar(props:any ){
    const getCommonData = async (targetData:any,pfType:string,xData:string)=>{
        targetData.value = []
        const res = await getPf({ type: props.btnValue, pfType:pfType })
        if(res.code === 200){
            targetData.value = res.data.map((item:any)=>{
                return {
                    xData: item[xData],
                    yData: item[props.btnValue]
                }
            }) 
        }
    }
    return {
        getCommonData
    }
}