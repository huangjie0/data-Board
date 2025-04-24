<template>
    <div class="data-w-h" ref="barRef"></div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts';

interface Params{
    data:any[]
}

defineProps<Params>();

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
            source: [
                ['product', '同比', '环比', '指标值','与总平均时长比较'],
                ['芜湖华瑞', -43.3, 85.8, 93.7,30],
                ['久隆设计', 83.1, 73.4, 55.1,40],
                ['东捷设计', 86.4, 65.2, 82.5,26],
                ['上电设计', 72.4, 53.9, 39.1,19],
                ['瀛海设计', 72.4, 53.9, 39.1,19],
                ['上海院', 72.4, 53.9, 39.1,19],
                ['市南设计', 72.4, 53.9, 39.1,19]
            ]
        },
        xAxis: { 
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'#808080'
                }
            },
            axisTick:{
                show:false,

            }
        },
        yAxis: {},
        series: [
            { 
                type: 'bar',
                label:{
                    show:true,
                    position:'top',
                    color:'#808080' 
                },
                itemStyle:{
                    borderRadius: [3, 3, 0, 0]
                }
            },
            { type: 'bar',label:{show:true,position:'top',color:'#808080'} },
            { type: 'bar',label:{show:true,position:'top',color:'#808080'} },
            { type: 'bar',label:{show:true,position:'top',color:'#808080'} }
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