<template>
    <div class="second-card data-fdr">
        <div class="data-f1 data-m-r">
            <TitleCard title="设计单位评分一览" icon-class="icon-faya" color="#1F3696">
                <template #rightValue>
                    <el-radio-group v-model="btnValue" size="small" fill="#2471FF" @change="changeRadio">
                        <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                    </el-radio-group>
                </template>
                <div class="data-w-h data-bg data-b-r">

                </div>
            </TitleCard>
        </div>
        <div class="data-f1 data-m-l">
            <TitleCard title="项目时长评分" icon-class="icon-muai" color="#1F3696">
                <template #rightValue>
                  <div class="data-w-h">

                  </div>
                </template>
                <div class="data-w-h data-bg data-b-r">

                </div>
            </TitleCard> 
        </div>
    </div> 
</template>
<script lang="ts" setup>
import Type from '@/views/home/type/index.ts'

const btnValue = ref<any>(Type.designUnit);
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

const changeRadio = (type:any)=>{
    btnValue.value = type;
}
</script>
<style lang="less" scoped>
    .second-card{
        height: 21.56rem;
        margin-top: 30px;
    }


    :deep(.el-radio-button:hover .el-radio-button__inner) {
        background-color: var(--common-home-bg-2);
        border-color: var(--common-home-bg-2);
        color: var(--vt-c-white);
    } 
</style> 