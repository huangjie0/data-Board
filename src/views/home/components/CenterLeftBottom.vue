<template>
    <div class="data-home-center-left-bottom data-w-h">
        <TitleCard title="本年已完成可研项目数量" icon-class="icon-dianpu">
            <template #rightValue>
                <el-radio-group v-model="btnValue" size="small" fill="#1ba49b" @change="changeRadio">
                    <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                </el-radio-group>
            </template>
            <Pie :data="pieData" :showLabelNormal="false" v-if="!chartLoading"/>
        </TitleCard>
    </div>
</template>
<script setup lang="ts">
import TitleCard from '@/components/TitleCard.vue';
import Pie from '@/components/Pie.vue';
import { pieGetData } from '@/api/home/index.ts';

const btnValue = ref(0)
const options = [
    {
        label:'设计单位',
        value:0
    },
    {
        label:'电压等级',
        value:1
    },
    {
        label:'供电公司',
        value:2
    }
]

const pieData:any = ref([]);
const chartLoading = ref(null);

onMounted(()=>{getPieData()})

const getPieData = async ()=>{
    let params:any = {
        name:'bnywc',
        type:btnValue.value
    }
    chartLoading.value = true;
    const res:any = await pieGetData(params);
    if(res.code == 200){
        pieData.value = res.data
        chartLoading.value = false
    }
}

const changeRadio = (val:number) => {
    btnValue.value = val;
    getPieData()
} 

</script>
<style lang="less" scoped>
.data-home-center-left-bottom{
    background-color: var(--vt-c-white);
    border-radius: var(--small-radius);
}
</style>