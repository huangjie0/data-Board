<template>
    <div class="common-pie data-w-h">
        <TitleCard v-model="v" :icon-class="iconClass" :options="[{ title:cardTitle , type:'0' }]">
            <template #rightValue>
                <el-radio-group v-model="btnValue" size="small" fill="#1ba49b" @change="changeRadio">
                    <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                </el-radio-group>
            </template>
            <Pie :data="pieData" v-if="!l"/>
        </TitleCard>
    </div>
</template>
<script setup lang="ts">
import { pieGetData } from '@/api/home/index.ts';

interface Params{
    cardTitle:string;
    iconClass:string;
    name:string
}

const btnValue = ref(0)
const l = ref(false);
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

const props = defineProps<Params>();

onMounted(()=>{getPieData()})

const getPieData = async ()=>{
    let params:any = {
        name:props.name,
        type:btnValue.value
    }
    l.value = true;
    const res:any = await pieGetData(params);
    if(res.code == 200){
        pieData.value = res.data
        l.value = false
    }
}

const changeRadio = (val:any) => {
    btnValue.value = val;
    getPieData()
} 
const v = ref("0")
</script>
<style lang="less" scoped>
.common-pie{
    background-color: var(--vt-c-white);
    border-radius: var(--small-radius);
}

:deep(.el-radio-button:hover .el-radio-button__inner) {
    background-color: var(--board-home);
    border-color: var(--board-home);
    color: var(--vt-c-white);
}  
</style>