<template>
    <div class="data-w-h" ref="barRef"></div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts';

interface Params{
    data?:any[]
    crosswiseData?:any[]
    verticalData?:any[]
    barTitle?:string
}

const props = defineProps<Params>()

const barRef = ref();
let myChart:any = null;

const initChart = ()=>{
    if(barRef.value){
        myChart = echarts.init(barRef.value);
    } 

    let option:any = {
        dataset: {
            source: props.data
        },
        xAxis: {},
        yAxis: {},
        series: []
    };

    if(props.data && props.data.length){
        option.xAxis = {
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'#808080'
                }
            },
            axisTick:{
                show:false
            }
        }

        option.series = [
            { type: 'bar',label:{ show:true, position:'top', color:'#808080'}, itemStyle: { color:'#07b6a9' } },
            { type: 'bar',label:{ show:true, position: 'top', color: '#808080'}, itemStyle: { color:'#fd987c' } },
            { type: 'bar',label:{ show:true, position: 'top', color: '#808080'}, itemStyle: { color:'#85daf6' } },
            { type: 'bar',label:{ show:true, position: 'top', color: '#808080'}, itemStyle: { color:'#fdaa58' } }
        ]
    }

    if(props.verticalData && props.verticalData.length){
        option.title = {
            text: props.barTitle,
            left:'200px',
            textStyle:{
                fontSize:12,
                color:'#707070'
            }
        }
        option.yAxis = {
            type:'value'
        }
        option.xAxis = {
            type: 'category',
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            data:props.verticalData?.map((item:any)=>{ return item.yData })
        }

        option.series = [
            { 
                data: props.verticalData?.map((item:any)=>{ return item.xData }),
                type:'bar',
                label:{
                    show:true,
                    fontSize: 12,
                    position:'top'
                },
                itemStyle:{
                    color:new echarts.graphic.LinearGradient(0,0,0,1,[
                        {
                            offset: 0,
                            color: '#a1cfcc'
                        },
                        {
                            offset: 1,
                            color: '#0f8780'
                        }
                    ])
                }
            }
        ]
        option.grid = {
            top: '10%',
            left: '8%',
            right: '4%',
            bottom: '15%'
        }
    }

    if(props.crosswiseData && props.crosswiseData.length){
        option.title = {
            text: props.barTitle,
            left:'200px',
            textStyle:{
                fontSize:14,
                color:'#707070'
            }
        }
        option.xAxis = {
            type:'value',
            show:false
        }

        option.yAxis = {
            type: 'category',
            axisLine:{
                show:false
            },
            data:props.crosswiseData?.map((item:any)=>{ return item.yData }),
            axisTick:{
                show:false
            }
        }

        option.series = [
            { 
                data: props.crosswiseData?.map((item:any)=>{ return item.xData }),
                type:'bar',
                label:{
                    show:true,
                    fontSize: 12,
                    color:'#fff'
                },
                itemStyle:{
                    color:new echarts.graphic.LinearGradient(0,0,1,1,[
                        {
                            offset: 0,
                            color: '#0f8780'
                        },
                        {
                            offset: 1,
                            color: '#a1cfcc'
                        }
                    ])
                }
            }
        ]
        option.grid = {
            top: '10%',
            left: '15%',
            right: '5%',
            bottom: '15%'
        }
    }
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