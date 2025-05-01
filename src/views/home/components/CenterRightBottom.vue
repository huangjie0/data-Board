<template>
    <CommonBasicBar title="项目质量评分" :bar-list="barList"/>
</template>
<script lang="ts" setup>
import CommonBasicBar from '@/components/CommonBasicBar.vue';
import useBasicBar from '@/hooks/useBasicBar.ts';


interface Params{
    btnValue?:string
}

const props = defineProps<Params>()
const { getCommonData } = useBasicBar(props);

const verticalData_1 = ref([])
const verticalData_2 = ref([])
const verticalData_3 = ref([])

const barList = ref([
    { verticalData:verticalData_1,barTitle:'可研评审问题评分'},
    { verticalData:verticalData_2,barTitle:'可研收口问题评分'},
    { verticalData:verticalData_3,barTitle:'可研调整评分'},
])

const getFeasibilityStudyReviewData = ()=>getCommonData(verticalData_1,'kypfwtpf','AVG(kypfwtpf)')
const getFeasibilityClosedData = ()=> getCommonData(verticalData_2,'kyskwtpf','AVG(kyskwtpf)')
const getLappeableAdjustmentData = ()=>getCommonData(verticalData_3,'kytzpf','AVG(kytzpf)')

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