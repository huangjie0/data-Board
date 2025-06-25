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
const btnValue = ref<any>(Type.designUnit)
const changeRadio = (type:any)=>{
    btnValue.value = type 
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
</script>
<style lang="less" scoped>
    .second-board{
        height: 20rem;
        margin: 0 0 2.375rem 0;
        &-container{
            padding: 1.125rem 2.1875rem 1.125rem 2.1875rem;
        }
    }
    :deep(.el-radio-button:hover .el-radio-button__inner) {
        background-color: var(--common-home-bg-2);
        border-color: var(--common-home-bg-2);
        color: var(--vt-c-white);
    } 
    
</style>