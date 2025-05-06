<template>
    <div class="common-bar data-w-h">
        <TitleCard :title="cardTitle" :icon-class="iconClass">
            <template #rightValue>
                <el-radio-group v-model="btnValue1" size="small" fill="#1ba49b" @change="changeRadio1">
                    <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options1" :key="index"/>
                </el-radio-group>

                <el-radio-group v-model="btnValue2" size="small" fill="#1ba49b" @change="changeRadio2">
                    <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options2" :key="index"/>
                </el-radio-group>
            </template> 
            <Bar :data="d" v-if="d.length"/>
        </TitleCard>
    </div>
</template>
<script lang="ts" setup>
import TitleCard from '@/components/TitleCard.vue';
import Bar from '@/components/Bar.vue';
import { getKyxmTimeData } from '@/api/home/index.ts';

interface Params{
    cardTitle:string;
    iconClass:string;
    kytype:string
}

const props = defineProps<Params>();

const btnValue1 = ref('sjdw')
const btnValue2 = ref('month')
const d:any = ref([])
 
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

const changeRadio1 = (type:string) => {
    btnValue1.value = type
    getBarData()
}

const changeRadio2 = (type:string) => {
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
    d.value = [];
    const res = await getKyxmTimeData({ type: btnValue1.value,time:btnValue2.value , kytype: props.kytype });
    if(res.code === 200){
        d.value.push(['product', '同比', '环比', '指标值','与总平均时长比较'])
        btnValue1.value === 'sjdw' ? pushData(res.data,d,'sjdw') : pushData(res.data,d,'khjl')
    }
}

onMounted(()=>{getBarData()})

</script>
<style lang="less" scoped>
.common-bar{
    background-color: var(--vt-c-white);
    border-radius: var(--small-radius);
    .el-radio-group{
        margin-left: var(--common-split);
    }
}
</style>