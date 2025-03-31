<template>
    <div class="data-home-top data-around data-w-h">
        <div class="data-home-top-item data-f1" v-for="(item,index) in countData" :key="index">
            <BackgroundCard :number="item.number" :unit="item.unit" :text="item.text" :color="item.color" :icon-class="item.iconClass"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import BackgroundCard from '@/components/BackgroundCard.vue';
import { getTopData } from '@/api/home/index.ts'

const countData = computed(()=>{
    return [
        {
            number:102,
            unit:'个',
            text:'本年累计委托可研项目数量',
            color:'#06b6a9',
            iconClass:'icon-dianpu'
        },
        {
            number:216,
            unit:'个',
            text:'本年累计完成可研评审项目数量',
            color:'#0596c6',
            iconClass:'icon-dianpu'
        },
        {
            number:198,
            unit:'个',
            text:'截至目前仍超期项目数',
            color:'#9285eb',
            iconClass:'icon-dianpu'
        },
        {
            number:135,
            unit:'日',
            text:'本年可研批复平均时长',
            color:'#fdaa56',
            iconClass:'icon-shendusikao'
        },
        {
            number:117,
            unit:'日',
            text:'本年在途项目平均时长',
            color:'#18bdc2',
            iconClass:'icon-shendusikao'
        }
    ]
})

onMounted(async ()=>{
    const res = await getTopData()
    console.log('1111',res);
    
})
</script>
<style lang="less" scoped>
.data-home-top{
    padding: 30px 35px;
    background-color: var(--vt-c-white);
    border-radius: var(--small-radius);
    &-item{
        height: 100%;
        margin-right: 35px;
        &:last-child{
            margin: 0;
        }
    }

}
</style>