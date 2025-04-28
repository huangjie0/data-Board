<template>
    <ChartCard title="项目质量评分">
        <div class="data-w-h data-fdr">
            <div class="data-f1">
                <Bar :vertical-data="verticalData_1" v-if="!chartLoading_1" bar-title="可研评审问题评分"/>
            </div>
            <div class="data-f1">
                <Bar :vertical-data="verticalData_2" v-if="!chartLoading_2" bar-title="可研收口问题评分"/>
            </div>
            <div class="data-f1">
                <Bar :vertical-data="verticalData_3" v-if="!chartLoading_3" bar-title="可研调整评分"/>
            </div>
        </div>
    </ChartCard>
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
const verticalData_3 = ref([])
const chartLoading_1 = ref(null)
const chartLoading_2 = ref(null)
const chartLoading_3 = ref(null)

const getCommonData = async (chartLoading:any,targetData:any,pfType:string,xData:string)=>{
    chartLoading.value = true
    targetData.value = []
    const res = await getPf({ type: props.btnValue, pfType:pfType })
    if(res.code === 200){
        console.log(res.data);
        
        targetData.value = res.data.map((item:any)=>{
            return {
                xData: item[xData],
                yData: item[props.btnValue]
            }
        }) 
        chartLoading.value = false
    }
}

const getFeasibilityStudyReviewData = ()=>getCommonData(chartLoading_1,verticalData_1,'kypfwtpf','AVG(kypfwtpf)')
const getFeasibilityClosedData = ()=> getCommonData(chartLoading_2,verticalData_2,'kyskwtpf','AVG(kyskwtpf)')
const getLappeableAdjustmentData = ()=>getCommonData(chartLoading_3,verticalData_3,'kytzpf','AVG(kytzpf)')

onMounted(()=>{
    getFeasibilityStudyReviewData()
    getFeasibilityClosedData()
    getLappeableAdjustmentData()
})

defineExpose({
    getFeasibilityStudyReviewData,
    getFeasibilityClosedData,
    getLappeableAdjustmentData
})

</script>
<style lang="less" scoped>
    
</style>