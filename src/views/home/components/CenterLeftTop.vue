<template>
    <div class="data-home-center-left-top data-w-h">
        <TitleCard title="本年委托可研项目数量" icon-class="icon-shendusikao">
            <template #rightValue>
                <el-radio-group v-model="btnValue" size="small" fill="#1ba49b" @change="changeRadio">
                    <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                </el-radio-group>
            </template>
            <Pie :data="pieData" :showLabelNormal="false"/>
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

const pieData:any = ref([])

onMounted(()=>{
    getPieData()
})

const getPieData = async ()=>{
    let params:any = {
        name:'bnwt',
        type:btnValue.value
    }
    const res:any = await pieGetData(params);
    if(res.code == 200){
        pieData.value = res.data;
    }
    console.log(res);
}

const changeRadio = (val:number) => {
    btnValue.value = val;
    getPieData()
} 

</script>
<style lang="less" scoped>
.data-home-center-left-top{
    background-color: var(--vt-c-white);
    border-radius: var(--small-radius);
}
    
</style>