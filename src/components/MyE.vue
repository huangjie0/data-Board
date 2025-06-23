<template>
    <div ref="myChart" class="data-w-h"></div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts';
interface Params{
    option: object
    isClick?:boolean
}

let chartInstance:any = null;
const myChart = ref();

const props = withDefaults(defineProps<Params>(),{
    isClick:false
})

const emits = defineEmits(['onClick'])

onMounted(()=>{
    nextTick(()=>{
        if(myChart.value){
           chartInstance = echarts.init(myChart.value);
           updateChart()
           if(props.isClick){
            chartInstance.getZr().on('click',(e:any)=>{
                if(e.target){
                    chartInstance.on('click',(params:object)=>{
                        emits('onClick',params)
                        chartInstance.off('click')
                    })
                }else{
                    emits('onClick',null)
                }
            })
           }
           window.addEventListener('resize',resizeEcharts)
        }
    })
})

const updateChart = ()=>{
    if(chartInstance && props.option){
        chartInstance.setOption(props.option,true);
    }
}

const resizeEcharts = ()=>{
    if(chartInstance){
        chartInstance.resize();
    }
}

watch(()=> props.option,updateChart);
onUnmounted(()=>{
    if(chartInstance){
        if(props.isClick){
            chartInstance.getZr().off('click');
        }
        chartInstance.dispose()
    }
    window.addEventListener('resize',resizeEcharts)
})

</script>
<style lang="less">
    
</style>