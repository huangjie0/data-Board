<template>
    <div class="data-home-center-left-bottom data-w-h">
        <TitleCard title="本年已完成可研项目数量" icon-class="icon-dianpu">
            <template #rightValue>
                <el-radio-group v-model="value" size="small" fill="#1ba49b">
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

const value = ref(0)
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

const pieData = computed(()=>{
    return [
        {
            name:'上海院',
            value:79
        },
        {
            name:'上海设计',
            value:50
        },
        {
            name:'羸海设计',
            value:20
        },
        {
            name:'东街设计',
            value:30
        },
        {
            name:'久隆设计',
            value:90
        },
        {
            name:'芜湖华瑞',
            value:47
        },
        {
            name:'市南设计',
            value:70
        }
    ]
})

</script>
<style lang="less" scoped>
.data-home-center-left-bottom{
    background-color: var(--vt-c-white);
    border-radius: var(--small-radius);
}
</style>