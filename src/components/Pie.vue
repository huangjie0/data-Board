<template>
    <div class="data-w-h" ref="pieRef"></div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts';

interface Params{
    radius?: any[],
    center?: any[],
    data:any[],
    itemGap?:number,
    showLabelNormal?:boolean,
}

const props = withDefaults(defineProps<Params>(),{
    radius:[10,80],
    center:['35%', '48%'],
    itemGap:20,
    showLabelNormal:true
})

const pieRef = ref();
const myChart = ref(null);

const initChart = ()=>{
    if(pieRef.value) myChart.value = echarts.init(pieRef.value);
    
    let option:any = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x:'right',
            y:'center',
            icon:'circle',
            itemGap: props.itemGap
        },
        series: [
            {
                type: 'pie',
                radius: props.radius,
                label:{
                    normal:{
                        show:props.showLabelNormal
                    }
                },
                center: props.center,
                roseType: 'area',
                data: props.data
            }
        ]
    }
    myChart.value && myChart.value.setOption(option)
}

const resizeChart = ()=>{
    window.onresize = ()=>{
        if(myChart.value) myChart.value.resize()
    }
}

onMounted(()=>{
    initChart()
    resizeChart()
})

onBeforeUnmount(()=>{
    if(myChart.value) echarts.dispose(myChart.value);
})

</script>
<style lang="less" scoped>

</style>