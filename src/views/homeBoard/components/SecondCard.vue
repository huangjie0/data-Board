<template>
    <div class="second-card data-fdr">
        <div class="data-f1 data-m-r">
            <TitleCard title="设计单位评分一览" icon-class="icon-faya" color="#1F3696">
                <template #rightValue>
                    <el-radio-group v-model="btnValue" size="small" fill="#2471FF" @change="changeRadio1">
                        <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                    </el-radio-group>
                </template>
                <div class="data-w-h data-bg data-b-r progress-container">
                     <ProgressBox :text="item.text" :value="item.number" v-for="(item,index) in d" :key="index"></ProgressBox>
                </div>
            </TitleCard>
        </div>
        <div class="data-f1 data-m-l">
            <TitleCard title="项目时长评分" icon-class="icon-muai" color="#1F3696">
                <template #rightValue>
                    <el-radio-group v-model="btnValue3" size="small" fill="#2471FF" @change="changeRadio3" class="data-m-r">
                        <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options2" :key="index"/>
                    </el-radio-group>

                    <el-radio-group v-model="btnValue2" size="small" fill="#2471FF" @change="changeRadio2">
                        <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                    </el-radio-group>
                </template>
                <div class="data-w-h data-bg data-b-r score-statistics-container">
                    <ScoreStatistics v-for="(item,index) in d" :key="index" :text="item.text" :value="item.number"/>
                </div>
            </TitleCard> 
        </div>
    </div> 
</template>
<script lang="ts" setup>
import Type from '@/views/home/type/index.ts'
import ProgressBox from './ProgressBox.vue';
import ScoreStatistics from './ScoreStatistics.vue';

const btnValue = ref<any>(Type.designUnit);
const btnValue2 = ref<any>(Type.designUnit);
const btnValue3 = ref('0')
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

const options2 = [
    {
        label:'在途项目平均时长评分',
        value:'0'
    },
    {
        label:'可研批复平均时长评分',
        value:'1'
    }
]

const commonFn = (type:any,v:any)=>{
    v.value = type;
}

const changeRadio1 = (type:any)=>{ commonFn(type,btnValue) }
const changeRadio2 = (type:any)=>{ commonFn(type,btnValue2) }
const changeRadio3 = (type:any)=>{ commonFn(type,btnValue3) }

const d = computed(()=>{
    return [
        { number: 10, text:"久隆设计" },
        { number: 19, text:"东揭设计" },
        { number: 33, text:"上电设计" },
        { number: 53, text:"上海院" },
        { number: 93, text:"市南设计" }
    ]
})

</script>
<style lang="less" scoped>
    .second-card{
        height: 21.56rem;
        margin-top: 30px;
        .progress-container,.score-statistics-container{
            padding: 20px;
        }
    }

    :deep(.el-radio-button:hover .el-radio-button__inner) {
        background-color: var(--common-home-bg-2);
        border-color: var(--common-home-bg-2);
        color: var(--vt-c-white);
    } 
</style> 