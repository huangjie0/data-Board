<template>
    <div class="data-w-h" ref="barRef"></div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts';

interface Params{
    data:any[]
}

const props = defineProps<Params>();

const barRef = ref();
let myChart:any = null;

const initChart = ()=>{
    if(barRef.value){
        myChart = echarts.init(barRef.value);
    } 

    let option:any = {
        legend: {},
        tooltip: {},
        dataset: {
            source: props.data
        },
        xAxis: { 
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'#808080'
                }
            },
            axisTick:{
                show:false
            }
        },
        yAxis: {},
        series: [
            { type: 'bar',label:{ show:true, position:'top', color:'#808080'}, itemStyle: { color:'#07b6a9' } },
            { type: 'bar',label:{ show:true, position: 'top', color: '#808080'}, itemStyle: { color:'#fd987c' } },
            { type: 'bar',label:{ show:true, position: 'top', color: '#808080'}, itemStyle: { color:'#85daf6' } },
            { type: 'bar',label:{ show:true, position: 'top', color: '#808080'}, itemStyle: { color:'#fdaa58' } }
        ]
    };
    myChart && myChart.setOption(option)
}

const resizeChart = ()=>{
    window.onresize = ()=>{
        if(barRef.value) barRef.value.resize()
    }
}

onMounted(()=>{
    initChart()
    resizeChart()
})

onBeforeUnmount(()=>{
    if(myChart) echarts.dispose(myChart);
})

</script>
<style lang="less" scoped>
    
</style>