<template>
    <ChartCard :title="title">
        <div class="data-w-h data-fdr">
            <div class="data-f1" v-for="(item,index) in barList" :key="index">
                <Bar :vertical-data="item.verticalData" :bar-title="item.barTitle" v-if="!item.chartLoading"/>
            </div>
        </div>
    </ChartCard>
</template>
<script setup lang="ts">
import ChartCard from '@/components/ChartCard.vue';
import Bar from '@/components/Bar.vue';

interface Params{
    title:string;
    barList:any[];
}
defineProps<Params>();

</script>
<style lang="less" scoped>
    
</style>