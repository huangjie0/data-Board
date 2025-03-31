<template>
    <div class="data-home-center-left-top data-w-h">
        <TitleCard title="本年委托可研项目数量" icon-class="icon-shendusikao">
            <template #rightValue>
                <el-radio-group v-model="value" size="small" fill="#1ba49b">
                    <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                </el-radio-group>
            </template>
        </TitleCard>
    </div>
</template>
<script setup lang="ts">
import TitleCard from '@/components/TitleCard.vue';
import { ref } from 'vue'

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

</script>
<style lang="less" scoped>
.data-home-center-left-top{
    background-color: var(--vt-c-white);
    border-radius: var(--small-radius);
}
    
</style>