<template>
    <div class="third-card">
        <TitleCard title="项目质量评分" icon-class="icon-faya" color="#1F3696" bg-color="#E3EEFD">
            <template #rightValue>
                <el-radio-group v-model="btnValue" size="small" fill="#2471FF" @change="changeRadio1">
                    <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                </el-radio-group>
            </template>
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

</script>
<style lang="less" scoped>
.third-card{
    height: 22.5rem;
    margin-top: 30px;
}
</style>