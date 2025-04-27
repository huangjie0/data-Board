<template>
    <div class="data-home-bottom-left data-w-h">
        <TitleCard title="在途项目平均时长" icon-class="icon-qingdan">
            <template #rightValue>
                <el-radio-group v-model="btnValue1" size="small" fill="#1ba49b" @change="changeRadio1">
                    <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options1" :key="index"/>
                </el-radio-group>

                <el-radio-group v-model="btnValue2" size="small" fill="#1ba49b" @change="changeRadio2">
                    <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options2" :key="index"/>
                </el-radio-group>
            </template> 
            <Bar :data="d" v-if="!chartLoading"/>
        </TitleCard>
    </div>
</template>
<script setup lang="ts">
import TitleCard from '@/components/TitleCard.vue';
import Bar from '@/components/Bar.vue';
import { getKyxmTimeData } from '@/api/home/index.ts';

const btnValue1 = ref('sjdw')
const btnValue2 = ref('month')
const d:any = ref([])
const chartLoading = ref(null)
 
const options1 = [
    {
        label:'设计单位',
        value:'sjdw'
    },
    {
        label:'客户经理',
        value:'khjl'
    }
]

const options2 = [
    {
        label:'当月',
        value: 'month'
    },
    {
        label:'当年',
        value: 'year'
    }
]

const changeRadio1 = (type:number) => {
    btnValue1.value = type
    getBarData()
}

const changeRadio2 = (type:number) => {
    btnValue2.value = type
    getBarData()
}

const pushData = (data:any,da:any,type:string)=>{
    data.forEach((item:any)=>{
        da.value.push([
            item[type],item.tb,item.hb,item.zbz,item.yzscbj
        ])
    })
}

const getBarData = async ()=>{
    chartLoading.value = true;
    d.value = [];
    const res = await getKyxmTimeData({ type: btnValue1.value,time:btnValue2.value , kytype:'ztxm'});
    if(res.code === 200){
        d.value.push(['product', '同比', '环比', '指标值','与总平均时长比较'])
        btnValue1.value === 'sjdw' ? pushData(res.data,d,'sjdw') : pushData(res.data,d,'khjl')
        chartLoading.value = false;
    }
}

onMounted(()=>{getBarData()})

</script>
<style lang="less" scoped>
.data-home-bottom-left{
    background-color: var(--vt-c-white);
    border-radius: var(--small-radius);
    .el-radio-group{
        margin-left: var(--common-split);
    }
}
    
</style>