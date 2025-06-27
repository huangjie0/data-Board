<template>
    <div class="second-board data-fdr">
        <div class="data-f1 data-m-r">
            <TitleCard title="设计单位评分一览" iconClass="icon-faya" color="#192C7D" bg-color="#E8F1FD">
                <template #rightValue>
                    <el-radio-group v-model="btnValue" size="small" fill="#2772FF" @change="changeRadio">
                        <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                    </el-radio-group>
                </template>
                <div class="data-w-h second-board-container">
                    <ProgressGrid v-for="(item,index) in d" :key="index" :text="item.text" :number="item.number"/>
                </div>
            </TitleCard>
        </div>
        <div class="data-f1 data-m-l">
            <TitleCard title="项目时长评分" iconClass="icon-muai" color="#192C7D" bg-color="#E8F1FD">
                <template #rightValue>
                    <TypeButtons :option="o" @change="changeType"/>
                    <el-radio-group v-model="btnValue3" size="small" fill="#2772FF" @change="changeRadio3">
                        <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options2" :key="index"/>
                    </el-radio-group>
                    <el-radio-group v-model="btnValue2" size="small" fill="#2772FF" @change="changeRadio2" class="data-m-l">
                        <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                    </el-radio-group>
                </template>
                <div class="data-w-h second-board-right-container">
                    <div class="second-board-right-container-item" v-for="(item,index) in d" :key="index">
                        <ScoreCard :number="item.number" :name="item.text" :index="index + 1"></ScoreCard>
                    </div>
                </div>
            </TitleCard>
        </div>
    </div>
</template>
<script setup lang="ts">
import Type from '@/views/home/type/index.ts';

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
        value: '0'
    },
    {
        label:'可研批复平均时长评分',
        value: '1'
    }
]

const btnValue = ref<any>(Type.designUnit)
const btnValue2 = ref<any>(Type.designUnit)
const btnValue3 = ref('0')

const commonFn = (type:any,v:any)=>{
    v.value = type
}

const changeRadio = (type:any)=>{
    commonFn(type,btnValue)
}
const changeRadio2 = (type:any)=>{
    commonFn(type,btnValue2)
}

const changeRadio3 = (type:any)=>{
    commonFn(type,btnValue3)
}

const d = computed(()=>{
    return [
        { text:'久隆设计', number:93 },
        { text:'东捷设计', number:87 },
        { text:'上电设计', number:84 },
        { text:'上海院', number:79 },
        { text:'市南设计', number:73 },
    ]
})

const o = computed(()=>{
    return [
        { type:'0',name:'在途', color:'#4F6EFA' },
        { type:'1',name:'可研', color:'#5BC49F' },
    ]
})

const changeType = (type:string)=>{
    console.log(type);
}

</script>
<style lang="less" scoped>
    .second-board{
        height: 20rem;
        margin: 0 0 2.375rem 0;
        &-container{
            padding: 1.125rem 2.1875rem 1.125rem 2.1875rem;
        }
        &-right-container{
            padding: 1.5625rem  3rem;
            &-item{
                height: 2.5625rem;
                margin-bottom: .625rem;
            }
        }
    }
    :deep(.el-radio-button:hover .el-radio-button__inner) {
        background-color: var(--common-home-bg-2);
        border-color: var(--common-home-bg-2);
        color: var(--vt-c-white);
    } 
    
</style>