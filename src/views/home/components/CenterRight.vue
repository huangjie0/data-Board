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
                        <Bar :crosswise-data="designUnitData" v-if="designUnitData?.length"/>
                    </div>
                    <div class="data-f1">
                        <CenterRightTopRight/>
                    </div>
                </div>
                <div class="data-f1 data-home-center-right-container-bottom">
                    <CenterRightBottom/>
                </div>
            </div>
        </TitleCard>
    </div>
</template>
<script setup lang="ts">
import TitleCard from '@/components/TitleCard.vue';
import CenterRightBottom from './CenterRightBottom.vue';
import CenterRightTopRight from './CenterRightTopRight.vue';
import Bar from '@/components/Bar.vue';
import { getPf } from '@/api/home/index.ts';

const options = [
    {
        label:'设计单位',
        value:'sjdw'
    },
    {
        label:'客户经理',
        value:'khjl'
    }
]
const btnValue = ref('sjdw')
const designUnitData = ref([])

const changeRadio = (val:number)=>{
    btnValue.value = val;
    getDesignUnitData()
}

onMounted(()=>{
    getDesignUnitData()
})

const getDesignUnitData = async ()=>{
    const res = await getPf({ type: btnValue.value,pfType:'sjdwzf' })
    if(res.code === 200){
        designUnitData.value = res.data
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
</style>