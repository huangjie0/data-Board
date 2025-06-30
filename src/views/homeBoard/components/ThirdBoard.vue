<template>
    <div class="third-board">
        <TitleCard title="设计单位评分一览" iconClass="icon-faya" color="#192C7D" bg-color="#E8F1FD">
            <template #rightValue>
                    <el-radio-group v-model="btnValue" size="small" fill="#2772FF" @change="changeRadio">
                    <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                </el-radio-group>
            </template>
            <div class="data-w-h data-fdr third-board-box">
                <div class="data-f1">
                    <Bar2 :data="d" bar-color="#407CF8" y-name="分" title-text="可研评审问题评分"/>
                </div>
                <div class="data-f1 third-board-center">
                    <Bar2 :data="d" bar-color="#5BC49F" y-name="分" title-text="可研收口问题评分 "/>
                </div>
                <div class="data-f1">
                    <Bar2 :data="d" bar-color="#FEB64D" y-name="分" title-text="可研调整评分"/>
                </div>
            </div>
        </TitleCard>
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
        { name:'上海院',value:89 },
        { name:'久隆设计',value:65 },
        { name:'市南设计',value:61 },
        { name:'上电设计',value:57 },
        { name:'东捷设计',value:49 },
    ]
})

</script>
<style lang="less" scoped>
    .third-board{
        height: 20rem;
        margin: 0 0 2.375rem 0;
        &-box{
            padding: 1rem;
        }
        &-center{
            border-left: 1px solid white;
            border-right: 1px solid white;
        }
    }
</style>