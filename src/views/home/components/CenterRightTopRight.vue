<template>
    <CommonBasicBar title="项目时长评分" :bar-list="barList"/>
</template>
<script lang="ts" setup>
import useBasicBar from '@/hooks/useBasicBar.ts';
import Type from '../type/index.ts';

interface Params{
    btnValue?:string
}

const props = defineProps<Params>()

const { getCommonData } = useBasicBar(props);

const verticalData_1 = ref([])
const verticalData_2 = ref([])

const barList = ref([
    { verticalData: verticalData_1, barTitle:'在途项目平均时长评分'},
    { verticalData: verticalData_2, barTitle:'可研批复平均时长评分'},
])

onMounted(()=>{
    getProjectDurationData()
    getFeasibilityStudyApproval()
})

const getProjectDurationData = ()=>getCommonData(verticalData_1, Type.ztxmpjscpf , Type['AVG(ztxmpjscpf)'] )
const getFeasibilityStudyApproval = ()=>getCommonData(verticalData_2, Type.kypfpjscpf , Type['AVG(kypfpjscpf)'] )

defineExpose({
    getProjectDurationData,
    getFeasibilityStudyApproval
})

</script>
<style lang="less" scoped>

</style>