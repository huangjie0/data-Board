<template>
    <div class="data-w-h">
        <ChartCard title="项目时长评分">
            <div class="data-w-h data-fdr">
                <div class="data-f1">
                    <Bar :vertical-data="verticalData_1" v-if="!chartLoading_1" bar-title="在途项目平均时长评分"/>
                </div>
                <div class="data-f1">
                    <Bar :vertical-data="verticalData_2" v-if="!chartLoading_2" bar-title="可研批复平均时长评分"/>
                </div>
            </div>
        </ChartCard>
    </div>
</template>
<script lang="ts" setup>
import ChartCard from '@/components/ChartCard.vue';
import Bar from '@/components/Bar.vue';
import { getPf } from '@/api/home/index.ts';

interface Params{
    btnValue?:string
}

const props = defineProps<Params>()

const verticalData_1 = ref([])
const verticalData_2 = ref([])
const chartLoading_1 = ref(null)
const chartLoading_2 = ref(null)

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