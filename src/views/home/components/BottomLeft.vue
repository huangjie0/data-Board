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
            <Bar/>
        </TitleCard>
    </div>
</template>
<script setup lang="ts">
import TitleCard from '@/components/TitleCard.vue';
import Bar from '@/components/Bar.vue';

const btnValue1 = ref(0)
const btnValue2 = ref(0)

const options1 = [
    {
        label:'设计单位',
        value:0
    },
    {
        label:'客户经理',
        value:1
    }
]

const options2 = [
    {
        label:'当月',
        value:0
    },
    {
        label:'当年',
        value:1
    }
]

const changeRadio1 = (type:number) => {
    btnValue1.value = type
}

const changeRadio2 = (type:number) => {
    btnValue2.value = type
}


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