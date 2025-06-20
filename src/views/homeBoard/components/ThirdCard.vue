<template>
    <div class="third-card">
        <TitleCard title="项目质量评分" icon-class="icon-faya" color="#1F3696" bg-color="#E3EEFD">
            <template #rightValue>
                <el-radio-group v-model="btnValue" size="small" fill="#2471FF" @change="changeRadio1">
                    <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                </el-radio-group>
            </template>
             <div class="third-card-container data-w-h data-fdr">
                <div class="data-f1">
                    <Bar :home-board-data="d" bar-title="可研评审问题评分" home-board-color="#407CF8"></Bar>
                </div>
                <div class="data-f1 third-card-container-center">
                    <Bar :home-board-data="d" bar-title="可研评审问题评分" home-board-color="#5BC49F "></Bar>
                </div>
                <div class="data-f1">
                    <Bar :home-board-data="d" bar-title="可研评审问题评分" home-board-color="#FEB64D"></Bar>
                </div>
             </div>
        </TitleCard>
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
const changeRadio1 = (type:any)=>{ btnValue.value = type }
const d = computed(()=>{ 
    return [
        { name:"上海院",value:89 },
        { name:"九隆设计",value:89 },
        { name:"市南设计",value:89 },
        { name:"上电设计",value:89 },
        { name:"东捷设计",value:89 } 
    ]
 })
 
</script>
<style lang="less" scoped>
.third-card{
    height: 22.5rem;
    margin-top: 30px;
    &-container{
        height: 100%;
        padding: 16px;
        &-center{
            border-left: 2px solid rgb(255, 255, 255 , 0.47);
            border-right: 2px solid rgb(255, 255, 255 , 0.47);
        }
    }
}
</style>