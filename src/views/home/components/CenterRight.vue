<template>
    <div class="data-home-center-right data-w-h">
        <TitleCard title="本年在途项目一览" icon-class="icon-dianpu1">
            <template #rightValue> 
                <el-radio-group v-model="btnValue" size="small" fill="#1ba49b" @change="changeRadio">
                    <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                </el-radio-group>
            </template>
            <div class="data-home-center-right-container data-fdc data-w-h">
                <div class="data-f1 data-home-center-right-container-top data-fdr">
                    <div class="data-home-center-right-container-top-left">
                        <Bar :crosswise-data="crosswiseData" v-if="crosswiseData.length" bar-title="设计单位总分数"/>
                    </div>
                    <div class="data-f1">
                        <CenterRightTopRight ref="centerRightTopRightRef" :btn-value="btnValue"/>
                    </div>
                </div>
                <div class="data-f1 data-home-center-right-container-bottom">
                    <CenterRightBottom ref="centerRightBottomRef" :btn-value="btnValue"/>
                </div>
            </div>
        </TitleCard>
    </div>
</template>
<script setup lang="ts">
import CenterRightBottom from './CenterRightBottom.vue';
import CenterRightTopRight from './CenterRightTopRight.vue';
import { getPf } from '@/api/home/index.ts';
import Type from '../type/index.ts';

const options = [
    {
        label:'设计单位',
        value: Type.designUnit
    },
    {
        label:'客户经理',
        value: Type.customerManager
    }
]
const btnValue = ref<any>(Type.designUnit)
const crosswiseData = ref([])
const centerRightTopRightRef = ref()
const centerRightBottomRef = ref()

const changeRadio = (val:any)=>{
    btnValue.value = val;
    getDesignUnitData();
    centerRightTopRightRef.value.getProjectDurationData();
    centerRightTopRightRef.value.getFeasibilityStudyApproval();

    centerRightBottomRef.value.getFeasibilityStudyReviewData()
    centerRightBottomRef.value.getFeasibilityClosedData()
    centerRightBottomRef.value.getLappeableAdjustmentData()
}

onMounted(()=>{
    getDesignUnitData()
})

const getDesignUnitData = async ()=>{
    crosswiseData.value = []
    const res:any = await getPf({ type: btnValue.value,pfType: Type.sjdwzf })
    if(res.code === 200){
        crosswiseData.value = res.data.map((item:any)=>{
            return {
                xData: item[Type['AVG(sjdwzf)']],
                yData: item[btnValue.value]
            }
        })
    }
}

</script>
<style lang="less" scoped>
.data-home-center-right{
    background-color: var(--vt-c-white);
    border-radius: var(--small-radius);
    &-container{
        padding: 10px;
        &-top{
            margin-bottom: 5px;
            &-left{
                width: 33%;
                margin-right: 10px;
            }
        }
        &-bottom{
            margin-top: 5px;
        }
    }
} 

:deep(.el-radio-button:hover .el-radio-button__inner) {
    background-color: var(--board-home);
    border-color: var(--board-home);
    color: var(--vt-c-white);
} 
</style>