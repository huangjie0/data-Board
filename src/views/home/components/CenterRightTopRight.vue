<template>
    <CommonBasicBar title="项目时长评分" :bar-list="barList"/>
</template>
<script lang="ts" setup>
import { getPf } from '@/api/home/index.ts';
import CommonBasicBar from '@/components/CommonBasicBar.vue';

interface Params{
    btnValue?:string
}

const props = defineProps<Params>()

const verticalData_1 = ref([])
const verticalData_2 = ref([])
const chartLoading_1 = ref(null)
const chartLoading_2 = ref(null)

const barList = ref([
    { verticalData: verticalData_1, barTitle:'在途项目平均时长评分',chartLoading: chartLoading_1 },
    { verticalData: verticalData_2, barTitle:'可研批复平均时长评分',chartLoading: chartLoading_2 },
])

onMounted(()=>{
    getProjectDurationData()
    getFeasibilityStudyApproval()
})

const getCommonData = async (chartLoading:any,targetData:any,pfType:string,xData:string)=>{
    chartLoading.value = true
    targetData.value = []
    const res = await getPf({ type: props.btnValue, pfType:pfType })
    if(res.code === 200){
        targetData.value = res.data.map((item:any)=>{
            return {
                xData: item[xData],
                yData: item[props.btnValue]
            }
        }) 
        chartLoading.value = false
    }
}

const getProjectDurationData = ()=>getCommonData(chartLoading_1,verticalData_1,'ztxmpjscpf','AVG(ztxmpjscpf)')
const getFeasibilityStudyApproval = ()=>getCommonData(chartLoading_2,verticalData_2,'kypfpjscpf','AVG(kypfpjscpf)')

defineExpose({
    getProjectDurationData,
    getFeasibilityStudyApproval
})

</script>
<style lang="less" scoped>

</style>